const employee = require('../lib/employee')

test("testing employee", ()=>{
    let e = new employee("guy",15,"guy@guy.com",20)
    expect(e.id).toBe(15)
}) 