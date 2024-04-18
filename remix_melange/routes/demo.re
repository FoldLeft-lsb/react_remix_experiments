[@react.component]
let make = () => {
  Js.log("Render Demo");
  <div> <h1> {React.string("Demo Page")} </h1> </div>;
};
