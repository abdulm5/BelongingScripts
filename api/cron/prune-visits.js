import { pruneExpiredVisits } from "../../src/server/visitStore.js";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const env = globalThis.process?.env ?? {};

  try {
    const retentionDays = Number.parseInt(
      env.VISIT_RETENTION_DAYS || "30",
      10,
    );
    const deleted = await pruneExpiredVisits(retentionDays);

    return response.status(200).json({
      ok: true,
      deleted,
      retentionDays: Number.isFinite(retentionDays) ? retentionDays : 30,
    });
  } catch (error) {
    return response.status(500).json({
      error: "Failed to prune visit events",
      message:
        env.NODE_ENV === "production"
          ? "Internal Server Error"
          : error.message,
    });
  }
}
