import Header from "../components/Navs/Nav";
import "./App.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Header />
      </div>
      <div className="App-Content">
        <Outlet></Outlet>
        {/* Home content */}
      </div>
    </div>
  );
}

export default App;
