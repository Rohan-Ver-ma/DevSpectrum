import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Newsitem from './components/Newsitem'
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const pageSize = 12;
  return (
    <>
    <div className="dark:bg-neutral-950 dark:text-neutral-50"> 

   
      <ThemeProvider >
        <Router>
          <Navbar />
          <Header />
          <Routes>

            <Route path="/" element={<News key="general" pageSize={pageSize} category="general" />} />
            <Route path="/business" element={  <News key="business" pageSize={pageSize} category="business" /> } />
            <Route path="/health" element={<News key="health" pageSize={pageSize} category="health" />}/>

          </Routes>
        </Router>
      </ThemeProvider>
      </div>
    </>
  );
}

export default App;
