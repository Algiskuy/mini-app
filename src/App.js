import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./navbar/Header";
import Calculator from "./calculator/Calculator";
import TodoList from "./todolist/TodoList";
import Api from "./api/Api";
import Admin from "./admin/Admin";
// import Search from "./landingPage/Search";
import foto from "./foto/sagis1.png";
import Seacrh from "./landingPage/Search";
import { useState } from "react";
import axios from "axios";
import Results from "./landingPage/Results";
import Popup from "./landingPage/Popup";
import Content1 from "./landingPage/contentLP/Content1";
import Footer from "./landingPage/contentLP/Footer";

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
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  // const [loading, setLoading] = useState(false);
  // console.log(state.results);
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });

    // console.log(state.s);
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <>
      <div className="landingPage">
        <div className="content">
          <div className="i-left">
            <div className="i-left-wrapper">
              <h2 className="i-intro">Hello, My name is</h2>
              <h1 className="i-name">Carnaby</h1>
              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">Front End Dev</div>
                  <div className="i-title-item">Calculator</div>
                  <div className="i-title-item">Admin</div>
                  <div className="i-title-item">Todo List</div>
                  <div className="i-title-item">Api</div>
                </div>
              </div>
              <p className="i-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                nesciunt architecto iure dolor facere ullam numquam quis sit
                molestiae id est magni vero, voluptas eum veritatis. Cum iste
              </p>
            </div>
          </div>
          <div className="i-right">
            <div className="i-bg">
              <img src={foto} alt="" className="i-img" />
            </div>
          </div>
        </div>
        <Content1 />
        <div className="l-content">
          <h1>Movie Database</h1>
        </div>
        <div className="Search">
          <Seacrh handleInput={handleInput} search={search} />
          <Results results={state.results} openPopup={openPopup} />
          {typeof state.selected.Title != "undefined" ? (
            <Popup selected={state.selected} closePopup={closePopup} />
          ) : (
            false
          )}
        </div>
        {/* <Search /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
