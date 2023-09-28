function addToDo() {
    var inputElement = document.getElementById("input");
    var newquest = inputElement.value;
    if (newquest === '') {
      alert("You need to write something!");
    } else {
        var list = document.createElement("LI");
        var text = document.createTextNode(newquest);
        list.appendChild(text);

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        list.appendChild(span);

        document.getElementById("seznam").appendChild(list);
        inputElement.value = "";
    }
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
} ,false);