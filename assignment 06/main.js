const tableData= document.getElementById('tableData')
const logMovies = async () => {
    const response = await fetch("https://jsonplaceholder.org/users");
    const movies = await response.json();
    console.log(movies);
    let i = 0;
    for (i = 0; i < movies.length; i++){
        const tableRow = document.createElement('tr');
        const item = movies[i];
        const childData =`<tr><td>${item.firstname}, ${item.lastname}</td>
  <td>${item.phone}</td>
  <td>${item.email}</td>
  <td>${item.address.street}</td>
  <td>${item.birthDate}</td>
  <td>${item.company.name}</td></tr>`;
  tableRow.innerHTML = childData
  tableData.appendChild(tableRow)
    }
  };
  document.getElementById("clicky").addEventListener("click", () => {
    logMovies();
  });
  // async function myDisplay() {
  //   let myPromise = new Promise(function(resolve) {
  //     setTimeout(function() {resolve("loading....");}, 9000);
  //   });
  //   document.getElementById("demo").innerHTML = await myPromise;
  //   myDisplay();
  // }
  
