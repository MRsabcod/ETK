import express from 'express'
import custQueriesRouter from './custQueries.js'
const router=express.Router()

router.use('/custQueries',custQueriesRouter)
export default router