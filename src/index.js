import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js"

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
      const port = process.env.PORT || 8000;
      app.on("error", (error) => {
        console.log("Express app error: ", error) 
      });

      const server = app.listen(port, () => {
        console.log("Server is running at port: ", process.env.PORT);
      });

      server.on("error", (error) => {
        console.log("HTTP server error: ", error)
      })

  })
  .catch((error) => {
    console.log("MongoDB connection error: ", error)
    process.exit(1)
  });
