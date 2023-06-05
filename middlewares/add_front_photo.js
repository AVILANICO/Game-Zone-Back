async function addCoverPhoto(req, res, next) {

    req.body.cover_photo = req.body.pages[0]
    next()
}

export default addCoverPhoto