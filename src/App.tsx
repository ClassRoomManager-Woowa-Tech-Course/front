import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReportPage from '@/pages/ReportPage';
import MainPage from "@/pages/MainPage";
import GlobalStyle from "@/styles/GlobalStyle";
import ReservationPage from "@/pages/ReservationPage";
import ReservationStatusPage from "@/pages/ReservationStatusPage";
import GuideLinePage from "@/pages/GuideLinePage";
import GuideLineDetailPage from "@/pages/GuideLineDetailPage";
import ReportStatusPage from "@/pages/ReportStatusPage";
import AdminLoginPage from "@/pages/AdminLoginPage";
import AdminRegisterPage from "@/pages/AdminRegisterPage";
import AdminDeletePage from "./pages/AdminDeletePage";
import GuideLineRegisterPage from "./pages/GuideLineRegisterPage";


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
            <Route path="/guideline/register" element={<GuideLineRegisterPage />}/>
            <Route path="/reports" element={<ReportStatusPage />}/>
            <Route path="/admin" element={<AdminLoginPage />}/>
            <Route path="/admin/register" element={<AdminRegisterPage />}/>
            <Route path="/admin/delete" element={<AdminDeletePage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
