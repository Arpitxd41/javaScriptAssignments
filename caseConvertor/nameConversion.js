const input = document.getElementById("text");
const button = document.getElementById("convertBtn");

// ENTER KEY-PRESS TRIGGERS THE FUNCTION
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {  
    convert();
    console.log(text);
  }
});


// ENTIRE FUNCTION PASSED AS A PARAM TO BUTTON EVENT LISTENER
button.addEventListener("click", convert = () => {
  let text = document.getElementById("text").value;
  document.getElementById("camelCase").innerText = toCamelCase(text);
  document.getElementById("pascalCase").innerText = toPascalCase(text);
  document.getElementById("snakeCase").innerText = toSnakeCase(text);
  document.getElementById("screamingSnakeCase").innerText = toScreamingSnakeCase(text);
  document.getElementById("kebabCase").innerText = toKebabCase(text);
  document.getElementById("screamingKebabCase").innerText = toScreamingKebabCase(text);

 // CAMEL CASE
  function toCamelCase(text) {
    return text.split(" ").map(function (word, index) {
        if (index == 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join("");
  }

  // PASCAL CASE
  function toPascalCase(word){
    return text.split(" ").map(function (word, index) {
        for (let index = 0; index < word.length; index++) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      }).join("");
  };

  // SNAKE CASE
  function toSnakeCase(text) {
    return text.split(" ").map(function (word, index) {
        for (let index = 0; index < word.length; index++) {
          return word.slice(0).toLowerCase();
        }
      }).join("_");
  };

  // SCREAMING SNAKE CASE
  function toScreamingSnakeCase(text) {
    return text.split(" ").map(function (word, index) {
        for (let index = 0; index < word.length; index++) {
          return word.slice(0).toUpperCase();
        }
      }).join("_");
  };

  // KEBAB CASE
  function toKebabCase(text) {
    return text.split(" ").map(function (word, index) {
        for (let index = 0; index < word.length; index++) {
          return word.slice(0).toLowerCase();
        }
      }).join("-");
  };

  // SCREAMING KEBAB CASE
  function toScreamingKebabCase(text) {
    return text.split(" ").map(function (word, index) {
        for (let index = 0; index < word.length; index++) {
          return word.slice(0).toUpperCase();
        }
      }).join("-");
  };  
})
