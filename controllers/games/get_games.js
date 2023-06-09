import Game from "../../models/Game.js";

let read = async (req, res, next) => {
    let queries = {}
    let sort = {}
    let pagination = {
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
            .populate('category_id')
            .populate('company_id','name')
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