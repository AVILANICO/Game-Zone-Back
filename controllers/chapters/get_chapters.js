import Chapter from "../../models/Chapter.js";

let get_chapters = async(req, res, next) => { // la funcion controladora debe ser asincrona para poder esperar la respuesta de mongo 
  let queries={}                              //consultas que hay que condicionarlas
  let sort={order: 'asc'}   
  let pagination={limit:4, page:1}
  //armar la query para recibir el manga_id
  if(req.query.manga_id){
    queries.manga_id = req.query.manga_id
  }
  if(req.query.title){
      queries.title=new RegExp(req.query.title.trim(),'i')
  }
  if(req.query.pages){
    queries.pages=req.query.pages
  }
  if (req.query.order) {
    sort.pages=req.query.order
  }
  if(req.query.page){
    pagination.page=req.query.page
  }
  if(req.query.limit){
    pagination.limit=req.query.limit
  }

  let count = await Chapter.countDocuments(queries)
  let cantPages = Math.ceil(count / pagination.limit)

  if(count <= 5){
    pagination.limit = 5
  }

  try
    {
      let all = await Chapter.find(queries, 'title cover_photo order')
      .sort(sort)
      
      //agregar un condicional que me indique si "all" esta vacio y responder un "404" 
      .skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit:0)//desde donde pagino 
      .limit(pagination.limit > 0 ? pagination.limit:0)//hasta donde pagino 
      return res.status(200)
      .json({
        succes:true,
        response: all,
        count: count,
        cantPages: cantPages
      })
    }
  catch(error){
      console.log(error)
      
    }
      return res.status(400)
      .json({error: "a ocurrido un problema"})
}

export default get_chapters
