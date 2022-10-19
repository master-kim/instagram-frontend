import insta_image from "../../images/insta_image.svg";
import insta_logo from "../../images/insta_logo.png";
import "./LoginPage.css";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import commonAxios from '../../commonAxios';

/* 
 * 설명 : LoginPage.js 
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.13    김영일    최초작성 
 * 2022.10.19    김요한    - 로그인 form 데이터 백엔드 연결 
 *                        - 회원가입 페이지 이동 완료
 * -------------------------------------------------------------
*/

function LoginPage() {

  /* 2022.10.19.김요한.추가 - 페이지 이동 */
  const navigate = useNavigate();

  const pageMove = (url) => {
    navigate(url)
  }

  /* 2022.10.19.김요한.추가 - form 데이터 (id , password) */
  const [inputs, setInputs] = useState({
    userid: '',
    password: ''
  });
  
  const { userid, password } = inputs; 
  const onChange = (e) => {
    const { value, id } = e.target;  // 우선 e.target 에서 id 과 value 를 추출
    setInputs({
      ...inputs,                     // 기존의 input 객체를 복사한 뒤
      [id]: value                    // id 키를 가진 값을 value 로 설정
    });
  };

  /* 2022.10.19.김요한.추가 - 백엔드와 연결 후 사용하는 데이터 */
  const handleSubmit = async (event) => {

    event.preventDefault();

    await commonAxios('/user/userLogin' , inputs , callback);

    function callback(data) {
      if ( data.resultCd === 'SUCC' ) {
        navigate('/mainpage')
      } else {
        alert(data.resultMsg);
      }
    }
    
  }

  return (
    <>
      <div className="login--form-container">
        <img className="login-img" src={insta_image} alt="website login" />

        <form className="form-container" onSubmit={handleSubmit}>
          <img className="login-website-logo-desktop-img" src={insta_logo} />
          <div className="input-container">
            <label className="input-label" htmlFor="userid">
              USERID
            </label>
            <input
              type="text"   
              id="userid" 
                className="username-input-field"
                onChange={onChange} value={userid}
                placeholder="Userid"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
                className="password-input-field"
                onChange={onChange} value={password}
                placeholder="Password"
            />
          </div>
          <button className="login-button" type="submit">
            Sign In
          </button>
          <button className="login-button" type="button" onClick={() => pageMove('/signup')}>
            Register
          </button>
          <button className="login-button" type="button" onClick={() => pageMove('/find')}>
            Find ID or Password
          </button>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
