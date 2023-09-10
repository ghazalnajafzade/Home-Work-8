function elemCreator(element, callback) {
  const elem = document.createElement(element);
  document.body.append(elem);
  callback(elem);
}

function callback(elem) {
  elem.style.backgroundColor = "red";
  elem.textContent = "hello world";
}

elemCreator("div", callback);
