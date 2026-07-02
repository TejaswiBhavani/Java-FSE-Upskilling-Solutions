-- Exercise 17
SELECT speaker_name, COUNT(session_id) as sessions_handling FROM Sessions GROUP BY speaker_name HAVING COUNT(session_id) > 1;
