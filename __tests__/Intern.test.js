const intern = require('../lib/intern')

test("testing intern", ()=>{
    let e = new intern("guy",15,"guy@guy.com",20)
    expect(e.email).toBe("guy@guy.com")
})