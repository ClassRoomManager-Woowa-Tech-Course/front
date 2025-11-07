import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReportPage from '@/pages/ReportPage';
import MainPage from "@/pages/MainPage";
import GlobalStyle from "@/styles/GlobalStyle";
import ReservationPage from "@/pages/ReservationPage";
import ReservationStatusPage from "@/pages/ReservationStatusPage";
import GuideLinePage from "@/pages/GuideLinePage";
import GuideLineDetailPage from "./pages/GuideLineDetailPage";


function App() {
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/report" element={<ReportPage />}/>
            <Route path="/reservation" element={<ReservationPage />}/>
            <Route path="/status" element={<ReservationStatusPage />}/>
            <Route path="/guidelines" element={<GuideLinePage />}/>
            <Route path="/guideline/:id" element={<GuideLineDetailPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
