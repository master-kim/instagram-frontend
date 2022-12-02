import React, { useEffect, useRef, useState } from "react";
import "./PostUploadModal.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import { BsArrowLeft, BsFillCloudDownloadFill } from "react-icons/bs";
import {
  IoMdHeartEmpty,
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosClose,
} from "react-icons/io";
import { BsChat, BsEmojiSmile, BsBookmark } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import * as commonAxios from "../../commonAxios";

function PostUploadModal({ open, onClose }) {
  const fileInput = useRef(null);
  const navigate = useNavigate();
  const pageMove = (url) => {
    navigate(url);
  };
  const goToBack = () => {
    noneUpload();
    setPostImages([]);
    setDataImages([]);
  };
  const [postImages, setPostImages] = useState([]);
  const [dataImages, setDataImages] = useState([]);
  const [postInfo, setPostInfo] = useState("");
  const [back, setBack] = useState(false);

  const postData = {
    postImages,
    postInfo,
  };
useEffect(()=>{
  if(!open){setPostImages([])}
})
  const onPostImage = (e) => {
    if (e.target.files[0]) {
      // 2022.11.12.김요한.추가 - userImage 는 화면에 바뀌는 데이터 형식(String) , dataImg는 실질적인 데이터 전송 형식 (File) // 합칠 수 있으면 합치길 원함!
      setPostImages(() => e.target.files[0]);
      setDataImages(() => e.target.files[0]);
    } else {
      //업로드 취소할 시
      setPostImages([]);
      setDataImages([]);
    }

    //FileReader 를 통해 비동기로 읽을 수 있음.
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPostImages(reader.result);
      } else {
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const result = commonUtils.isEqualCheck(userPwd, userPwdChk);

    if (postImages.length >= 1) {
      // 2022.11.12.김요한.추가 - FormData 선언 및 inputData => 이 부분은 헤더를 application/json 로 데이터 변경
      const formData = new FormData();
      const inputs = new Blob([JSON.stringify(postData)], {
        type: "application/json",
      });
      formData.append("fileInfo", dataImages);
      formData.append("userInfo", inputs);

      await commonAxios.commonMultiPart(
        "/user/userRegister",
        formData,
        callback
      );

      function callback(data) {
        if (data[0].resultCd === "SUCC") {
          navigate("/login");
          console.log(data);
        }
      }
    } else {
      const data = [
        {
          resultMsg: "적어도 한장의 사진을 올려주셔야 합니다.",
        },
      ];
      alert(data);
    }
  };

  // 오픈 아니면 안일어남.
  if (!open) return null && setPostImages([]);

  {
    /* 사진 업로드 페이지 */
  }
  function selectPostStory() {
    return (
      <>
        <div className="post-upload-box-inner">
          <div
            className="post-upload-box-title"
            style={{ justifyContent: "center" }}
          >
            <div style={{ "font-size": "1.8em" }}>새 게시물 만들기</div>
          </div>
          <div
            className="post-upload-box-inner-inner"
            style={{ display: "block", padding: "15%" }}
          >
            {/* 게시글 또는 스토리 선택영역 */}
            
            <div style={{ textAlign: "center",padding:"30px" }}>
              <label
                for="upload"
                style={{
                  cursor: "pointer",
                  padding: "8px 6px",
                  background: "rgb(0,169,246)",
                  color: "white",
                  "border-radius": "10px",
                  "font-size": "1.5rem",
                }}
              >
                게시물 올리기
              </label>
             
            </div>
            <div style={{ textAlign: "center" }}>
              <label
                for="upload"
                style={{
                  cursor: "pointer",
                  padding: "8px 6px",
                  background: "rgb(0,169,246)",
                  color: "white",
                  "border-radius": "10px",
                  "font-size": "1.5rem",
                }}
              >
                스토리 올리기
              </label>
              
            </div>
          </div>
        </div>
      </>
    );
  }
  function noneUpload() {
    return (
      <>
        <div className="post-upload-box-inner">
          <div
            className="post-upload-box-title"
            style={{ justifyContent: "center" }}
          >
            <div style={{ "font-size": "1.8em" }}>새 게시물 만들기</div>
          </div>
          <div
            className="post-upload-box-inner-inner"
            style={{ display: "block", padding: "15%" }}
          >
            {/* 사진 넣어지는 부분 */}
            <div style={{ width: "100%", textAlign: "center" }}>
              <BsFillCloudDownloadFill style={{ fontSize: "8rem" }} />
            </div>
            <div
              style={{ textAlign: "center", fontSize: "2rem", margin: "15px" }}
            >
              사진과 동영상을 여기에 끌어다 놓으세요
            </div>
            <div style={{ textAlign: "center" }}>
              <label
                for="upload"
                style={{
                  cursor: "pointer",
                  padding: "8px 6px",
                  background: "rgb(0,169,246)",
                  color: "white",
                  "border-radius": "10px",
                  "font-size": "1.5rem",
                }}
              >
                컴퓨터에서 선택
              </label>
              <input
                id="upload"
                style={{ display: "none" }}
                onChange={onPostImage}
                ref={fileInput}
                type="file"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  {
    /* 사진 업데이트 직전 페이지! */
  }
  function uploadedPage() {
    return (
      <>
        <div className="post-upload-box-inner">
          <div className="post-upload-box-title">
            <div style={{ width: "3vw" }}>
              <BsArrowLeft
                style={{
                  "font-size": "20pt",
                  display: "flex",
                  cursor: "pointer",
                }}
                onClick={() => goToBack()}
              />
            </div>

            <div
              style={{
                "font-size": "1.5em",
                color: "rgb(0 149 246)",
                cursor: "pointer",
              }}
            >
              공유하기
            </div>
          </div>
          <div className="post-upload-box-inner-inner">
            {/* 사진 넣어지는 부분 */}
            <div className="img-post-upload">
              <img
                className="img-header-post"
                src={postImages}
                //   src={`${postList.fileInfo[0].uuidFileNm}`}
                alt="post"
              />
            </div>
            {/* 글쓰는 부분 */}
            <div className="post-upload-footer-post">
              <div className="post-upload-username">
                <div className="infos-post">
                  <img
                    className="img-header-post"
                    src={
                      "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                    }
                    // src={`${postList.fileInfo[0].uuidFileNm}`}
                    alt="post"
                  />
                  {/* <p>{postList.postInfo.userId}</p> */}
                </div>
              </div>
              <textarea
                rows="10"
                cols="40"
                placeholder="문구입력.."
                style={{
                  border: "0",
                  resize: "none",
                  margin: "0 10px 10px 10px",
                  "font-size": "1.7rem",
                }}
              ></textarea>
              <IconContext.Provider value={{ size: "30px" }}>
                <div className="post-upload-engagement-post">
                  <div className="icons-1">
                    <div className="icon">
                      <IoMdHeartEmpty />
                    </div>
                    <div className="icon">
                      <BsChat />
                    </div>
                    <div className="icon">
                      <FiSend />
                    </div>
                  </div>
                  <div className="icon">
                    <BsBookmark />
                  </div>
                </div>
              </IconContext.Provider>
              <div className="post-upload-legend">
                <p>
                  {/* <span>{postList.postInfo.userId}</span>  */}
                  {/* {postList.postInfo.postContent}  */}
                </p>
              </div>
              <div className="post-upload-time-post">
                {/* <time>{postList.postInfo.createDt}</time> */}
              </div>
              <div className="post-upload-comment">
                <div className="post-upload-fake-comment">
                  <IconContext.Provider value={{ size: "25px" }}>
                    <div className="icon">
                      <BsEmojiSmile />
                    </div>
                  </IconContext.Provider>
                  <input placeholder="댓글달기..." />
                </div>
                <button onClick={() => pageMove("/mainpage")}>게시</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>


      <div onClick={onClose} className="header-modal-container">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="post-upload-box"
        >
          {selectPostStory()}

          {/* {postImages == false ? noneUpload() : uploadedPage()} */}
        </div>
        <div class="upload-close" onClick={onClose}  >
          <IoIosClose style={{ width: "5vw", height: "9vh" }} />
        </div>
      </div>

    </>
  );
}
export default PostUploadModal;
