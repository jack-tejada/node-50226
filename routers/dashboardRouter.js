const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middlewares/verifyToken')

router.get('/', verifyToken, (req, res) => {
    res.status(200).json({"message":"Bienvenido al dashboard","email":req.user.email})
})

module.exports = router