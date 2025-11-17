import {useEffect, useState} from "react";
import {getGuideLineById} from "@/api/GuideLineApi";
import type {GuideLineResponse} from "@/types/GuideLineResponse";

export const useGuideLineDetail = (id: string | undefined) => {
    const [item, setItem] = useState<GuideLineResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setIsLoading(false);
            return;
        }

        const fetchGuideLine = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const data = await getGuideLineById(id);

                // 날짜 포맷팅
                const formattedData = {
                    ...data,
                    date: data.date
                        ? data.date.replace('T', ' ').substring(0, 16)
                        : '날짜 없음'
                };

                setItem(formattedData);
            } catch (err) {
                console.error("Failed to fetch guideline detail:", err);
                setError("게시글을 불러오는 데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchGuideLine();
    }, [id]);

    return { item, isLoading, error };
}