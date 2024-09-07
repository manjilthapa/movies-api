import express from "express"
import mongoose from "mongoose"
import movieRoutes from "./routes/movie.js"

const DB_URI = "mongodb+srv://admin:admin@rental-name.yzrnf.mongodb.net/bwn-new-dev?retryWrites=true&w=majority&appName=rental-name"

export const createApp = () => {
  const app = express()
  app.use(express.json())

  app.use("/api/v1/movie", movieRoutes)

  return app
}

export const connectDB = () => {
  mongoose.connect(DB_URI).then(() => console.log("DB Connected!"))
}
