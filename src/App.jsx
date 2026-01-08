import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Home />
      </div>
    </HelmetProvider>
  );
}

export default App;
