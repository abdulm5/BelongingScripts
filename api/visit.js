import {
  getGeoPayload,
  hashIdentifier,
  normalizeRoute,
} from "../src/server/geo.js";
import { insertVisitEvent } from "../src/server/visitStore.js";

function readJsonBody(request) {
  if (!request.body) {
    return {};
  }

  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body);
    } catch {
      return {};
    }
  }

  if (typeof request.body === "object") {
    return request.body;
  }

  return {};
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const env = globalThis.process?.env ?? {};

  try {
    const body = readJsonBody(request);
    const route = normalizeRoute(body.route);
    const geo = getGeoPayload(request);
    const salt = env.VISITOR_HASH_SALT;
    const userAgent = request.headers["user-agent"] || null;

    const ipHash = hashIdentifier(geo.ip, salt);
    const userAgentHash = hashIdentifier(userAgent, salt);

    await insertVisitEvent({
      route,
      country: geo.country,
      countryRegion: geo.countryRegion,
      city: geo.city,
      postalCode: geo.postalCode,
      timezone: geo.timezone,
      edgeRegion: geo.edgeRegion,
      ipHash,
      userAgentHash,
    });

    return response.status(202).json({ ok: true });
  } catch (error) {
    return response.status(500).json({
      error: "Failed to store visit event",
      message:
        env.NODE_ENV === "production"
          ? "Internal Server Error"
          : error.message,
    });
  }
}
