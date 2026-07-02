package advanced_java;

import java.util.concurrent.Executors;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;
public class ExecutorCallableExample {
    public static void main(String[] args) throws Exception {
        ExecutorService exec = Executors.newFixedThreadPool(2);
        Future<Integer> f = exec.submit(() -> { return 42; });
        System.out.println("Result: " + f.get());
        exec.shutdown();
    }
}
