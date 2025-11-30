
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
    <Header/>
      <nav>
        <div className="left">
          <h3>Portfolio</h3>
        </div>
        <div className="right">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Education</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default App;
