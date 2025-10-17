import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { CustomCursor, Header, Footer } from "./components";
import { Home, Portfolio, Resume, About } from "./pages";
import { useIsMobile } from "./utils/useIsMobile";

const AppWrapper = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <Box
      px={{ base: 6, md: 12, lg: 75 }}
      minHeight="100dvh"
      display="flex"
      flexDirection="column"
    >
      {!isMobile && <CustomCursor />}
      <Header />
      <Box flex="1" display="flex" flexDirection="column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>

      {(location.pathname !== "/about" || isMobile) && <Footer />}
    </Box>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
