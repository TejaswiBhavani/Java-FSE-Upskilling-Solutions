package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
public class BasicJDBCConnection {
    public static void main(String[] args) {
        try {
            // Note: Update URL/User/Pass as needed
            Connection conn = DriverManager.getConnection("jdbc:sqlite:memory:"); 
            System.out.println("Connected to JDBC!");
        } catch (Exception e) { e.printStackTrace(); }
    }
}
