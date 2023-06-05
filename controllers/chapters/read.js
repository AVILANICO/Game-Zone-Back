//la funcion controladora debe ser asincrona para poder esperar la respuesta de mongo
//utilizo la sintaxis de try/catch para intentar algo y catchear los errores
//utilizo el metodo find para buscar los recursos del modelo
//configuro la respuesta que le tengo que enviar al cliente (front) 
import Chapter from '../../models/Chapter.js'

    let read = async(req, res, next) => {
        try {
            let chapters = await Chapter.find({manga_id:req.params.id})
            if(chapters){
                return res
                    .status(200)
                    .json({
                        message: "these are the chapters",
                        chapters
                    })
            }
        } catch (error) {
            next(error)
        }
    }

export default Chapter