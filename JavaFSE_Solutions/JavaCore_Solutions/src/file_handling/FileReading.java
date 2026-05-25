package file_handling;

import java.io.File;
import java.util.Scanner;
public class FileReading {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(new File("output.txt"));
        while (sc.hasNextLine()) {
            System.out.println(sc.nextLine());
        }
        sc.close();
    }
}
