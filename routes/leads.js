const Leads = require('../models/Leads')

const Router = require('express').Router
const router = Router()


// routes
router.post('/subcribe', async (req, res) => {
    const {email} = req.body

    console.log(req.body);
    let lead = await Leads.findOne({email})


    if(lead) return res.json({success: false, message: 'You are allready subscriber'})

    lead = new Leads({ email})

    await lead.save()
    res.json({success: true, message: 'Thanks for subscribe'})


})

router.get('/all', async (req, res) => {
    const leads = await Leads.find()

    if(leads?.length === 0) return res.json({success: true, message: 'No leads found'})
    res.json({success: true, leads})
})


module.exports = router