const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add_book");
let addBookForm = document.getElementById("addBookForm");
let content = document.querySelector(".content");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  let radioGroup = addBookForm.elements["status"];
  let readStatus;
  for (let i = 0; i < radioGroup.length; i++) {
    if (radioGroup[i].checked) {
      readStatus = radioGroup[i].value;
      break;
    }
  }

  const card = document.createElement("div");
  card.classList.add("card");

  const bookTitle = document.createElement("div");
  bookTitle.textContent = "Title: " + title.value;
  bookTitle.classList.add("book_title");

  const bookAuthor = document.createElement("div");
  bookAuthor.textContent = "Author: " + author.value;
  bookAuthor.classList.add("book_author");

  const bookPages = document.createElement("div");
  bookPages.textContent = "Pages: " + pages.value;
  bookPages.classList.add("book_pages");

  const bookStatus = document.createElement("div");
  bookStatus.textContent = "Status: " + readStatus;
  bookStatus.classList.add("read_status");

  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  card.appendChild(bookStatus);
  const btns = document.createElement("div");
  btns.classList.add("buttons");
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("toggle_status");
  toggleButton.textContent = "Change Status";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete";
  btns.appendChild(toggleButton);
  btns.appendChild(deleteButton);
  card.append(btns);

  content.appendChild(card);

  title.value = "";
  author.value = "";
  pages.value = "";
  status.value = "";

  // Add an event listener to the common ancestor (container) using event delegation
  content.addEventListener("click", function (event) {
    // Check if the clicked element is the dynamic button
    if (event.target === toggleButton) {
      let curCard = toggleButton.parentElement.parentElement;
      let curStatus = curCard.querySelector(".read_status");
      if (curStatus.textContent === "Status: Read!") {
        curStatus.textContent = "Status: Not Read";
      } else {
        curStatus.textContent = "Status: Read!";
      }
    }
  });
  content.addEventListener("click", function (event) {
    // Check if the clicked element is the dynamic button
    if (event.target === deleteButton) {
      let curCard = deleteButton.parentElement.parentElement;
      content.removeChild(curCard);
    }
  });

  dialog.close();
});

let originalBtn = document.getElementById("staticButton");
originalBtn.addEventListener("click", () => {
  let curCard = originalBtn.parentElement.parentElement;
  let curStatus = curCard.querySelector(".read_status");
  if (curStatus.textContent === "Status: Read!") {
    curStatus.textContent = "Status: Not Read";
  } else {
    curStatus.textContent = "Status: Read!";
  }
});

let originalDeleteBtn = document.getElementById("staticDelete");
originalDeleteBtn.addEventListener("click", () => {
  let curCard = originalBtn.parentElement.parentElement;
  content.removeChild(curCard);
});
