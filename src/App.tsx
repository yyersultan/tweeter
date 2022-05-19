import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/sigin" element={<SignIn />} />
        <Route path="/*" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
