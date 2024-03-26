let load = document.getElementById("load")
load.innerHTML = `<h1>loading...</h1>`;
const tableData= document.getElementById('tableData')
const logMovies = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const movies = await response.json();
    console.log(movies);
    load.style.display = 'none'
    let i = 0;
    for (i = 0; i < movies.length; i++){
        const tableRow = document.createElement('tr');
        const item = movies[i];
        const childData =`<tr><td>${item.name}</td>
  <td>${item.phone}</td>
  <td>${item.email}</td>
  <td>${item.address.street}</td>
  <td>${item.website}</td>
  <td>${item.company.name}</td></tr>`;
  tableRow.innerHTML = childData
  tableData.appendChild(tableRow)
    }
  };
  document.getElementById("clicky").addEventListener("click", () => {
    load.style.display = 'block'
    logMovies();
  });
  // async function myDisplay() {
  //   let myPromise = new Promise(function(resolve) {
  //     setTimeout(function() {resolve("loading....");}, 9000);
  //   });
  //   document.getElementById("demo").innerHTML = await myPromise;
  //   myDisplay();
  // }
  
