import "./App.css";
import Navbar from "./components/ui/Navbar";
import Header from "./components/Header";
// import Newsitem from './components/Newsitem'
import LatestNews from "./components/LatestNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import SearchNews from "./components/SearchNews";
import Crypto from "./components/Crypto";

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

            <Route path="/" element={<LatestNews key="general" pageSize={pageSize} category="general" />} />
            <Route path="/business" element={ <LatestNews key="business" pageSize={pageSize} category="business" /> } />
            <Route path="/health" element={<LatestNews key="health" pageSize={pageSize} category="health" />}/>
            <Route path="/entertainment" element={<LatestNews key="entertainment" pageSize={pageSize} category="entertainment" />}/>
            <Route path="/finance" element={<LatestNews pageSize={pageSize} key="finance" category="finance"/>}/>
            <Route path="/programming" element={<LatestNews pageSize={pageSize} key="programming" category="programming"/>}/>
            <Route path="/lifestyle" element={<LatestNews pageSize={pageSize} key="lifestyle" category="lifestyle"/>}/>
            
            <Route path="/crypto-web3" element={<> <Crypto/> <SearchNews pageSize={pageSize} name="Crypto & Web3" key="crypto-web3" keywords="Web3"  /> </>}/>
            <Route path="/artificial-intelligence" element={<SearchNews pageSize={pageSize} key="LLM" name="Artificial Intelligence" keywords="chatGPT" />}/>

          </Routes>
        </Router>
      </ThemeProvider>
      </div>
    </>
  );
}

export default App;
