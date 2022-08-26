let total = 4;
var count = 1;
let prev = document.getElementById("prev");
prev.addEventListener("click", previous);
function previous(e) {
    document.getElementById(`${count}`).classList.add("in-active");
    count=(count+1);
    if(count>total)
    count=1;
    else if(count<1)
    count=total;
    document.getElementById(`${count}`).classList.remove("in-active");
}
let next = document.getElementById("next");
next.addEventListener("click", nextt);
function nextt(e) {
  document.getElementById(`${count}`).classList.add("in-active");
  count=(count+1);
  if(count>total)
  count=1;
  else if(count<1)
  count=total;
  document.getElementById(`${count}`).classList.remove("in-active");
}