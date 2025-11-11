import { useEffect, useState } from "react";
import type { ClassroomResponse } from "@/types/ClassroomResponse"; // @/ 별칭 사용
import { getClassroom } from "@/api/ClassroomApi"; // @/ 별칭 사용

export const useClassrooms = () => {
    const [classrooms, setClassrooms] = useState<ClassroomResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClassrooms = async () => {
            try {
                setIsLoading(true);
                setFetchError(null);

                const data = (await getClassroom()) as unknown as ClassroomResponse[];
                setClassrooms(data);

            } catch (error: any) {
                console.error("강의실 목록 패치 실패: ", error);
                setFetchError(error.message || '강의실 목록을 불러오는 데 실패했습니다.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchClassrooms();
    }, []);
    return { classrooms, isLoading, fetchError };
};