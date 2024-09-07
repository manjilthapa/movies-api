import { Router } from "express"
import { getMovies, createMovie, getMovieById, updateMovieById } from "../controllers/movie.js"

const router = Router()

router.get("/all", getMovies)
router.post("/", createMovie)
router.get("/:id", getMovieById)
router.patch("/:id", updateMovieById)

export default router
