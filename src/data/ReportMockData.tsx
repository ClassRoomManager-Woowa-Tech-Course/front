import type { Report } from "@/types/Report";

export const reportMockData: Report[] = [
    {
        id: 1,
        date: '2025-11-07T10:30:00', // 신고 날짜 (ISO 형식 추천)
        item: '프로젝터', // 고장 물품
        roomCode: '5413호',
        userRole: 'STUDENT',
        userId: '20210001',
        contact: '010-1234-5678',
        content: '빔프로젝터 화면이 계속 깜빡거립니다. 10분 정도 켜두면 아예 꺼집니다.',
        files: undefined, // 첨부 파일 없음
        status: 'PENDING' // 처리 상태: 대기중
    },
    {
        id: 2,
        date: '2025-11-06T14:15:00',
        item: '컴퓨터',
        roomCode: '5302호',
        userRole: 'STAFF',
        userId: 'S2023005',
        contact: '010-9876-5432',
        content: '3번째 줄 컴퓨터 본체 전원이 들어오지 않습니다. 파워 케이블을 바꿔 끼워도 동일합니다.',
        files: undefined, // 실제 FileList 객체는 브라우저에서만 생성 가능
        status: 'COMPLETED' // 처리 상태: 완료
    },
    {
        id: 3,
        date: '2025-11-05T09:05:00',
        item: '마이크',
        roomCode: '5413호',
        userRole: 'STUDENT',
        userId: '20220010',
        contact: '010-1111-2222',
        content: '강의실 마이크에서 소리가 지지직거리며 나옵니다. 배터리는 충분한 것 같습니다.',
        files: undefined,
        status: 'PENDING'
    }
];