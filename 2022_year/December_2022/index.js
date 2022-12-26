// Hello world using Javascript 
// manipulate the HTML DOM using Javascript

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World";
// const root = document.getElementById("root");
// root.appendChild(heading);

// manipulate the HTML DOM using React

const heading = React.createElement("h1", {
    class: "title",
    style: {color: "red", backgroundColor: "lightgreen"},
}, "Namaste Everyone");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);