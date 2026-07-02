package advanced_java;

public class VirtualThreadsExample {
    public static void main(String[] args) throws Exception {
        for(int i = 0; i < 100000; i++) {
            Thread.startVirtualThread(() -> {});
        }
        System.out.println("Launched 100,000 virtual threads fast!");
    }
}
