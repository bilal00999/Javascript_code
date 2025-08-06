const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moivebox = document.querySelector(".movie_box");

async function getMovie(api) {
  const response = await fetch(api);
  const data = await response.json();
  //   console.log(data);
  showMovie(data.results);
}

function showMovie(data) {
  moivebox.innerHTML = "";
  data.forEach((element) => {
    console.log(element);
    let box = document.createElement("div");
    box.classList.add("box");

    box.innerHTML = `
     <img
     src="${IMGPATH + element.poster_path}"
          alt=""
            class="image"
          />
          <div class="overlay">
            <p class="movie_name">${element.original_title}</p>
            <p class="overview">
              overview: <br />
              ${element.overview}
            </p>
          </div>
    `;
    moivebox.appendChild(box);
  });
}

document.querySelector(".search").addEventListener("keyup", function (e) {
  if (e.target.value != "") {
    getMovie(SEARCHAPI + e.target.value);
  } else {
    getMovie(APIURL);
  }
});

getMovie(APIURL);
