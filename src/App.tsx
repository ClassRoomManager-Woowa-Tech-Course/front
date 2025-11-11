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
import ReportDetailPage from "./pages/ReportDetailPage";
import ReservationDetailPage from "./pages/ReservationDetailPage";


function App() {
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/report" element={<ReportPage />}/>
            <Route path="/reservation" element={<ReservationPage />}/>
            <Route path="/reservations" element={<ReservationStatusPage />}/>
            <Route path="/reservations/:id" element={<ReservationDetailPage />}/>
            <Route path="/reservations/edit/:id" element={<ReservationPage />}/>
            <Route path="/guidelines" element={<GuideLinePage />}/>
            <Route path="/guidelines/:id" element={<GuideLineDetailPage />}/>
            <Route path="/guidelines/register" element={<GuideLineRegisterPage />}/>
            <Route path="/reports" element={<ReportStatusPage />}/>
            <Route path="/reports/:id" element={<ReportDetailPage />}/>
            <Route path="/admin" element={<AdminLoginPage />}/>
            <Route path="/admin/register" element={<AdminRegisterPage />}/>
            <Route path="/admin/delete" element={<AdminDeletePage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
