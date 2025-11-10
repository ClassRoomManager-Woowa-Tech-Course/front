import styled from "styled-components";

// 첨부 파일 전체 섹션
export const FileSectionWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

// 첨부 파일 제목 (H4)
export const FileSectionTitle = styled.h4`
  font-size: 1.1em;
  color: #333;
  margin-bottom: 15px;
`;

// 이미지/파일 링크를 담을 컨테이너 (갤러리 효과)
export const FilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // 공간이 부족하면 다음 줄로
  gap: 15px; // 파일 항목 간의 간격
  justify-content: flex-start; // 왼쪽 정렬
  align-items: flex-start; // 상단 정렬
`;

// 각 파일 항목 (이미지 또는 링크)
export const FileItem = styled.div`
  display: flex;
  flex-direction: column; // 파일명과 이미지/링크를 세로로
  align-items: flex-start; // 왼쪽 정렬
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  max-width: 250px; // 각 파일 항목의 최대 너비
  flex-grow: 1; // 공간이 남으면 채움
  min-width: 150px; // 최소 너비
`;

// 이미지 스타일
export const AttachedImage = styled.img`
  max-width: 100%; // 부모 FileItem 너비를 넘지 않음
  max-height: 200px; // 이미지 최대 높이 제한
  height: auto; // 비율 유지
  border-radius: 4px;
  margin-bottom: 10px; // 이미지와 파일명 사이 간격
  border: 1px solid #eee;
  object-fit: contain; // 이미지가 잘리지 않고 전체 보이도록
`;

// 파일 링크 스타일
export const AttachedFileLink = styled.a`
  font-size: 0.9em;
  color: #007bff;
  text-decoration: none;
  word-break: break-all; // 파일명이 길면 줄 바꿈
  
  &:hover {
    text-decoration: underline;
  }
`;

// 파일명 표시
export const FileNameText = styled.span`
  font-size: 0.8em;
  color: #555;
  margin-top: 5px;
  word-break: break-all;
`;