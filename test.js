const express = require('express');
const router = express.Router();

describe('Task API Routes', function() {

    // In this test it's expected a task list of two tasks
    describe('GET /', function() {
        it('returns a list of tasks', function(done) {
            router.get('/tasks')
                .expect(200);
            done()
        });
    });
});