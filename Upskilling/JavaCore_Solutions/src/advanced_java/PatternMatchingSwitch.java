package advanced_java;

public class PatternMatchingSwitch {
    public static void main(String[] args) {
        checkType(42); checkType("Hello"); checkType(3.14);
    }
    static void checkType(Object obj) {
        String msg = switch (obj) {
            case Integer i -> "It is an Integer: " + i;
            case String s -> "It is a String: " + s;
            case Double d -> "It is a Double: " + d;
            default -> "Unknown type";
        };
        System.out.println(msg);
    }
}
