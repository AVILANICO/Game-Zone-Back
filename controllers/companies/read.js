let name = 'companies'

let read = (req, res, next) => res.status(200).render(
  'index', //nombre de la vista
  {
    title: '/' + name,
    subtitle: 'Endpoint of ' + name
  })

  export default read;