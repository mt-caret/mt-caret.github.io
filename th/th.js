function random_index(size) {
  return Math.floor(Math.random() * size);
}

function insert_text(str) {
  document.getElementById("result").innerText = str;
}

function main() {
  var names = JSON.parse(data);
  document.getElementById("generatebutton").addEventListener("click", function() {
    insert_text(names[random_index(names.length)]);
  });
}

document.onload = main();
