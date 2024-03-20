module.exports = {
    mode: "development",
    entry: {
        index: "./scripts/index.js",
        films: "./models/newMovie.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js",
    },
};