import { expect } from "chai";
import request from "supertest";
import app from '../app.js';

describe('Testing on /payments path', () => {
    let server = null;
    let api = null;
    
    before(async () => {
        server = await app.listen(9000);
        api = request(app); // Hacer que las peticiones se ejecuten en la app
    });

    describe('POST /', () => {
        it('On success should return status 201, an ID, and an amount', async () => {
            const donation = {
                unit_price: 10000
            }

            const response = await api
            .post('/payments')
            .send(donation);
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('preferenceId');  
        });
        after(async ()=> {
            await server.close();
        })
    });
})