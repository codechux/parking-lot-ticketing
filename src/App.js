import "./App.css";
import { DetailsProvider } from "./components/RegisterContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <DetailsProvider>
      <div className="App">
        <Dashboard />
      </div>
    </DetailsProvider>
  );
}

export default App;
