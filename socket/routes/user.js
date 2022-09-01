const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
  console.log(req.body, 'post')
})
router.get('/getList', (req, res) => {
  console.log(req.query, 'get')
})

module.exports = router