import Game from "../../models/Game.js";

let read = async (req, res, next) => {
    let queries = {}
    let sort = {}
    let pagination = {
        limit: 6,
        page: 1
    }
    console.log(req.query)
    if (req.query.title) {
        queries.title = new RegExp(req.query.title.trim(), "i")
    }
    if (req.query.category_id) {
        queries.category_id = req.query.category_id.split(',')
    }
    if (req.query.order) {
        sort.title = req.query.order
    }
    if (req.query.page) {
        pagination.page = req.query.page
    }
    if (req.query.limit) {
        pagination.limit = req.query.limit
    }

    console.log(sort)
    try {
        let all = await Game
            .find(queries)
            .sort(sort)
            .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
            .limit(pagination.limit > 0 ? pagination.limit : 0)
            .populate('category_id')
            let count = await Game
            .estimatedDocumentCount(queries)
        return res.status(200).json({
            success: true,
            response: all,
            count : Math.round(count / pagination.limit)
        })
    } catch (error) {
        next(error)
    }
}

export default read