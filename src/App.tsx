import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Newsitem from './components/Newsitem'
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import SearchNews from "./components/SearchNews";

function App() {
  const pageSize = 9;
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
            <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} category="entertainment" />}/>
            <Route path="/finance" element={<News pageSize={pageSize} key="finance" category="finance"/>}/>
            <Route path="/programming" element={<News pageSize={pageSize} key="finance" category="programming"/>}/>
            <Route path="/lifestyle" element={<News pageSize={pageSize} key="lifestyle" category="lifestyle"/>}/>
            
            <Route path="/crypto-web3" element={<SearchNews pageSize={pageSize} key="crypto-web3" keywords="Crypto" />}/>
            <Route path="/artificial-intelligence" element={<SearchNews pageSize={pageSize} key="anime" keywords="LLM" />}/>

          </Routes>
        </Router>
      </ThemeProvider>
      </div>
    </>
  );
}

export default App;
