package advanced_java;

import java.lang.reflect.Method;
public class ReflectionExample {
    public void myMethod() { System.out.println("Invoked dynamically!"); }
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("advanced_java.ReflectionExample");
        Object obj = clazz.getDeclaredConstructor().newInstance();
        Method m = clazz.getDeclaredMethod("myMethod");
        m.invoke(obj);
    }
}
