const myPhoto = document.querySelector(".photos");

let str = "";

async function getDate() {
  try {
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

getDate(1, 1);
