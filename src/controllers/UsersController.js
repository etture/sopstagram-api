const jwt = require('jwt-simple');

function makeToken(userIdx) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: userIdx, iat: timestamp}, process.env.TOKEN_SECRET);
}

exports.login = (req, res) => {
    res.send({
        isSuccess: true,
        token: makeToken(req.user.userIdx)
    });
};

exports.signup = (req, res) => {

};