package collections;

import java.util.Arrays;
import java.util.List;
import java.util.Collections;
public class LambdaExpressions {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Zebra", "Apple", "Mango");
        Collections.sort(list, (a, b) -> a.compareTo(b));
        System.out.println(list);
    }
}
