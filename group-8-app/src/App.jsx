import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Homepage from "./pages/Homepage";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/course/:courseCode" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/course/:courseCode" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;

