import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
// import Authentication from "./pages/Authentication/Authentication";
import Message from "./pages/Message/Message";
import Homepage from './pages/Homepage/Homepage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={ <Homepage />}/>
        {/* <Route path="/*" element={<Authentication />} /> */}
        <Route path="/message" element={<Message />} />
      </Routes>
    </>
  );
}

export default App;
