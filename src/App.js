import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { CustomCursor, Header, Footer } from "./components";
import { Home, Portfolio, Resume, About } from "./pages";

const AppWrapper = () => {
  const location = useLocation();

  return (
    <Box px={75} minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flex="1" display="flex" flexDirection="column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>

      {location.pathname !== "/about" && <Footer />}
    </Box>
  );
};

function App() {
  return (
    <Router>
      <CustomCursor />
      <AppWrapper />
    </Router>
  );
}

export default App;
