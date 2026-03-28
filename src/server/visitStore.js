import { sql } from "@vercel/postgres";

export async function insertVisitEvent({
  route,
  country,
  countryRegion,
  city,
  postalCode,
  timezone,
  edgeRegion,
  ipHash,
  userAgentHash,
}) {
  await sql`
    INSERT INTO visit_events (
      route,
      country,
      country_region,
      city,
      postal_code,
      timezone,
      edge_region,
      ip_hash,
      user_agent_hash
    ) VALUES (
      ${route},
      ${country},
      ${countryRegion},
      ${city},
      ${postalCode},
      ${timezone},
      ${edgeRegion},
      ${ipHash},
      ${userAgentHash}
    )
  `;
}

export async function pruneExpiredVisits(retentionDays = 30) {
  const parsedDays = Number.isFinite(retentionDays)
    ? Math.max(1, Math.floor(retentionDays))
    : 30;
  const intervalLiteral = `${parsedDays} days`;

  const result = await sql`
    DELETE FROM visit_events
    WHERE occurred_at < NOW() - ${intervalLiteral}::interval
  `;

  return result.rowCount ?? 0;
}
