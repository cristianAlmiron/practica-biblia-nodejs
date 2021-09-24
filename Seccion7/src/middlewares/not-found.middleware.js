module.exports = (req, res, next) => {
    return res.status.send({ message: "Page not found" })
}