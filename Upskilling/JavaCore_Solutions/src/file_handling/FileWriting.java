package file_handling;

import java.io.FileWriter;
import java.util.Scanner;
public class FileWriting {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter string: ");
        String str = sc.nextLine();
        FileWriter fw = new FileWriter("output.txt");
        fw.write(str);
        fw.close();
        System.out.println("Data written to output.txt");
    }
}
