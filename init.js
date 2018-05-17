const jsf = require("json-schema-faker");
const fs = require("fs");
const apiSchema = require("./setup/newApiCompanies.schema.json");
const oldCompaniesApiSchema = require("./setup/oldApiCompanies.schema.json");
const oldContactsApiSchmea = require("./setup/oldApiContacts.schema.json");
let availableCompanyIds = [];

const DIR = "data";

const getRandom = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

jsf.extend("faker", () => {
  return require("faker");
});

if (!fs.existsSync(DIR)) {
  fs.mkdirSync(DIR);
}

console.log("Generating API data...");

jsf.resolve(apiSchema).then(sample => {
  fs.writeFile(`./${DIR}/newCompanies.json`, JSON.stringify(sample), err => {
    if (err) {
      throw err;
      console.log(
        "Please contact someone at R7 and let them know you've run into a problem with this assessment"
      );
      process.exit(1);
    }
    console.log("API data successfully generated...");
  });
});

console.log("Generating old API company data...");

jsf.resolve(oldCompaniesApiSchema).then(sample => {
  const availableCompanyIds = sample.records.reduce((acc, record) => {
    acc.push(record.id);
    return acc;
  }, []);

  if (availableCompanyIds.length === 0) {
    const err = new Error("Unable to find company IDs");
    throw err;
    console.log(
      "Please contact someone at R7 and let them know you've run into a problem with this assessment"
    );
    process.exit(1);
  }
  fs.writeFile(`./${DIR}/oldCompanies.json`, JSON.stringify(sample), err => {
    if (err) {
      throw err;
      console.log(
        "Please contact someone at R7 and let them know you've run into a problem with this assessment"
      );
      process.exit(1);
    }
    console.log("Old API company data successfully generated...");
  });
  console.log("Generating old API contacts data...");

  jsf.resolve(oldContactsApiSchmea).then(sample => {
    const newRecords = sample.records.map(record => {
      return {
        ...record,
        companyId:
          availableCompanyIds[getRandom(availableCompanyIds.length - 1)]
      };
    });
    sample.records = newRecords;
    fs.writeFile(`./${DIR}/oldContacts.json`, JSON.stringify(sample), err => {
      if (err) {
        throw err;
        console.log(
          "Please contact someone at R7 and let them know you've run into a problem with this assessment"
        );
        process.exit(1);
      }
      console.log("Old API contacts data successfully generated...");
    });
  });
});
