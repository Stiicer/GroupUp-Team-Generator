const engineer = require('../lib/engineer')

test("testing engineer", ()=>{
    let e = new engineer("guy",15,"guy@guy.com","guy.github.com")
    expect(e.github).toBe("guy.github.com")
})