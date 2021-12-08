const fs = require('fs');

function save(json) {
  fs.writeFileSync('/db.json', JSON.stringify(json));
}
function generateJson(data, isGroup = true) {
  const newJson = {};
  if (isGroup) {
    Object.keys(data).forEach((elem) => {
      newJson[elem] = [];
      for (let index = 0; index < data[`${elem}`].count; index += 1) {
        newJson[`${elem}`] = [...newJson[`${elem}`], { ...data[`${elem}`].schema(index) }];
      }
    });
    return newJson;
  }
  Object.keys(data).forEach((elem) => {
    newJson[`${elem}`] = data[`${elem}`].schema();
  });
  return newJson;
}
module.exports = {
  save,
  generateJson,
};