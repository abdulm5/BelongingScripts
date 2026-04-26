import { createHash } from "node:crypto";

function getHeader(request, name) {
  // Node.js IncomingMessage: headers is a plain object
  if (request.headers && typeof request.headers === "object") {
    const val = request.headers[name];
    if (val) return val;
  }
  // Web API Request (Edge): headers has .get()
  if (typeof request.headers?.get === "function") {
    return request.headers.get(name) || null;
  }
  return null;
}

export function getGeoPayload(request) {
  // Vercel injects these headers on every request
  const city        = getHeader(request, "x-vercel-ip-city");
  const country     = getHeader(request, "x-vercel-ip-country");
  const region      = getHeader(request, "x-vercel-ip-country-region");
  const postalCode  = getHeader(request, "x-vercel-ip-postal-code");
  const timezone    = getHeader(request, "x-vercel-ip-timezone");
  const edgeRegion  = getHeader(request, "x-vercel-edge-region");

  const rawForwardedFor = getHeader(request, "x-forwarded-for");

  return {
    city:          city          ? decodeURIComponent(city) : null,
    country:       country       || null,
    countryRegion: region        || null,
    postalCode:    postalCode    || null,
    timezone:      timezone      || null,
    edgeRegion:    edgeRegion    || null,
    ip:            getFirstForwardedIp(rawForwardedFor),
  };
}

export function getFirstForwardedIp(headerValue) {
  if (!headerValue || typeof headerValue !== "string") {
    return null;
  }
  const firstIp = headerValue
    .split(",")
    .map((part) => part.trim())
    .find(Boolean);
  return firstIp || null;
}

export function hashIdentifier(value, salt) {
  if (!value) {
    return null;
  }
  if (!salt) {
    throw new Error("VISITOR_HASH_SALT is required for hashing visitor metadata.");
  }
  return createHash("sha256").update(`${salt}:${value}`).digest("hex");
}

export function normalizeRoute(rawRoute) {
  if (!rawRoute || typeof rawRoute !== "string") {
    return "/";
  }
  if (!rawRoute.startsWith("/")) {
    return `/${rawRoute}`;
  }
  return rawRoute;
}
