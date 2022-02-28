import logo from "./logo.svg";
import "./styles/globals.scss";
import Home from "./pages/home";
import Navigation from "./components/atoms/navigation/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
