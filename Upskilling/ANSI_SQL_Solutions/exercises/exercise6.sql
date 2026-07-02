-- Exercise 6
SELECT e.title, r.resource_type, COUNT(r.resource_id) as total_resources FROM Events e LEFT JOIN Resources r ON e.event_id = r.event_id GROUP BY e.event_id, e.title, r.resource_type;
