const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({name: "BigFatBilly"})
})
router.post('/', (req, res) => {

})

router.get('/:address', (req, res) => {

})

router.put('/:address', (req, res) => {

})

router.delete('/:address', (req, res) => {

})


module.exports = router
