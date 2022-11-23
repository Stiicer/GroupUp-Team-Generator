const manager = require('../lib/manager')

test("testing manager", ()=>{
    let e = new manager("guy",15,"guy@guy.com",20)
    expect(e.name).toBe("guy")
})