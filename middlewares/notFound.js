import createHttpError from "http-errors";

const notFound = (req, res, next) => {
  next(createHttpError(404, 'La ruta no existe'))
}

export default notFound;