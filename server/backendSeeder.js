const term = require('terminal-kit').terminal;
const { generateJson, save } = require('./helpers');
const { groups, items } = require('./schema');

function question() {
  term('Please enter number of items has to be generated: \n');
  term.inputField(async (error, input) => {
    term.green("\nYour choice for items is '%s'\n", input);
    groups.users.count = parseInt(input, 10);
    const genGroups = generateJson(groups);
    save({ ...genGroups });
    process.exit();
  });
}
question();