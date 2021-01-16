const request = require("supertest");
const app = require('../server');

describe("tests - /", () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });

    it("responds to /", async () => {
        const res = await request(app).get('/'); 
        expect(res.statusCode).toEqual(200);    
    });
});

describe("/api/users", () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
    
    it("responds to /api/users", async () => {
        const res = await request(app).get('/api/users?since=21323');       
       
        expect(res.statusCode).toEqual(200);   
        expect(res.body).toHaveProperty('list_of_users');
        expect(res.body).toHaveProperty('link_for_next_page');
    });
});

describe("/api/users/:username/details", () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
    
    it("responds to /api/users/:username/details", async () => {
        const res = await request(app).get('/api/users/herberthcaldeira/details');
        expect(res.statusCode).toEqual(200);  
        expect(res.body).toHaveProperty('datails');     
    });
});

describe("/api/users/:username/repos", () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
    
    it("responds to /api/users/:username/repos", async () => {
        const res = await request(app).get('/api/users/herberthcaldeira/repos');
        expect(res.statusCode).toEqual(200);  
        expect(res.body).toHaveProperty('repos');     
    });
});