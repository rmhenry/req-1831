const Connect = require("connect");
const connectRoute = require("connect-route");
const http = require("http");
const send = require("connect-send-json");
const serveStatic = require("serve-static");

const newCompanies = require("./data/newCompanies.json");
const oldCompanies = require("./data/oldCompanies.json");
const oldContacts = require("./data/oldContacts.json");

const PORT = 8080;

console.log("Starting server...");

const startApiServer = () => {
  const app = new Connect();

  app
    .use(send.json())
    .use(
      connectRoute(router => {
        router.get("api/2/companies", (req, res) => {
          res.end(res.json(newCompanies));
        });
        router.get("api/2/companies/:id", (req, res) => {
          const company = newCompanies.find(company => {
            return company.id === req.params.id;
          });
          res.end(res.json(company));
        });
        router.get("api/1/companies", (req, res) => {
          res.end(res.json(oldCompanies));
        });
        router.get("api/1/companies/:id", (req, res) => {
          const company = oldCompanies.records.find(company => {
            return company.id === req.params.id;
          });
          res.end(res.json(company));
        });
        router.get("api/1/people", (req, res) => {
          res.end(res.json(oldContacts));
        });
        router.get("api/1/people/:id", (req, res) => {
          const person = oldContacts.records.find(contact => {
            return contact.id === req.params.id;
          });
          res.end(res.json(person));
        });
      })
    )
    .use(serveStatic("./public"));

  http.createServer(app).listen({ port: PORT }, () => {
    console.log(`>> Server running on localhost:${PORT}...`);
  });
};

startApiServer();
