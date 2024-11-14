// dbConfig.js

// import mongoose from "mongoose";

// export async function connect() {
//   try {
//     const res = await mongoose.connect("mongodb://");
//     console.log("DB Connected >>>");
//   } catch (err) {
//     console.log(err);
//   }
// }

// connect();

import mongoose from "mongoose";

let dbConnected = false;

export async function connect() {
  if (dbConnected) {
    return; // Already connected
  }

  try {
    const res = await mongoose.connect(
      "mongodb://localhost:27017/yourDatabaseName"
    );
    console.log("DB Connected >>>");
    dbConnected = true;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
