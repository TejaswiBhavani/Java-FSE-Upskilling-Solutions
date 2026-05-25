package multithreading;

public class ThreadCreation {
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> System.out.println("Thread 1 running"));
        Thread t2 = new Thread(() -> System.out.println("Thread 2 running"));
        t1.start(); t2.start();
    }
}
