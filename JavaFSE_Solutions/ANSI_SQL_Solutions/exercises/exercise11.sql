-- Exercise 11
SELECT DATE(registration_date) as day_registered, COUNT(user_id) as new_users FROM Users WHERE registration_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) GROUP BY DATE(registration_date);
