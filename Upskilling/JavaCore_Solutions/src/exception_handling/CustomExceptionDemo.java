package exception_handling;

import java.util.Scanner;
public class CustomExceptionDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter age: ");
        try {
            int age = sc.nextInt();
            if (age < 18) throw new InvalidAgeException("Age less than 18 not allowed.");
            System.out.println("Access granted.");
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}
