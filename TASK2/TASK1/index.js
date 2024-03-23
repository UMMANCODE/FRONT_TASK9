"use strict";

function newElement() {
  const listItem = document.createElement("div");
  listItem.className = "list-item";
  const deleteButton = document.createElement("span");
  deleteButton.className = "delete";
  deleteButton.textContent = "x";
  const inputValue = document.getElementById("input").value;
  const listItemContent = document.createElement("li");
  listItemContent.textContent = inputValue;
  listItem.appendChild(deleteButton);
  listItem.appendChild(listItemContent);

  document.getElementById("list").appendChild(listItem);
  document.getElementById("input").value = "";
}

function deleteElement(event) {
  if (event.target.className === "delete") {
    event.target.parentElement.remove();
  }
}

function deleteElement(event) {
  if (event.target.className === "delete") {
    event.target.parentElement.remove();
  }
}

function toggleElement(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}

function addEventListeners() {
  document.getElementById("add").addEventListener("click", newElement);
  document.getElementById("list").addEventListener("click", deleteElement);
  document.getElementById("list").addEventListener("click", toggleElement);
}

addEventListeners();
