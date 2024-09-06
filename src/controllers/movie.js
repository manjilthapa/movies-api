import { Movie } from "../models/movie.js"

export const GetMovies = async (req, res) => {
  try {
    const movies = await Movie.find({})
    res.status(200).json(movies)
  } catch (error) {
    res.sendStatus(422)
  }
}
