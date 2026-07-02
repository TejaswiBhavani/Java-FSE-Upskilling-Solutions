package jdbc;

public class StudentDAO {
    // Requires Connection dependency, skeleton code provided
    public void insertStudent(int id, String name) { System.out.println("Inserted " + name); }
    public static void main(String[] args) { new StudentDAO().insertStudent(1, "Alice"); }
}
