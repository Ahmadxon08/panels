const myPhoto = document.querySelector(".photos");

let str = "";

async function getDate() {
  try {
    myPhoto.innerHTML = "<h5>Loading...</h5>";
    let res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    let date = await res.json();
    date.forEach((element) => {
      str += `
        <div class="photo">
        <span>
        ${element.title}
        </span>
        <img src="${element.url}" alt="photo">
        </div>
        `;
    });
    myPhoto.innerHTML = str;
  } catch (err) {
    console.error("Xatolik yuz berdi:", err);
  }
}
myPhoto.innerHTML = "<h5>Loading...</h5>";
getDate(1, 1);
