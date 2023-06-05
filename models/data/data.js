import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import { authors } from './authors.js'
import { companies } from './companies.js'
import { categories } from './categories.js'
import { mangas_v1 } from './mangas_v1.js'
import User from '../User.js'
import Author from '../Author.js'
import Company from '../Company.js'
import Category from '../Category.js'
import Manga from '../Manga.js'
import Chapter from '../Chapter.js'

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

let newMangas = async(mangas) => {
    for (let manga of mangas) {
        let category = await Category.findOne({ name: manga.category_id })
        let author = await Author.findOne({ name: manga.author_id })
        let company = await Company.findOne({ name: manga.company_id })
        manga.category_id = category._id
        manga.author_id = author._id
        company ? (manga.company_id = company._id) : null
        let newManga = await Manga.create(manga)
        for (let chapter of manga.chapters) {
            console.log(chapter)
            chapter.manga_id = newManga._id
            chapter.cover_photo = chapter.pages[0]
            await Chapter.create(chapter)
        }
    }
}

let data = async () => {
    await newCategories(categories)
    await newUsers(users)
    await newRoles(authors,companies)
    await newMangas(mangas_v1)
    console.log('done!')
}

data()