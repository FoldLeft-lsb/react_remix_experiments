[@react.component]
let make = () => {
  Js.log("Render Index");
  <div> <h1> {React.string("Index Page")} </h1> </div>;
};
