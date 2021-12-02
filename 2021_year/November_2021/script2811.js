// 10 days of Javascript Tutorial in Hackerrank

// Fetch MockAPI data using async await and then catch method
// Display user name and avatar in webpage
let apiUrl = "https://reqres.in/api/users";
async function getApiUserData(url) {
  await fetch(url)
    .then((response) => response.json())
    .then((newData) => getData(newData.data))
    .catch((error) => console.log(error));
}
getApiUserData(apiUrl);

function getData(data) {
  console.log(data);
  let imgData = [];
  for (let j = 0; j < data.length; j++) {
    imgData.push(`
    <div>
    <span>Name: ${data[j].first_name}</span><p><img width="100" height="100" src="${data[j].avatar}"></p>
    </div>
    `);
  }
  return (document.getElementById("imageDiv").innerHTML = imgData.join(""));
}

// POST Request in javascript
const update = {
  title: "A blog post by chetan",
  body: "post on fetch API",
  userId: 1,
};

const post = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(update),
};

fetch("https://jsonplaceholder.typicode.com/posts", post)
  .then((data) => {
    if (!data.ok) {
      throw Error(data.status);
    }
    return data.json();
  })
  .then((update) => {
    console.log(update);
  })
  .catch((error) => {
    console.log(error);
  });
