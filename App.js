// const parent=React.createElement("div",{id:"parent"},// Nesting two divs
// React.createElement("div",{id:"child"},
// React.createElement("h1",{},"I'm an h1 tag")));
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// creating siblings of heading h1 as heading h2
const parent=React.createElement("div",{id:"parent"},// Nesting two divs
React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag"),
]))
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
