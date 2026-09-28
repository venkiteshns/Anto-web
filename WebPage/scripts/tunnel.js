const localtunnel = require("localtunnel");

const PORT = 3000;
const SUBDOMAIN = "florenne-estate-preview";

function connect() {
  console.log("Connecting tunnel...");
  localtunnel({ port: PORT, subdomain: SUBDOMAIN })
    .then((tunnel) => {
      console.log("=== PUBLIC TUNNEL ACTIVE ===");
      console.log("URL:", tunnel.url);
      console.log("Password (IP): 103.191.187.6");
      console.log("============================");

      tunnel.on("close", () => {
        console.log("Tunnel connection closed. Reconnecting in 3s...");
        setTimeout(connect, 3000);
      });

      tunnel.on("error", (err) => {
        console.error("Tunnel error:", err?.message || err);
        try { tunnel.close(); } catch (_) {}
        setTimeout(connect, 4000);
      });
    })
    .catch((err) => {
      console.error("Tunnel creation failed:", err?.message || err);
      setTimeout(connect, 5000);
    });
}

// Keep event loop alive indefinitely
setInterval(() => {}, 1 << 30);

connect();
