// import './App.css';
// import BlogPage from './BlogPage';
// import Header from './components/Header';
// import HomePage from './components/HomePage';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//     <div className="App">
      
//       <Header />

//       <Routes>
//         <Route path="/" element={<HomePage />}/>
//         <Route path="/blog" element={<BlogPage />}/>
//       </Routes>
//     </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BlogPage from './BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}/>
        </Routes>
        {/* <HomePage />
        <Products /> */}
      </div>
    </Router>
  );
}

export default App;