import React from 'react'
import "./MainPage.css";
import BasicModal from "./BasicModal";

export default function FpIntro() {
  const modalTitle = "What is FirstPenguin??";
  const modalText =
    "안녕하세요! 저희는 성균관대학교 유일의 4차 산업혁명 연구학회 ‘퍼스트 펭귄’입니다! 4차 산업혁명으로 변화하게 될 미래라는 바다에 가장 먼저 뛰어들 신입 펭귄 여러분들을 기다리고 있습니다 !!";
  return (
    <div className="FpIntro">
      <BasicModal modalTitle={modalTitle} modalText={modalText} />
    </div>
  );
}
