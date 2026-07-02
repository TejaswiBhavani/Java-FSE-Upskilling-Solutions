package bytecode;

public class BytecodeExample {
    public void dummy() { int x = 5; }
    public static void main(String[] args) {
        System.out.println("Compile then run: javap -c BytecodeExample");
    }
}
