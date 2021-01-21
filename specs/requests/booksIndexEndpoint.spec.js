const app = require("../../app");
const supertest = require("supertest");
const { expect } = require("chai");

let server, request, response;

beforeEach(done => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after(done => {
  server.close(done);
});

describe("GET /books", () => {
  beforeEach(async () => {
    response = await request.get("/books");
  });

  it("is expected to respond with status 200", () => {
    expect(response.status).equal(200);
  });

  it("is expected to return an index of books", () => {
    const expectedResponse = {
      books: [
        { 
          title: "Jag, Jag, Jag", 
          author: "Unni Drougge" 
        },
        { 
          title: "Andra sidan Alex", 
          author: "Unni Drougge" 
        }
      ]
    }
    expect(response.body)
    .to.eql(expectedResponse)
  })
});
