const assert = require('chai').assert;
const mongoose = require('mongoose');
const request = require('./request');

describe('Sitcom API', () => {

    beforeEach(()=> mongoose.connection.dropDatabase());

    const freshPrince = {
        title: 'The Fresh Prince of Bel-Air',
        releaseYear: 1990,
        cast: [{actor: 'Will Smith', role: 'Will Smith'},
            {actor: 'James Avery ', role: 'Philip Banks'}]
    };

    it('Saves a sitcom with id', ()=>{
        return request.post('/api/sitcoms')
            .send(freshPrince)
            .then(res => {
                const sitcom = res.body;
                assert.ok(sitcom._id);
                assert.equal(sitcom.name, freshPrince.name);
            });
    });

    it('Shoud get a sitcom by id', ()=>{
        let sitcom;
        let id;

        return request.post('/api/sitcoms')
            .send(freshPrince)
            .then(res => {
                sitcom = res.body;
                id = sitcom._id;
            })
            .then(()=>{
                return request.get(`/api/sitcms/${id}`)
                    .then(res =>{
                        assert.deepEqual(res.body, sitcom);
                    });
            });

    });

});