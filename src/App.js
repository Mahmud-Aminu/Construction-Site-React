import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import Body from "./components/Main/Body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-wrapper">
        <Header />
      </header>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
