import React from "react";
import ReactDOM from "react-dom/client";
/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
</div> */

// const heading = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")]));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // this gets replaced because jsxheading render is after this render

// //React Element
// const JSXheading = <h1 id="heading">Heading from JSX</h1>;
// root.render(JSXheading);

// //React Functional Component

// const CompHeading = () => {
//     return <h1 id ="heading">Heading from Functional component</h1>
// }

// const number = 10000;

// // Component Composition
// const CompBody = () => {
//     return <div>
//         {number}
//         {/* using a react element inside react component */}
//         {JSXheading}
//         <CompHeading />
//         {/* Another way of calling a component<CompHeading></CompHeading> */}
//         {/* Another way of calling a component as a function {CompHeading()} */}
//         Component Body
//     </div>
// }

// root.render(<CompBody />);

// // another way of writing functional component without return statement
// // const CompHeading = () => <h1 id ="heading">Heading from Functional component</h1>;
// // root.render(<CompHeading />);
