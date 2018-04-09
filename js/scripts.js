//zadanie 9_6
var list = document.getElementById("list");
var addElemBtn = document.getElementById("addElemBtn");

function addElem() {
  var allLis = list.getElementsByTagName("li");
  
  var newLi = document.createElement("li");
  newLi.innerText = "Element " +allLis.length;
  
  list.appendChild(newLi);
}

addElemBtn.addEventListener("click", addElem);