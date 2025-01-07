const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});

//Inline Event Handlers on Button 1
function handleClick() {
  alert("Inline Event Handlers on Button 1 clicked!");
}
// DOM Level 0 Event Handlers on Button 2
const button2 = document.getElementById("button2");
button2.onclick = function () {
  alert("DOM 0 onclick event triggered!");
};
// DOM Level 2 Event Listeners on Button 3
const button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
  alert("DOM Level 2 Event Listeners on Button 3 clicked!");
});
// Event Delegation on Button 4 and 5
document
  .getElementById("buttonContainer")
  .addEventListener("click", function (event) {
    if (event.target.id === "button4") {
      alert("Button 4 clicked!");
    } else if (event.target.id === "button5") {
      alert("Button 5 clicked!");
    }
  });
