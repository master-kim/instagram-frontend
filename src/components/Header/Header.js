import React, { useState } from "react";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import * as commonAxios from "../../commonAxios";
import { useCookies } from "react-cookie";
import PostUploadModal from "../Common/PostUploadModal";
import "./Header.css";

/*
 * 설명 : Header.js
 * -------------------------------------------------------------
 * 작업일         작업자    작업내용
 * -------------------------------------------------------------
 * 2022.10.13    김영일    최초작성
 * 2022.10.20    김요한    메인페이지 이동 추가
 * 2022.10.25    김요한    개인페이지 이동 추가
 * 2022.10.26    김요한    로그아웃 아이콘 추가 (로그아웃 기능 추가)
 * 2022.11.29    김영일    모달창 추가(게시물 업로드)
 * -------------------------------------------------------------
 */

function Header(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]); // 쿠키 훅
  //모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  // 모달창 닫기
  const closeModal = () => {
    setModalOpen(false);
  };
  const navigate = useNavigate();

  const pageMove = (url) => {
    navigate(url);
  };

  const logout = async () => {
    await commonAxios.commonAxios("/user/userLogout", {}, callback);

    function callback(data) {
      if (data.resultCd === "SUCC") {
        navigate("/login");
        removeCookie("loginId"); // 쿠키 loginId를 지운다
        removeCookie("loginNick"); // 쿠키 loginId를 지운다
      } else {
        alert("서버오류");
      }
    }
  };

  return (
    <header className="header">
      <div className="container">
        <img
          className="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="profile"
          onClick={() => pageMove("/mainpage")}
        />
        <div className="input-fake">
          <IconContext.Provider value={{ color: "#8e8e8e" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
          <input placeholder="pesquisar" />
        </div>
        <div className="menu-icons">
          <IconContext.Provider value={{ size: "26px" }}>
            <div>
              <AiFillHome
                style={{ cursor: "pointer" }}
                onClick={() => pageMove("/mainpage")}
              />
            </div>
            {/* <div>
                            <RiMessengerLine />
                        </div> 
                        - 추후 채팅 기능 추가 여부 논의
                        */}
            <div>
              <BsPlusSquare style={{ cursor: "pointer" }} onClick={showModal} />
              <PostUploadModal open={modalOpen} onClose={closeModal} />
              {/* {modalOpen && <PostUploadModal setModalOpen = {setModalOpen} />} */}
            </div>
            <div>
              <FiHeart style={{ cursor: "pointer" }} />
            </div>
            {/* <div>
                            <MdOutlineExplore />
                        </div> 
                        - 추후 탐색 기능 추가 여부 논의
                        */}
            <img
              style={{ cursor: "pointer" }}
              className="img-user"
              src={cookies.userImg.uuidFileNm}
              alt="profile"
              onClick={() => pageMove("/personal-page")}
            />
            <span onClick={() => pageMove("/personal-page")}>
              {cookies.loginNick}
            </span>
            <div>
              <FiArrowRightCircle
                style={{ cursor: "pointer" }}
                onClick={() => logout()}
              />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </header>
  );
}

export default Header;
