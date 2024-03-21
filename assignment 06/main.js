const logMovies = async () => {
    // let loading = true;
    const response = await fetch("https://jsonplaceholder.org/users");
    // loading = false;
    console.log(response);

    setTimeout(() => {
        if (!response) {
          document.getElementById('result').innerHTML = 'Loading...'; 
        }
      }, 1000)
    const movies = await response.json();
    console.log(movies);
    const table = document.getElementsByTagName("table")[0];
    for (i = 0; i < movies.length; i++) {
        document.getElementById("demo").innerHTML = movies.map(getFullname);
        document.getElementById("demo2").innerHTML = movies.map(getFullemail);
        document.getElementById("demo3").innerHTML = movies.map(getFulladdress);
        document.getElementById("demo4").innerHTML = movies.map(getFullid);
        document.getElementById("demo5").innerHTML = movies.map(getFullphone);
        document.getElementById("demo6").innerHTML = movies.map(getFullwebsite);
        // const myArray = text.split(" ");

  }
};

document.getElementById("clicky").addEventListener("click", () => {
    logMovies()

}
);
function getFullname(item) {
  return [ `<li>${item.firstname}, ${item.lastname}</li> `]
}
function getFullemail(item) {
  return [ ` <li>${item.email} </li> `]
}
function getFulladdress(item) {
  return [ `<li>${item.address.street}</li> `]
}
function getFullid(item) {
  return [ `<li>${item.id}</li> `]
}
function getFullphone(item) {
  return [ `<li>${item.phone}</li> `]
}
function getFullwebsite(item) {
  return [ `<li>${item.website}</li> `]
}