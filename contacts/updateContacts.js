const fs = require("fs").promises;
const path = require("path");

const productsPath = path.join(__dirname, "contacts.json");

const updateContacts = async (contacts) => {
  await fs.writeFile(productsPath, JSON.stringify(contacts));
};

module.exports = updateContacts;