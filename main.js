// global variables
var userSnack = document.querySelector('.snack-input');
var userDescription = document.querySelector('.snack-description')
var addBtn = document.querySelector('.snack-btn');
var grocerySection = document.querySelector('.grocery-list')
var clearButton = document.querySelector('.clear-btn')
var showSnack = grocerySection.innerHTML;
var showDescription = grocerySection.innerHTML;

// default state of add snack button
addBtn.disabled = true;

// EventListeners
userDescription.addEventListener('keyup', changeAddBtn)
userSnack.addEventListener('keyup', changeAddBtn)
addBtn.addEventListener('click', addCard);
grocerySection.addEventListener('click', clearCard )

// able/disable addBtn based on value of user input
function changeAddBtn(){
  if(userSnack.value.length > 0 && userDescription.value.length > 0){
    addBtn.disabled = false;
  } else if (userSnack.value.length < 1 || userDescription.value.length < 1){
    addBtn.disabled = true;;
  }
}

// add card to bottom section
function addCard() {
  grocerySection.innerHTML += `<div style="background-color:${getRandomColor()}"class="card" contenteditable="true"><h3>${userSnack.value}</h3><p>${userDescription.value}</p><button class ='clear-btn'>clear</button></div>`;
}

// clear card from bottom section
function clearCard(e){
  if(e.target.classList.contains('clear-btn')) {
    e.target.closest('.card').remove();
  }
}

// assigns random collor to addcard innter HTML
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
