import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReportPage from '@/pages/ReportPage';
import MainPage from "./pages/MainPage";
import GlobalStyle from "./styles/GlobalStyle";
import ReservationPage from "./pages/ReservationPage";


function App() {
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/report" element={<ReportPage />}/>
            <Route path="/reservation" element={<ReservationPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
