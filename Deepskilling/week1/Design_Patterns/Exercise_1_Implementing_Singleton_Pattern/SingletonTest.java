public class SingletonTest {
    public static void main(String[] args) {
        // Attempt to get multiple instances of Logger
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Check if both references point to the same object
        if (logger1 == logger2) {
            System.out.println("Singleton pattern is implemented correctly.");
            System.out.println("Both logger1 and logger2 references point to the same memory location: " + logger1);
        } else {
            System.out.println("Singleton pattern failed.");
        }

        // Test logging capability
        logger1.log("This is a test message from logger1.");
        logger2.log("This is a test message from logger2.");
    }
}
