import { getGeoPayload } from "../src/server/geo.js";

export default function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  return response.status(200).json(getGeoPayload(request));
}
