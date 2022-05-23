import AddStudent from "./components/AddStudent";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewStudents from "./components/ViewStudents";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddStudent />} />
          <Route path="/viewStudents" element={<ViewStudents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
