//<div id="root">
//  <div id="parant">
        //<h1>This is react</h1>
    //</div>
//</div>





// const heading = React.createElement("h1", null, "This is React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("h1",{id:"heading1"}, "this is g5 react")
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//<div id="root">
//  <div id="parant">
    //<div id="child">
//<h1>This is react</h1>
//</div>
//</div>
//</div>


// const heading = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         React.createElement("h1", null, "This is react")
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);





//<div id="root">
//  <div id="parant">
//<div id="child">
//<h1>This is heading1</h1>
//<h1>This is heading 2</h2>
//</div>
//</div>
//</div>


import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "div",
    { id: "parent" ,key:1},
    React.createElement(
        "div",
        { id: "child", key: 2 },
        [
            React.createElement("h1", {id:"heading1",key:3}, "This is heading1"),
            React.createElement("h1", { id: "heading2", key: 4 }, "This is heading2")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
