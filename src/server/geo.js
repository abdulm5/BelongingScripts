import { createHash } from "node:crypto";
import { geolocation } from "@vercel/functions";

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

export function getGeoPayload(request, geoResolver = geolocation) {
  const geo = geoResolver(request);
  const rawPostalCode =
    request.headers["x-vercel-ip-postal-code"] ||
    request.headers.get?.("x-vercel-ip-postal-code") ||
    null;
  const rawForwardedFor =
    request.headers["x-forwarded-for"] ||
    request.headers.get?.("x-forwarded-for") ||
    null;

  return {
    city: geo.city || null,
    country: geo.country || null,
    countryRegion: geo.countryRegion || null,
    postalCode: rawPostalCode || null,
    edgeRegion: geo.region || null,
    timezone: geo.timezone || null,
    ip: getFirstForwardedIp(rawForwardedFor),
  };
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
