import express from "express";
import mediaController from "../controllers/media.contoller.js"

/**
 * Express router for handling media routes.
 * @type {import('express').Router}
 */
const router = express.Router({ mergeParams: true })

router.get("/search", mediaController.search)

router.get("/genres", mediaController.getGenres)

router.get("/detail/:mediaId", mediaController.getDetail)

router.get("/:mediaCategory", mediaController.getList)

export default router;