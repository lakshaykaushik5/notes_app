console.log("all fine");
shownotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  shownotes();
});

// show notes
// _____________________________________________
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    let else1 = document.getElementById("else");
    if (element == "") {
      let a = true;
    } else {
      html += `<div class="noteCard my-2 mx-2" id="my" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">Note</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deletenotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    }
  });
  let notesEln = document.getElementById("notes");
  let else1 = document.getElementById("else");

  if (notesObj.length != 0) {
    notesEln.innerHTML = html;
  }
  
  else {
    notesEln.innerHTML = `<h1> Add Notes | Please </h1>`;
  }
}
// ___________________________________________

// deleting notes

function deletenotes(index) {
  console.log("deleting item", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}

// search

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});
