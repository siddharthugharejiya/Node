const form_post = async (req, res) => {
    console.log(req.body)
    res.send("data add")

}

module.exports = { form_post }