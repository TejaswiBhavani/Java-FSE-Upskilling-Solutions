-- Exercise 12
SELECT e.title, COUNT(s.session_id) as max_sessions FROM Events e JOIN Sessions s ON e.event_id = s.event_id GROUP BY e.event_id, e.title ORDER BY max_sessions DESC LIMIT 1;
