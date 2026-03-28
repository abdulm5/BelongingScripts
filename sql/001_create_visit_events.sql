CREATE TABLE IF NOT EXISTS visit_events (
  id BIGSERIAL PRIMARY KEY,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  route TEXT NOT NULL,
  country TEXT,
  country_region TEXT,
  city TEXT,
  postal_code TEXT,
  timezone TEXT,
  edge_region TEXT,
  ip_hash TEXT,
  user_agent_hash TEXT
);

CREATE INDEX IF NOT EXISTS visit_events_occurred_at_idx
  ON visit_events (occurred_at DESC);

CREATE INDEX IF NOT EXISTS visit_events_country_idx
  ON visit_events (country, country_region, city);
