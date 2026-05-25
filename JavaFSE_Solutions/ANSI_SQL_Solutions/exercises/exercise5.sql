-- Exercise 5
SELECT u.city, COUNT(DISTINCT r.user_id) as active_users_count FROM Users u JOIN Registrations r ON u.user_id = r.user_id GROUP BY u.city ORDER BY active_users_count DESC LIMIT 5;
