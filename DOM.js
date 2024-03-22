// SGN
let counter = parseInt(document.getElementById("disNum").innerHTML);
function Increment(){
  counter = counter + 1;
  updateDisplay();
  toggleElementVisibility();
}
function Decrement(){
  if(counter  > 0){
      counter  = counter - 1;
      updateDisplay();
  }else{
        document.getElementById("error").innerHTML = "ERROR : Cannot go below 0";

  }
  toggleElementVisibility();
}
function Reset(){
  counter  = 0;
  updateDisplay();
  toggleElementVisibility();
}

function updateDisplay(){
  document.getElementById("disNum").innerHTML = counter;


}
function toggleElementVisibility(){
  if(counter < 1){
      document.getElementById("none").style.display = "none";
  }else{
      document.getElementById("none").style.display = "block";
  }


}
