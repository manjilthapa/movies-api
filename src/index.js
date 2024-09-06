import mongoose from "mongoose"
import { connectDB, createApp } from "./initial-config.js"

connectDB()
const app = createApp()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("### server is running on port 3000 ###")
})
