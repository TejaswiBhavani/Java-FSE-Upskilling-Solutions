package networking;

import java.net.ServerSocket;
import java.net.Socket;
public class TCPServer {
    public static void main(String[] args) throws Exception {
        ServerSocket server = new ServerSocket(8080);
        System.out.println("Server started on 8080...");
        // Socket s = server.accept();
        server.close();
    }
}
