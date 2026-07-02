package loops_and_logic;

import java.util.Scanner;
import java.util.Random;
public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int target = new Random().nextInt(100) + 1;
        int guess;
        do {
            System.out.print("Guess the number (1-100): ");
            guess = sc.nextInt();
            if(guess > target) System.out.println("Too high!");
            else if(guess < target) System.out.println("Too low!");
        } while(guess != target);
        System.out.println("Correct!");
    }
}
