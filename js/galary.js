const myPost = document.querySelector(".galaries");
let str = "";

async function getDate() {
  try {
    myPost.innerHTML = "<h5>Loading...</h5>";
    let res = await fetch(
      "https://jsonplaceholder.typicode.com/albums?_limit=10"
    );
    let date = await res.json();
    date.forEach((element) => {
      str += `
        <div class="galarey">
        <span>
        ${element.title}
        </span>
       
        <a href="./photo.html">Photo</a>
        </div>
        `;
    });
    myPost.innerHTML = str;
  } catch (err) {
    console.error("Xatolik yuz berdi:", err);
  }
}
myPost.innerHTML = "<h5>Loading...</h5>";

getDate(1, 1);
