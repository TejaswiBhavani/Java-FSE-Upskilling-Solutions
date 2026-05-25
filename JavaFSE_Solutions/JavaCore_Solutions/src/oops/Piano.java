package oops;

public class Piano implements Playable {
    @Override public void play() { System.out.println("Playing piano keys"); }
    public static void main(String[] args) {
        new Guitar().play();
        new Piano().play();
    }
}
