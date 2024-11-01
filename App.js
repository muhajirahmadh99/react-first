
const parent = React.createElement(
    "div", { "id": "parent" },
    [
        React.createElement(
            "div", { "id": "child" },
            [
                React.createElement("h1", {}, "Assalaamu Alaikum"),
                React.createElement("h2", {}, "wa alaikumussalaam")
            ]
        ),
        React.createElement(
            "div", { "id": "grandchild" },
            "This is a Grandchild"
        )
    ]
)






// const heading = React.createElement("h1", {
//     id: "heading", xyz: "abc"
// }, "It's From React");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 