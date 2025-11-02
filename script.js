const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");
const addCardBtn = document.querySelector(".add-card-btn");
const toDoList = document.getElementById("list1");


addCardBtn.addEventListener("click", () => {
  const cardText = prompt("Enter card test: ");
  if (!cardText) return;

  //Create new card
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.setAttribute("draggable", "true");
  newCard.textContent = cardText;
  newCard.id = `card${Date.now()}`;

  newCard.addEventListener("dragstart", dragStart);
  newCard.addEventListener("dragend", dragEnd);

  toDoList.appendChild(newCard);
})


for(const card of cards){
  card.addEventListener("dragstart", dragStart)
  card.addEventListener("dragend", dragEnd)
}

for(const list of lists) {
  list.addEventListener("dragover", dragOver)
  list.addEventListener("dragenter", dragEnter)
  list.addEventListener("dragleave", dragLeave)
  list.addEventListener("drop", dragDrop)
}

function dragStart(e) {
  //this allows the drop location to know which element is being moved when you release it
  e.dataTransfer.setData("text/plain", this.id)
}

function dragEnd() {
  console.log("drag ended");
}

function dragOver(e){
  //Browns dont allow you to drop elements onto other elements.
  e.preventDefault()
}

function dragEnter(e){
  e.preventDefault()

  this.classList.add("over");
}

function dragLeave(e){

  this.classList.remove("over");
}

function dragDrop(e){
  const id = e.dataTransfer.getData("text/plain")

  const card = document.getElementById(id)

  this.appendChild(card)
  this.classList.remove("over");
}