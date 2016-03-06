module.exports = {
    db: {
        production: process.env.MONGOLAB_URI,
        development: "mongodb://localhost/web-app-core-dev",
        test: "mongodb://localhost/web-app-core-test",
    }
};