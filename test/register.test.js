import { expect } from "chai";
import request from "supertest";
import app from "../app.js"

describe('Test on /register path', () => {
  let server = null
  let api = null

  before(async() => {
    server = await app.listen(8000)
    api = request(app)
  })

  describe('POST /register', () => {
    const email = "wowaura3@gmail.com";
    const password = "qwertyuiop12";

    it('Should create a new user, On success should return status 201, an object with message: "user created successfully!!", an object with success:"Ok", an object with user: email', async () =>{
      const response = await api.post('/auth/register').send({"email": email, "password": password})
      console.log(response.body);
      console.log(response.statusCode);

      expect(response.statusCode).to.equal(201);
      expect(response.body).to.have.property('success')
      expect(response.body.success).to.equal('Ok')
      expect(response.body).to.have.property('user')
      expect(response.body.user).to.equal(email)
    })
  })

    after(async() => {
    server.close();
  })

})
