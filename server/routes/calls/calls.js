const router = require('express').Router();
const {CreateCall} = require("../../controllers/calls/CreateCall");
const { body } = require('express-validator')

router.post('/call',[
    body("username").isLength({ min: 5 }).trim().withMessage("Username should be min 5 char long."),
    body("user_phone").isLength({ min: 10 }).trim().withMessage("User Phone Number should have min 10 digits."),
    body("receiver_phone").isLength({ min: 10 }).trim().withMessage("Receiver Phone Number should have min 10 digits."),
    body("duration").notEmpty().withMessage("Call duration should not be empty."),
], async (req, res) => {
    await CreateCall(req, res);
})

module.exports = router;
