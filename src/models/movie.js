import mongoose from "mongoose"

const MovieSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  year: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  genre: {
    type: mongoose.Schema.Types.String,
  },
})

export const Movie = mongoose.model("Movie", MovieSchema)
