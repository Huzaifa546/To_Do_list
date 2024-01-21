let array = [];

function add() {
  let n = document.querySelector("#first").value;
  if(n!=""){
  array.push(n);
  document.querySelector(".answer").innerHTML = array;
  document.getElementById("first").value = "";
  }
  else if(n==""){
    alert("please enter the number")
  }
  }

function del() {
  array.pop();
  document.querySelector(".answer").innerHTML = array;
}
