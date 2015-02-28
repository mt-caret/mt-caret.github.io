function empty_list() {
  document.getElementById("result").innerHTML = "";
}

function add_to_list(str) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(str);
  node.appendChild(textnode);
  document.getElementById("result").appendChild(node);
}

function random_index(size) {
  return Math.floor(Math.random() * size);
}

function main() {
  var names = JSON.parse(data);
  document.getElementById("generatebutton").addEventListener("click", function() {
    var num = document.getElementById("generatenum").value;
    empty_list();
    for (i = 0; i < num; i++) {
      add_to_list(names[random_index(names.length)]);
    }
  });
}

document.onload = main();
