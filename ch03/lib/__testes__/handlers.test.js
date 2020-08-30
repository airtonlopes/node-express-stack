const handlers = require('../handlers');

test('home page renders', () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.home(req, res);
    expect(res.render.mock.calls[0][0]).toBe('home');
});

test('about page renders fortune', () => { 
    const req = {};
    const res = { render: jest.fn() };
    handlers.about(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('about');
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
        fortune: expect.stringMatching(/\W/),
    }));
});

test('404 handler renders', () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.notFound(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('404');
});

test('500 handlers renders', () => { 
    const err = new Error('some error');
    const req = {};
    const res = { render: jest.fn() };
    const nxt = jest.fn();
    handlers.serverError(err, req, res, nxt);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('500');
});