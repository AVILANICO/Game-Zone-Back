import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import { authors } from './authors.js'
import { companies } from './companies.js'
import { categories } from './categories.js'
import { games } from './games.js'
import User from '../User.js'
import Author from '../Author.js'
import Company from '../Company.js'
import Category from '../Category.js'
import Game from '../Game.js'

let newCategories = async(categories) => await Category.insertMany(categories)
//insertMany es un método de mongoose para insertar muchos documentos en la base de mongo

let newUsers = async(users) => await User.insertMany(users)

let newRoles = async(rol1,rol2) => {
    for (let author of rol1) {
        let user = await User.findOne({ email: author.user_id })
        author.user_id = user._id
        await Author.create(author)
    }
    for (let company of rol2) {
        let user = await User.findOne({ email: company.user_id })
        company.user_id = user._id
        await Company.create(company)
    }
}

let newGames = async(games) => {
    for (let game of games) {
        let category = await Category.findOne({ name: game.category_id })
        let author = await Author.findOne({ name: game.author_id })
        let company = await Company.findOne({ name: game.company_id })
        game.category_id = category._id
        game.author_id = author._id
        company ? (game.company_id = company._id) : null
        let newGame = await Game.create(game)
    }
}

let data = async () => {
    await newCategories(categories)
    await newUsers(users)
    await newRoles(authors,companies)
    await newGames(games)
    console.log('done!')
}

data()