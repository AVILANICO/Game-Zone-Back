let name = 'authors'
let read = (req,res,next)=> res.status(200).render('index', {
    title: '/'+name.toUpperCase(),
    subtitle:'endpoint of '+name.toUpperCase()
})
export default read