import { Server } from "socket.io";
import readline from "readline";

const io = new Server(3000);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let currentSocket = null;

io.on("connection", (socket) => {
    console.log("Client connected");

    currentSocket = socket;

    socket.on("message", (msg) => {
        console.log("\nClient:", msg);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

// Server terminal se message bhejna
rl.on("line", (input) => {
    if (currentSocket) {
        currentSocket.emit("message", input);
    } else {
        console.log("No client connected");
    }
});