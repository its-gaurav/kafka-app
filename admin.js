const {kafka} = require("./client");

async function init() {
    const admin = kafka.admin();
    console.log("Connecting Admin");
    admin.connect();
    console.log("Admin Connected");

    console.log("Creating Topic [rider-updates]");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2
            }
        ]
    });
    console.log("Created Topic [rider-updates] Success");

    console.log("Disconnecting Admin");
    await admin.disconnect();
    console.log("Admin Disconnected");
}

init();
