import { useEffect } from "react";
import { useLocation } from "react-router-dom";

let hasLoggedVisit = false;

export default function VisitLogger() {
  const location = useLocation();

  useEffect(() => {
    if (!import.meta.env.PROD || hasLoggedVisit) {
      return;
    }

    hasLoggedVisit = true;

    const route = `${location.pathname}${location.search}`;
    fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ route }),
      keepalive: true,
    }).catch(() => {
      // Intentionally ignore analytics logging failures.
    });
  }, [location.pathname, location.search]);

  return null;
}
