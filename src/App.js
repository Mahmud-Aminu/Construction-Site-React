import Footer from "./components/Layouts/Footer";
import Navigation from "./components/Layouts/Navigation";
import Main from "./components/Main/Main";
import About from "./components/Main/About";

import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import { useRef } from "react";
function App() {
  const contactRef = useRef(null);
  const scrollContactView = () => contactRef.current.scrollIntoView();
  return (
    <Router>
      <div className="App">
        <div className="App-wrapper">
          <Navigation onContactView={scrollContactView} />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            element={
              <Main onContactView={scrollContactView} cRef={contactRef} />
            }
          />
          <Route path="/about" element={<About cRef={contactRef} />} />
        </Switch>
        <Footer onContactView={scrollContactView} />
      </div>
    </Router>
  );
}

export default App;
