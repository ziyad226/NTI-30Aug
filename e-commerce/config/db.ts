import exp from "constants";
import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.DB!)
    .then(() => {
      console.log(`mongodb connected to ${process.env.DB} `);
    })
    .catch((err) => {
      console.log(err);
    });
};export default dbConnection
