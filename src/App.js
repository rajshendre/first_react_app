import logo from "./logo.svg";
import "./App.css";
import Second from "./second";
import "./second.css";
import Third from "./third";
import Fourth from "./fourth";
import Fifth from "./fifth";
import "./third.css";
import "./fourth.css";
import "./fifth.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const propL = [
    {
      name: "raj",
    },
    {
      name: "ajay",
    },
    {
      name: "karan",
    },
  ];
  return (
    <div>
      <h1 className="app">This is my first : (Default Page App) </h1>
      <Second />
    <Third textT={"This Data is coming from third page:=>"} data={propL}/>
    <Fourth />
  <Fifth />    
      {/* <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <link to ='/' >this page</link>
                <link to ='/third' >third page</link>
                <link to ='/fourth' >fourth page</link>
              </li>
            </ul>
          </nav>
        </div>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
