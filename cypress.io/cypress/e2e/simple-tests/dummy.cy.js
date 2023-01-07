

beforeEach(() => {
})

it('Get /', () => {

  cy.request("GET", "/", {
  }).then((r) => {
    expect(r.status).to.eq(200)
  });

})