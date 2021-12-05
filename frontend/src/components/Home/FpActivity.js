import React from 'react'
import "./MainPage.css";
import BasicModal from "./BasicModal";

export default function FpActivity() {
  const modalTitle = "FirstPenguin Activities";
  const activities = [
    "4차 산업혁명 기술 세션, ",
    "4차 산업혁명 관련 독서토론, ",
    "4차 산업혁명 관련 공모전 참여, ",
    "기타 대외활동(강연, 전시회) 참여, ",
    "코딩스터디 활동/ 컨텐츠 제작 ",
  ];
  return (
    <div className="FpActivity">
      <BasicModal modalTitle={modalTitle} modalText={activities} />
    </div>
  );
}