const router = require('express').Router();
const {CreateCall} = require("../../controllers/calls/CreateCall");

router.post('/call', async (req, res) => {
    await CreateCall(req, res);
})

module.exports = router;
