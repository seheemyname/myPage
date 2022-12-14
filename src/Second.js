import React from "react";
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Second() {

    return(
        <div>
            <div className="intro">
            <script src="https://kit.fontawesome.com/71b0a15889.js" crossorigin="anonymous"></script>
                <p> <strong> My Github </strong> <FontAwesomeIcon icon={faCode}/> <br/> <h6> 클릭시 이동합니다! </h6> </p> <br/>
                <span> JS 중고거래 웹서비스 프론트엔드
                 <h6> 판매게시판, 회원가입&로그인, 메인페이지 폼 제작 </h6></span>
                <span> <a href='https://github.com/seheemyname/dropgame'> Python 피하기 게임 </a> </span>
                 <h6> 하늘에서 랜덤으로 떨어지는 적 피하기 </h6>
                <span> <a href='https://github.com/seheemyname/bouncegame'> Python 공 튕기기 </a> </span>
                 <h6> 공을 계속 쪼개는 게임 </h6>
                <span> <a href='https://github.com/seheemyname/memo'> Python 메모장 </a> </span>
                 <h6> 간단한 메모장 만들기 </h6>
                <span> <a href='https://github.com/seheemyname/MergePhoto'> Python 이미지 합치기 </a> </span>
                 <h6> 이미지 병합하는 프로그램 </h6>
                <span> <a href='https://githun.com/seheemyname/project'> JS를 이용한 Todolist 만들기 </a> </span>
                 <h6> Todolist에 할 일 추가 </h6>
            </div>
        </div>
    );
}

export default Second;