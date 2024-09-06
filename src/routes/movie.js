import { Router } from "express"
import { GetMovies } from "../controllers/movie.js"

const router = Router()

router.get("/", GetMovies)

export default router
