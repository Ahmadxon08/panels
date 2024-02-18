const myPost = document.querySelector(".post");
let str = "";

async function getDate() {
  try {
    let res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    let date = await res.json();
    date.forEach((element) => {
      str += `
        <div class="post_input">
        <span>
        ${element.title}
        </span>
        <p>
        ${element.body}</p>
        <a href="./comments.html">Comments</a>
   
        
        </div>
        `;
    });
    myPost.innerHTML = str;
  } catch (err) {
    console.error("Xatolik yuz berdi:", err);
  }
}

getDate(1, 1);
