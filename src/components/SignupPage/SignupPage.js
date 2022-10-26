import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import commonAxios from '../../commonAxios';
import * as commonUtils from "../../commonUtils";

import insta_logo from "../../images/insta_logo.png";
import "./SignupPage.css";

/*
 * 설명 : suggestion.js
 * -------------------------------------------------------------
 * 작업일         작업자    작업내용
 * -------------------------------------------------------------
 * 2022.10.13    김영일    최초작성
 * 2022.10.19    김요한    회원가입 취소 버튼 추가 (취소 시 login 페이지로 변경)
 * 2022.10.20    김영일    input 사항들 추가
 * 2022.10.24    김요한    회원가입 양식 유효성 검증 및 데이터 처리 진행중
 * -------------------------------------------------------------
 */

function SignupPage() {
  const navigate = useNavigate();
  const pageMove = (url) => {
    navigate(url);
  };

  const [inputs, setInputs] = useState({
    userId         : '',
    userNick       : '',
    userName       :  '',
    userPwd        : '',
    userPwdChk     : '',
    userEmail      : '',
    userPhone      : ''
  });

  const { 
    userId,    
    userNick, 
    userName,  
    userPwd,   
    userPwdChk,
    userEmail, 
    userPhone 
  } = inputs; 

  const onChange = (e) => {
    const { value, id } = e.target;  
    setInputs({
      ...inputs,                     
      [id]: value                    
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = commonUtils.isEqualCheck(userPwd , userPwdChk);

    if (result === true) {
      await commonAxios('/user/userRegister' , inputs , callback);
      function callback(data) {
        if ( data.resultCd === 'SUCC' ) {
          alert( data.resultMsg )
          navigate('/login')
        } else if (data.resultCd === 'FAIL') {
          alert( data.resultMsg )
        } else {

          const dataCnt = Object.keys(data).length;

          if (dataCnt > 1) {
            alert("모든 입력사항을 정확하게 입력해주세요.")
          } else {
            alert(data[0].resultMsg)
          }
          /* {data.map((result) => (
            alert(result.resultMsg)
          ))} */
        }
      }
    } else {
      alert("비밀번호와 비밀번호 확인 부분이 동일하지 않습니다.")
    }

  }

  return (
    <>
      <div className="signup--form-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <img className="signup-website-logo-desktop-img" src={insta_logo} />
          <div className="input-container">
            <label className="input-label" htmlFor="userid">
              USER ID
            </label>
            <input
              type="text"
              id="userId"
              className="userid-input-field"
              onChange={onChange} value={userId}
              placeholder="User ID"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="userName"
              className="username-input-field"
              onChange={onChange} value={userName}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="usernickname">
              USER NICKNAME
            </label>
            <input
              type="text"
              id="userNick"
              //   value={username}
              className="usernickname-input-field"
              onChange={onChange} value={userNick}
              placeholder="User Nickname"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="userPwd"
              className="password-input-field"
              onChange={onChange} value={userPwd}
              placeholder="Password"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password-check">
              PASSWORD CHECK
            </label>
            <input
              type="password"
              id="userPwdChk"
              className="password-input-field"
              onChange={onChange} value={userPwdChk}
              placeholder="Password Check"
            />
          <div className="input-container">
            <label className="input-label" htmlFor="email">
              EMAIL
            </label>
            <input
              type="email"
              id="userEmail"
              className="email-input-field"
              onChange={onChange} value={userEmail}
              placeholder="Email"
            />
          </div>
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="phone">
              PHONE
            </label>
            <input
              type="text"
              id="userPhone"
              className="phone-input-field"
              onChange={onChange} value={userPhone}
              placeholder="Phone Number"
            />
          </div>

          <button className="register-button" type="submit">
            Register
          </button>
          <button
            className="register-button"
            type="button"
            onClick={() => pageMove("/login")}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}

export default SignupPage;
