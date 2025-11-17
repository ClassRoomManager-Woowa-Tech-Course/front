# 강의실 관리 시스템

> 우아한테크코스 - 오픈과제

강의실 예약 및 관리를 위한 웹 기반 시스템입니다.

## 📋 목차
- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [주요 화면](#-주요-화면)
- [API 연동](#-api-연동)

## 🎯 프로젝트 소개

강의실 예약 및 사용 가이드라인을 효율적으로 관리할 수 있는 웹 애플리케이션입니다.
학생과 교직원이 강의실을 예약하고, 예약 현황을 실시간으로 확인할 수 있습니다.
추가로 고장 신고를 통해 강의실 사용의 불편을 해결합니다.

## ✨ 주요 기능

### 1. 강의실 예약
- 날짜, 시간, 강의실 선택
- 학생/교직원 구분
- 예약 목적 및 비밀번호 설정
- 예약 수정 및 취소

### 2. 예약 현황 조회
- 캘린더 기반 월별 예약 현황
- 강의실별 필터링
- 일별 상세 예약 목록
- 예약 정보 확인

### 3. 가이드라인 관리
- 강의실별 사용 가이드라인 조회
- 파일 첨부 지원 (이미지/문서)
- 게시일 및 내용 확인

### 4. 고장 신고
- 고장 기자재 신고
- 고장 신고 목록 관리자 조회
- 파일 첨부 지원 (이미지/문서)
- 고장 호수, 내용 확인

## 🛠 기술 스택

### Frontend
- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **React Router v7** - 라우팅
- **React Hook Form** - 폼 관리
- **styled-components** - 스타일링
- **Vite** - 빌드 도구

### State Management
- **Custom Hooks** - 비즈니스 로직 분리
- **useState/useEffect** - 상태 관리

### HTTP Client
- **Axios** - API 통신

## 📁 프로젝트 구조

```
src/
├── api/                    
│   ├── Client.ts          
│   ├── ReservationApi.ts
│   ├── ReportApi.ts  
│   ├── GuideLineApi.ts    
│   ├── AdminApi.ts
│   └── ClassroomApi.ts
├── components/            
│   ├── CalendarView.tsx
│   ├── CalendarControls.tsx
│   ├── ReservationListModal.tsx
│   ├── GuideLines.tsx
│   ├── GuideLineView.tsx
│   ├── MenuButton.tsx
│   ├── Reports.tsx
│   ├── ReportView.tsx
│   └── ReservationListModal.tsx
├── hooks/                 
│   ├── useAdminDelete.ts
│   ├── useAdminLogin.ts
│   ├── useAdminRegister.ts
│   ├── useCalendarState.ts
│   ├── useGuideLine.ts
│   ├── useGuideLineDetail.ts
│   ├── useMonthlyReservations.ts
│   ├── useReportDetail.ts
│   ├── useReportStatus.ts
│   ├── useReservation.ts
│   ├── useReservationDetail.ts
│   ├── useReservationCancel.ts
│   ├── useReservationModal.ts
│   └── useClassrooms.ts
├── layouts/               
│   ├── PageLayout.tsx
│   ├── ListPageLayout.tsx
│   └── header/
│       ├── Header.tsx
│       ├── LayoutWithHeader.tsx
│       ├── ListPageHeader.tsx
│       └── PageHeader.tsx
├── pages/
│   ├── AdminDeletePage.tsx                 
│   ├── AdminLoginPage.tsx
│   ├── AdminRegisterPage.tsx
│   ├── GuideLinePage.tsx
│   ├── GuideLineRegisterPage.tsx
│   ├── GuideLineDetailPage.tsx
│   ├── MainPage.tsx
│   ├── ReportDetailPage.tsx
│   ├── ReportPage.tsx
│   ├── ReportStatusPage.tsx
│   ├── ReservationDetailPage.tsx
│   ├── ReservationStatusPage.tsx
│   └── ReservationPage.tsx
├── styles/                # 스타일 컴포넌트
│   ├── FormElements.styles.ts
│   ├── DetailPage.styles.ts
│   ...
│   └── FileSection.styles.ts
│
├── types/            
│   ├── Admin.ts
│   ├── AdminLoginRequest.ts
│   ├── Authorization.ts
│   ├── ClassroomResponse.ts
│   ├── Classroom.ts
│   ├── GuideLineResponse.ts
│   ├── LoginResponse.ts
│   ├── MenuItem.ts
│   ├── Report.ts
│   ├── ReportResponse.ts
│   ├── Reservation.ts
│   ├── ReservationResponse.ts
│   ├── GuideLineResponse.ts
│   ├── GuideLine.ts
│   └── StyledProps.ts
├── utils/                 # 유틸리티 함수
│   └── fileUtils.ts
├── App.tsx
└── main.tsx
```

## 🚀 시작하기

### 설치

```bash
# 저장소 클론
git clone https://github.com/ClassRoomManager-Woowa-Tech-Course/front.git

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 빌드

```bash
npm run build
```

## 📱 주요 화면

### 1. 강의실 예약하기
- 경로: `/reservation`
- 예약 정보 입력 폼
- 실시간 강의실 목록 조회

### 2. 예약 현황
- 경로: `/reservations`
- 캘린더 기반 월별 조회
- 강의실별 필터링
- 일별 상세 예약 목록 모달

### 3. 예약 상세
- 경로: `/reservations/:id`
- 예약 정보 확인
- 예약 수정/취소 기능
- 비밀번호 확인

### 4. 가이드라인
- 경로: `/guidelines`
- 강의실별 사용 가이드라인 목록

### 5. 가이드라인 상세
- 경로: `/guidelines/:id`
- 가이드라인 내용 및 첨부파일

### 6. 신고하기
- 경로: `/report`
- 신고 내용 및 첨부파일

### 7. 신고 현황
- 경로: `/reports`
- 최근 신고순 목록

## 🔌 API 연동

### Base URL
```typescript
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';
```

### 주요 엔드포인트

#### 예약 관련
```typescript
GET    /reservations                    # 예약 목록 조회
GET    /reservations/:id                # 예약 상세 조회
POST   /reservations                    # 예약 등록
PUT    /reservations/:id                # 예약 수정
DELETE /reservations/:id                # 예약 취소
```

#### 가이드라인 관련
```typescript
GET    /guidelines                      # 가이드라인 목록
GET    /guidelines/:id                  # 가이드라인 상세
```

#### 강의실 관련
```typescript
GET    /classrooms                      # 강의실 목록
```
#### 고장 신고 관련
```typescript
GET    /reports                         # 고장 신고 목록
GET    /reports/:id                     # 고장 신고 상세 조회
POST   /reports                         # 고장 신고 등록
PATCH  /reports                         # 고장 수리 완료 처리
```
## 🎨 디자인 패턴

### Custom Hooks 패턴
비즈니스 로직을 훅으로 분리하여 재사용성과 테스트 용이성을 높였습니다.

```typescript
// 예약 상세 조회
const { item, isLoading, error } = useReservationDetail(id);

// 예약 취소
const { handleCancel, isCancel } = useReservationCancel();

// 캘린더 상태
const { currentDate, handleMonthChange } = useCalendarState();
```

### Compound Components 패턴
관련된 컴포넌트를 함께 사용하도록 설계했습니다.

```typescript
<ListPageLayout>
  <ListPageHeader title="..." description="..." />
  <CalendarControls />
  <CalendarView />
</ListPageLayout>
```

## 📝 코드 컨벤션

- **컴포넌트**: PascalCase
- **함수/변수**: camelCase
- **타입/인터페이스**: PascalCase
- **파일명**: PascalCase (컴포넌트), camelCase (유틸리티)


**Woowa-Tech-Course** - 오픈과제