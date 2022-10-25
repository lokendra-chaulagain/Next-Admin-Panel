import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import attendanceRoute from "./routes/attendance.route.js";
import employeeRoute from "./routes/employee.route.js";
import leaveRoute from "./routes/leave.route.js";
import productRoute from "./routes/product.js";
import cors from "cors";
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

//DbConnection
mongoose
  .connect(process.env.MONGO_DB_URI, {
    autoIndex: true,
  })
  .then(() => {
    console.log("MongoDb connected successfully !");
  })
  .catch((error) => {
    console.log("MondoDb Disconnected !!!", error);
  });

//serverCheck
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the server" });
});

app.use("/api/product", productRoute);
app.use("/api/employee", employeeRoute);
app.use("/api/attendance", attendanceRoute);
app.use("/api/leave", leaveRoute);

//portListening
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at port ${port}`);
  } else {
    console.log("Error while running the server", error);
  }
});
