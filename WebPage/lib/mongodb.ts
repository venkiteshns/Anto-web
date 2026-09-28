import { MongoClient } from "mongodb";
import dns from "dns";

// Ensure reliable DNS resolution for environments using SRV records
try {
  dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"]);
} catch {
  // Ignore in environments where setServers is restricted
}

// Direct replica set seed list bypasses DNS SRV queries completely,
// eliminating 'querySrv ECONNREFUSED' issues on Windows / local router firewalls.
const DIRECT_REPLICA_SET_URI =
  "mongodb://anthonyjames:antonfs7019@ac-rvnxs6b-shard-00-00.6agaqcd.mongodb.net:27017,ac-rvnxs6b-shard-00-01.6agaqcd.mongodb.net:27017,ac-rvnxs6b-shard-00-02.6agaqcd.mongodb.net:27017/godrej_florenne?ssl=true&replicaSet=atlas-g7o3vr-shard-0&authSource=admin&appName=Anthony";

const uri = process.env.MONGODB_URI || DIRECT_REPLICA_SET_URI;

const options = {
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function connectClient(): Promise<MongoClient> {
  const client = new MongoClient(uri, options);
  const promise = client.connect().catch((err) => {
    // Clear cached promise on failure so subsequent requests can retry
    if (process.env.NODE_ENV === "development") {
      global._mongoClientPromise = undefined;
    }
    throw err;
  });
  return promise;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = connectClient();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = connectClient();
}

export default clientPromise;
