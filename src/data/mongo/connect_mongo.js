import db from "./mongodb.js";


function connect(){
    db.on("error", console.error.bind(console, "MongoDB connection error: "));
    db.once("open", () => {
        console.log("Connected to MongoDB");
    });
}

export default connect