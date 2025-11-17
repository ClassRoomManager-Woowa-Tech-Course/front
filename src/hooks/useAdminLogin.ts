import {useState} from "react";
import {useNavigate} from "react-router-dom";
import type {AdminLoginRequest} from "../types/AdminLoginRequest";
import {loginAdmin} from "../api/AdminApi";

export const useAdminLogin = () => {
    const [isLoding, setIsLoding] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const login = async (data: AdminLoginRequest) => {
        setIsLoding(true);
        setError(null);

        try{
            const response = await loginAdmin(data);
            console.log("로그인 성공, token: ", response.token);
            localStorage.setItem('token', response.token);
            navigate('/reports');
            return true;
        } catch (error: any) {
            console.error('로그인 실패: ', error.response?.date || error.message);
            alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.')
            return false;
        } finally {
            setIsLoding(false);
        }
    }
    return {login, isLoding, error};
};