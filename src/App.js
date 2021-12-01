import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import Homepage from "./components/Homepage";
import SearchResults from "./components/SearchResults";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:id" element={<SearchResults />} />
        <Route path="/:type/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
