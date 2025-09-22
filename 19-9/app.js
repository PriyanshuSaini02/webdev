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


// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "div",
//     { id: "parent" ,key:1},
//     React.createElement(
//         "div",
//         { id: "child", key: 2 },
//         [
//             React.createElement("h1", {id:"heading1",key:3}, "This is heading1"),
//             React.createElement("h1", { id: "heading2", key: 4 }, "This is heading2")
//         ]
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading)
// root.render(heading);




import React from "react";
import ReactDOM from "react-dom/client";

// const heading = (
//   <div id="parent" key="1">
//     <div id="child" key="2">
//       <h1 id="heading1" key="3">This is heading1</h1>
//       <h1 id="heading2" key="4">This is heading2</h1>
//     </div>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
// root.render(heading);


// const jsxheading = (<h1 id="heading1" key="3">This is heading1</h1>)

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxheading)



// const headingele=()=>{
//     return <h1 className="heading-jsx">this is normal jsx element</h1>
// }
// console.log(headingele)
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(headingele())



const Reactcom=()=>{
    return <h1>this is official react component</h1>
}

console.log(Reactcom);

const Reactcom2 = () => {
    return <h1>this is official react 2 component</h1>
}

console.log(Reactcom2);

const Maincom = () => {
    return (
    <div>
            <Reactcom />
            <h1>this is official main component</h1>
            <Reactcom2 />
    </div>
)}

console.log(Reactcom2);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Maincom/>)