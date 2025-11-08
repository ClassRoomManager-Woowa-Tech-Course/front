import type {Reservation} from "../types/Reservation";

export const mockData: Reservation[] = [
    { id: 1, date: '2025-11-04', startTime: '09:00', endTime: '10:00', roomCode: '5413호', userRole: 'STUDENT', userId: 'user1', contact: '010-1234-5678', purpose: '팀 프로젝트' },
    { id: 2, date: '2025-11-04', startTime: '10:00', endTime: '11:00', roomCode: '5413호', userRole: 'STUDENT', userId: 'user2', contact: '010-1234-5678', purpose: '팀 프로젝트' },
    { id: 3, date: '2025-11-04', startTime: '11:00', endTime: '12:00', roomCode: '5413호', userRole: 'STUDENT', userId: 'user3', contact: '010-1234-5678', purpose: '스터디' },
    { id: 11, date: '2025-11-10', startTime: '09:00', endTime: '11:00', roomCode: '5413호', userRole: 'STUDENT', userId: 'user11', contact: '010-1234-5678', purpose: '스터디' },
    { id: 12, date: '2025-11-11', startTime: '13:00', endTime: '15:00', roomCode: '5413호', userRole: 'STAFF', userId: 'staff1', contact: '010-1234-5678', purpose: '회의' },
    { id: 13, date: '2025-11-04', startTime: '14:00', endTime: '15:00', roomCode: '5414호', userRole: 'STUDENT', userId: 'user13', contact: '010-1234-5678', purpose: '상담' },
];