import test from "node:test";
import assert from "node:assert/strict";

import {
  getFirstForwardedIp,
  getGeoPayload,
  hashIdentifier,
  normalizeRoute,
} from "../src/server/geo.js";

test("getFirstForwardedIp returns first ip in forwarded chain", () => {
  assert.equal(
    getFirstForwardedIp("203.0.113.4, 70.41.3.18, 150.172.238.178"),
    "203.0.113.4",
  );
});

test("getFirstForwardedIp handles missing values", () => {
  assert.equal(getFirstForwardedIp(undefined), null);
  assert.equal(getFirstForwardedIp(""), null);
});

test("hashIdentifier is stable with the same salt and value", () => {
  const one = hashIdentifier("203.0.113.4", "abc123");
  const two = hashIdentifier("203.0.113.4", "abc123");
  assert.equal(one, two);
  assert.equal(one.length, 64);
});

test("hashIdentifier returns null for empty values", () => {
  assert.equal(hashIdentifier("", "abc123"), null);
  assert.equal(hashIdentifier(null, "abc123"), null);
});

test("hashIdentifier requires a salt when value exists", () => {
  assert.throws(() => hashIdentifier("203.0.113.4", ""), {
    message: "VISITOR_HASH_SALT is required for hashing visitor metadata.",
  });
});

test("normalizeRoute standardizes invalid or relative routes", () => {
  assert.equal(normalizeRoute(), "/");
  assert.equal(normalizeRoute("about"), "/about");
  assert.equal(normalizeRoute("/about"), "/about");
});

test("getGeoPayload maps geo resolver and headers", () => {
  const request = {
    headers: {
      "x-vercel-ip-postal-code": "10001",
      "x-forwarded-for": "203.0.113.4, 70.41.3.18",
    },
  };
  const payload = getGeoPayload(request, () => ({
    city: "New York",
    country: "US",
    countryRegion: "NY",
    region: "iad1",
    timezone: "America/New_York",
  }));

  assert.deepEqual(payload, {
    city: "New York",
    country: "US",
    countryRegion: "NY",
    postalCode: "10001",
    edgeRegion: "iad1",
    timezone: "America/New_York",
    ip: "203.0.113.4",
  });
});
