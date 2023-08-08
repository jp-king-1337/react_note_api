const router = require("express").Router();
const { createToken, validateToken } = require("../auth");

const { Note, User } = require("../models");

// User routes
// Register user
router.post("/register", async (req, res) => {
    try {
        const user = await User.create(req.body);

        const token = await createToken(user._id);

        res.cookie("token", token, {
            // httpOnly ensures that browser JS from any extensions or other applications cannot access the cookies, because it is accessible only by http
            httpOnly: true
            // Will break localhost, but requires https
            // secure: true
        });

        res.send({
            user
        });
    }
    catch(err) {
        console.log(err);
        res.status(401).send({
            error: true,
            message: err.message
        });
    }
});

// Login user
router.post("/login", async (req, res) => {
    try {

    }
    catch(err) {
        
    }
})

// Note routes



module.exports = router;