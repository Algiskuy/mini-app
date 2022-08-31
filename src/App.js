import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Calculator from "./miniapp1/Calculator";
import TodoList from "./miniapp2/TodoList";
import Api from "./miniapp3/Api";
import Admin from "./miniapp4/Admin";
import ftMe from "./foto/sagis1.png";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

function Dashboard() {
  return (
    <>
      <div className="content">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Carnaby</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Font End Dev</div>
                <div className="i-title-item">UI/UX Desainer</div>
                <div className="i-title-item">Photograper</div>
                <div className="i-title-item">Writer</div>
                <div className="i-title-item">Content Creator</div>
              </div>
            </div>
            <p className="i-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              nesciunt architecto iure dolor facere ullam numquam quis sit
              molestiae id est magni vero, voluptas eum veritatis. Cum iste
            </p>
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              stroke="black"
              className="i-scroll"
              xmlns="http://wwww.w3.org/2000/svg"
            >
              <g id="scroll">
                <path
                  id="Vector"
                  d="M40.5 15L34.5 9L28.5 15"
                  stroke-width="3"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg">
            <img src={ftMe} alt="" className="i-img" />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

// export default Dashboard;

// import React from "react";
// // import MiniApp1 from "./miniapp1/calculator";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Calculator from "./miniapp1/calculator";

// export default function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Calculator />} />
//           <Calculator />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
