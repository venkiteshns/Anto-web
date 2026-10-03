const { spawn } = require("child_process");

const PORT = 3000;
const SUBDOMAIN = "florenne-estate-preview";

console.log("Connecting tunnel via npx localtunnel...");
console.log("=== PUBLIC TUNNEL INITIALIZING ===");
console.log("Password (IP): 103.191.187.6");
console.log("==================================");

const child = spawn("npx", ["--yes", "localtunnel", "--port", String(PORT), "--subdomain", SUBDOMAIN], {
  stdio: "inherit",
});

child.on("close", (code) => {
  console.log(`Tunnel process exited with code ${code}`);
});
