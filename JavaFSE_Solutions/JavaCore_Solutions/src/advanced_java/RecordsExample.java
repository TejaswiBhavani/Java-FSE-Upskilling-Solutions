package advanced_java;

import java.util.List;
public class RecordsExample {
    record Person(String name, int age) {}
    public static void main(String[] args) {
        List<Person> list = List.of(new Person("Alice", 25), new Person("Bob", 17));
        list.stream().filter(p -> p.age() >= 18).forEach(System.out::println);
    }
}
