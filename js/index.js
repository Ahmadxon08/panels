const boxs=document.querySelector('.boxs')


let str=''

async function getDate() {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let date = await res.json();
    date.forEach(element => {
        str+=`
        <div class="box">
        <h1>${element.name}</h1>
        <span>${element.username}</span>
        <div class="cards">
          <div class="card">
            <span>Email :</span>
            <a href=""> ${element.email} </a>
          </div>
          <div class="card">
            <span>Website :</span>
            <a href=""> ${element.website} </a>
          </div>
          <div class="card">
            <span>Adress :</span>
            <a href=""> ${element.address.street} </a>
          </div>
          <div class="card">
            <span>Phone :</span>
            <a href="">${element.phone}  </a>
          </div>
        </div>
        <div class="btn_link">
            <a onclick='saveId(1, "todos")' href="./pages/toodos.html">Todos</a>
            <a onclick='saveId(1, "post")'   href="./pages/post.html">Post</a>
            <a onclick='saveId(1)'          href="./pages/galary.html">Galarey</a>
           
        </div>
      </div>
        
        `
    });
    boxs.innerHTML=str

  } catch (err) {
    console.error('Xatolik yuz berdi:', err);
  }
}

getDate();

