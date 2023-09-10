// function setterGenerator(key) {
//   return (value) => {
//     this[key] = value;
//   };
// }
// const uesr = {};
// let nameSetter = setterGenerator.call(uesr, "name");
// nameSetter("jack");
// console.log(uesr);

function setterGenerator(propertyName) {
  return function (value) {
    const obj = {};
    obj[propertyName] = value;
    return obj;
  };
}

const user = {};
const nameSetter = setterGenerator("name");
const result = nameSetter("Jack");
console.log(result);
