export interface Report {
    item: string;          // 고장 물품
    roomNumber: string;    // 강의실 호수
    userRole: 'student' | 'staff' | ''; // 학생/교직원
    userId: string;        // 학번/교직원번호
    contact: string;       // 연락처
    description: string;   // 고장 상세 기재
    file?: FileList;       // 첨부 파일 (optional)
    status: 'pending' | 'completed'
}