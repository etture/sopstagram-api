const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.TOKEN_SECRET
};

const jwtCheck = new JwtStrategy(jwtOptions, function (payload, done) {
    console.log("payload.sub:", payload.sub);

    db.query("SELECT * FROM user WHERE userIdx = ?", payload.sub, (err, results) => {
        if (err) return done(err, false);
        console.log("query result ok");

        if (results) {
            const user = JSON.parse(JSON.stringify(results))[0];
            console.log("user matched with token:", user);
            done(null, user);
        } else {
            console.log("user not matched with token");
            done(null, false);
        }
    });
});

const localOptions = {
    usernameField: 'email'
};

const localSignin = new LocalStrategy(localOptions, function (email, password, done) {
    db.query("SELECT * FROM user WHERE email = ? LIMIT 1", email, (err, results) => {
        if (err) return done(err);
        if (!results) return done(null, false);

        const user = JSON.parse(JSON.stringify(results))[0];
        return done(null, user);
    });
});

passport.use(jwtCheck);
passport.use(localSignin);