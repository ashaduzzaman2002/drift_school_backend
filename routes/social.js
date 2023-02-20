const Social = require('../models/Social')

const Router = require('express').Router
const router = Router()


// routes
router.get('/', async (req, res) => {
    const social = await Social.find()

    res.json({success: true, social})
})

router.put('/update', async (req, res) => {
    const {_id, whatsapp, telegram, facebook, instagram} = req.body
    const social = await Social.findByIdAndUpdate({_id}, {whatsapp, facebook, instagram, telegram})

    await social.save()

    res.json({success: true, message: 'Updated successfully'})
})

module.exports = router