async function createToken() {
    const token = await jwt.sign({
        user_id
    }, process.env.JWT_SECRET, { expiresIn: "30s" });

    return token;
}

async function validateToken(token) {
    const is_valid = await jwt.verify(token, process.env.JWT_SECRET, {
        maxAge: "30s"
    });

    return is_valid;
}

module.exports = { createToken, validateToken };