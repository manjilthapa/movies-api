import { Movie } from "../models/movie.js"

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.status(200).json(movie)
  } catch (error) {
    res.status(404).send({ error: "Movie not found" })
  }
}
export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({})
    res.status(200).json(movies)
  } catch (error) {
    res.sendStatus(422)
  }
}

export const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body)
    res.status(201).json(movie.id)
  } catch (error) {
    res.status(422).send({ error: error.message })
  }
}

export const updateMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    if (!movie) {
      return res.status(404).send({ error: "Movie not found" })
    }
    await Movie.findOneAndUpdate(movie, req.body)
    res.sendStatus(204)
  } catch (error) {
    res.status(422).send({ error: error.message })
  }
}
