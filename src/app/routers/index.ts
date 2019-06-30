import express from 'express'
import graphql from '@/app/graphql'

const router = express.Router()

router.use('/graphql', graphql)

export default router
