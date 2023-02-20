const Router = require('express').Router
const router = Router()
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Routes
// router.post('/register', async (req, res) => {
//     const {username, password} = req.body;

//     const hash = bcrypt.hashSync(password, 10)
//     const user = new User({
//         username,
//         password: hash
//     })

//     await user.save()
// })


router.post('/login', async (req, res) => {
    const {username , password} = req.body

    const userExist = await User.findOne({username})

    if(!userExist) return res.json({success: false, message: 'Invalid credential'})

    const isMatched = bcrypt.compareSync(password, userExist.password)

    if(!isMatched) return res.json({success: false, message: 'Invalid credential'})

    res.json({success: true, id: userExist._id})
    console.log(isMatched);
})

module.exports = router