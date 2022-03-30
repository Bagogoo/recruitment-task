import request  from "supertest"
import app from "../../src/app"

describe('Movie routes test', ()=>{
    it('Should get random movie', async ()=>{
        const res=await request(app).get('/movie');
        //I'm not sure if it's the best way to test this thing
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('title');
        expect(res.body).toHaveProperty('year');
        expect(res.body).toHaveProperty('runtime');
        expect(res.body).toHaveProperty('actors');
        expect(res.body).toHaveProperty('plot');
    });

    it('Should get movie in duration between 90 and 110 minutes', async ()  =>{
        const res=await request(app).get('/movie?duration=100');
        expect(parseInt(res.body.runtime)).toBeGreaterThan(90);
        expect(parseInt(res.body.runtime)).toBeLessThan(110);
    });


})