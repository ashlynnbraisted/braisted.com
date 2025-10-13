import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useEffect } from "react";
import { concertList } from "./data";
import { CustomCursor, Header, Footer } from "./components";
import { Home, Portfolio, Resume, About } from "./pages";

function App() {
  useEffect(() => {
    concertList.forEach((c) => {
      const img = new Image();
      img.src = c.src;
    });
  }, []);

  return (
    <Router>
      <CustomCursor />
      <Box
        px={75}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent={"space-between"}
      >
        <Box>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
