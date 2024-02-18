const myTodos = document.querySelector(".todos");
let str = "";

async function getDate() {
  try {
    let res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    let todos = await res.json();
    todos.forEach((todo) => {
      str += `
        <div class="todos_input">
          <span>${todo.title}</span>
          <p><img src="${todo.completed ? "../img/check-mark.png" : "../img/unchecked.png"}"></p>
        </div>`;
    });
    myTodos.innerHTML = str;
  } catch (err) {
    console.error("Error occurred:", err);
  }
}

getDate();