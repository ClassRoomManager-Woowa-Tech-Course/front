import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReportPage from '@/pages/ReportPage';
import MainPage from "./pages/MainPage";
import GlobalStyle from "./styles/GlobalStyle";


function App() {
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/report" element={<ReportPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
