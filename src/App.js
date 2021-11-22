import "./App.css";
import MyNavbar from "./components/navbar/MyNavbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
