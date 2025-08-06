let add_newNote_btn = document.querySelector(".add_newNote_btn");
let main_content = document.querySelector(".main_content");
let create_notes_main = document.querySelector(".create_notes_main");
let cancel_btn = document.querySelector(".cancel_btn");
let note_title = document.querySelector(".note_title");
let note_text = document.querySelector(".note_text");
let bold_text = document.querySelector(".bold_text");
let italic_text = document.querySelector(".italic_text");
let underline_text = document.querySelector(".underline_text");
let color = document.querySelector("#color");
let add_image = document.querySelector(".add_image");
let images_div = document.querySelector(".images_div");
let show_notes_cards = document.querySelector(".show_notes_cards");
let imageUrl = "";
let editingNoteIndex = null;

window.addEventListener("DOMContentLoaded", () => {
  let savedItems = JSON.parse(localStorage.getItem("notes")) || [];
  if (savedItems == "") {
    main_content.style.display = "flex";
  } else {
    main_content.style.display = "none";
  }
  savedItems.forEach((item) => {
    showNotescards(item.title, item.text, item.imageUrl);
  });
});

create_notes_main.style.display = "none";

add_newNote_btn.addEventListener("click", showCreateNotes);
cancel_btn.addEventListener("click", (e) => {
  e.preventDefault();
  closeCreateNotes();
});
bold_text.addEventListener("click", showBoldText);
italic_text.addEventListener("click", showItalicText);
underline_text.addEventListener("click", showUnderlineText);
color.addEventListener("change", showColorText);
add_image.addEventListener("click", showImage);
show_notes_cards.addEventListener("click", (e) => {
  deleteCard(e);
});
show_notes_cards.addEventListener("click", (e) => {
  editCard(e);
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let title = note_title.value;
  let text = note_text.value;

  let item = { title: title, text: text, imageUrl: imageUrl };
  let savedItems = JSON.parse(localStorage.getItem("notes")) || [];

  if (editingNoteIndex !== null) {
    savedItems[editingNoteIndex] = item;
    editingNoteIndex = null;
  } else {
    savedItems.push(item);
  }

  localStorage.setItem("notes", JSON.stringify(savedItems));

  show_notes_cards.innerHTML = ""; // Clear old cards
  savedItems.forEach((item) =>
    showNotescards(item.title, item.text, item.imageUrl)
  );

  // Reset fields
  note_title.value = "";
  note_text.value = "";
  images_div.innerHTML = "";
});

function showCreateNotes() {
  if (create_notes_main.style.display == "none") {
    main_content.style.display = "none";
    show_notes_cards.style.display = "none";
    create_notes_main.style.display = "block";
  }
}

function closeCreateNotes() {
  let savedItems = JSON.parse(localStorage.getItem("notes")) || [];
  if (main_content.style.display == "none") {
    create_notes_main.style.display = "none";
    show_notes_cards.style.display = "grid";

    if (savedItems == "") {
      main_content.style.display = "flex";
    } else {
      main_content.style.display = "none";
    }
  }
  images_div.innerHTML = "";
  note_title.value = "";
  note_text.value = "";
}

function showBoldText() {
  if (bold_text.style.backgroundColor == "") {
    bold_text.style.backgroundColor = "#cac8c8";
    note_text.style.fontWeight = "bold";
  } else {
    bold_text.style.backgroundColor = "";
    note_text.style.fontWeight = "";
  }
}

function showItalicText() {
  if (italic_text.style.backgroundColor == "") {
    italic_text.style.backgroundColor = "#cac8c8";
    note_text.style.fontStyle = "italic";
  } else {
    italic_text.style.backgroundColor = "";
    note_text.style.fontStyle = "";
  }
}

function showUnderlineText() {
  if (underline_text.style.backgroundColor == "") {
    underline_text.style.backgroundColor = "#cac8c8";
    note_text.style.textDecoration = "underline";
  } else {
    underline_text.style.backgroundColor = "";
    note_text.style.textDecoration = "";
  }
}

function showColorText() {
  note_text.style.color = color.value;
}

function showImage() {
  imageUrl = prompt("Add image url");
  let imageEle = document.createElement("img");
  imageEle.src = imageUrl;
  images_div.appendChild(imageEle);
}

function showNotescards(title, text, imageUrl) {
  if (
    create_notes_main.style.display == "block" ||
    main_content.style.display == "none"
  ) {
    create_notes_main.style.display = "none";
    show_notes_cards.style.display = "grid";
    let date = new Date();
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `<div class="head">
            <h3 class="card_title">${title}</h3>
            <div class="edit_delete">
              <i class="fa-solid fa-pen-to-square edit_icon"></i>
              <i class="fa-solid fa-trash delete_icon"></i>
            </div>
          </div>
          <p class="card_text">${text}</p>
          <div class="date_time">
            <p class="card_date">${date.getDay()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}</p>
            <p class="card_time">${date.getHours()}:${date.getMinutes()}</p>`;

    show_notes_cards.appendChild(card);
  }
}

function deleteCard(e) {
  if (e.target.classList.contains("delete_icon")) {
    let row = e.target.closest("div");
    let deletedata = row.previousElementSibling.innerHTML;
    deleterow = row.previousElementSibling.parentElement.parentElement;

    let savedItems = JSON.parse(localStorage.getItem("notes")) || [];

    let updatedItem = savedItems.filter((item) => item.title !== deletedata);

    localStorage.setItem("notes", JSON.stringify(updatedItem));

    deleterow.remove();
  }
}

function editCard(e) {
  if (e.target.classList.contains("edit_icon")) {
    show_notes_cards.style.display = "none";

    let card = e.target.closest(".card");
    let titleInCard = card.querySelector(".card_title").innerText;

    let savedItems = JSON.parse(localStorage.getItem("notes")) || [];

    let index = savedItems.findIndex((item) => item.title === titleInCard);

    // Store index for later update
    editingNoteIndex = index;

    console.log(editingNoteIndex);
    // Prefill values
    note_title.value = savedItems[index].title;
    note_text.value = savedItems[index].text;

    images_div.innerHTML = "";
    if (savedItems[index].imageUrl) {
      imageUrl = savedItems[index].imageUrl;
      let img = document.createElement("img");
      img.src = imageUrl;
      images_div.appendChild(img);
    }

    showCreateNotes();
  }
}
