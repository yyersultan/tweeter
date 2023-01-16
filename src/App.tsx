import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Test } from "./pages/Test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/sigin" element={<SignIn />} />
        <Route path="/*" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>

    </div>
  );
}

export default App;
