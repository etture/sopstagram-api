const jwt = require('jwt-simple');

function makeToken(userIdx) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: userIdx, iat: timestamp}, process.env.TOKEN_SECRET || "cAp81hb736nnbwI01llB23sfSbU328B1920lmnzX44bAwerlp4b7m1WEv9kUs34z");
}

exports.login = (req, res) => {
    res.send({
        isSuccess: true,
        token: makeToken(req.user.userIdx)
    });
};

exports.signup = (req, res) => {

};