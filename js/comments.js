const myComment = document.querySelector(".comments");
let str = "";

async function getDate() {
  try {
    let res = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    );
    let date = await res.json();
    date.forEach((element) => {
      str += `
        <div class="comment">
        <span>
        ${element.email}   ${element.id}-chi foydanuvchi
        </span>
        <h1>${element.name}</h1>
        <p>
        ${element.body}</p>
        
        </div>
        `;
    });
    myComment.innerHTML = str;
  } catch (err) {
    console.error("Xatolik yuz berdi:", err);
  }
}

getDate(1, 1);
