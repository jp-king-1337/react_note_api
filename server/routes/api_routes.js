const router = require("express").Router();

router.get("/test", (req, res) => {
    res.send({
        message: "Test successful."
    })
});

module.exports = router;