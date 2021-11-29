// Practice code
let apiUrl = "https://reqres.in/api/users";
function getDataFromApi(url){
     fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.data))
    .catch(error => console.log(error))
}
getDataFromApi(apiUrl);

