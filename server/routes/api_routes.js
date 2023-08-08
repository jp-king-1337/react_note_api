const router = require("express").Router();
const { createToken, validateToken } = require("../auth");

const { Note, User } = require("../models/index");

// User routes
router.post("/register", async (req, res) => {
    try {
        const user = await User.create(req.body);

        const token = await createToken(user_id);

        res.cookie
    }
    catch(err) {

    }
});

// Note routes



module.exports = router;