import {useEffect, useState} from "react";
import type {GuideLineResponse} from "../types/GuideLineResponse";
import {getGuideLines} from "../api/GuideLineApi";

export const useGuideLine = () => {
    const [guideLines, setGuideLines] = useState<GuideLineResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGuideLines = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getGuideLines();
                const formattedData = data.map(item => ({
                    ...item,
                    date: item.date.replace('T', ' ').substring(0, 16)
                }));
                setGuideLines(formattedData);
            } catch (err) {
                console.error("Failed to fetch guidelines:", err);
                setError("가이드라인을 불러오는 데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchGuideLines();
    }, []);

    return {guideLines, isLoading, error};
}