import React, { useEffect, useRef, useState } from "react";
import "./PostUploadModal.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import {
  BsArrowLeft,
  BsFillCloudDownloadFill,
  BsFillTabletLandscapeFill,
} from "react-icons/bs";
import {
  IoMdHeartEmpty,
  IoIosArrowBack,
  IoIosArrowhtmlForward,
  IoIosClose,
} from "react-icons/io";
import { BsChat, BsEmojiSmile, BsBookmark } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import * as commonAxios from "../../commonAxios";
import { RiEyeCloseFill } from "react-icons/ri";

function PostUploadModal({ open, onClose }) {
  const fileInput = useRef(null);
  const navigate = useNavigate();
  const pageMove = (url) => {
    navigate(url);
  };
  // uploadedPage에서 뒤로가기 버튼 누를시, 데이터 초기화를 시킴으로 noneUpload로 이동한다
  const goToBack = () => {
    setPostImages([]);
    setDataImages([]);
    setChoosePost(false);
  };
  const [postImages, setPostImages] = useState([]);
  const [dataImages, setDataImages] = useState([]);
  const [postInfo, setPostInfo] = useState("");
  const [back, setBack] = useState(false);
  const [chooseModal, setChooseModal] = useState(true);
  const [choosePost, setChoosePost] = useState(false);

  const postData = {
    postImages,
    postInfo,
  };
  useEffect(() => {
    // 모달 밖을 클릭하거나 취소버튼 클릭시 모든 데이터가 원래로 돌아가게 된다.
    if (!open) {
      setPostImages([]);
      setDataImages([]);
      setChooseModal(true);
      setChoosePost(false);
    }
  }, [open]);

  const onChooseModal = (e) => {
    setChooseModal(false);
  };
  const onChoosePost = () => {
    setChoosePost(true);
  };
  const onPostImage = (e) => {
    if (e.target.files[0]) {
      // 2022.11.12.김요한.추가 - userImage 는 화면에 바뀌는 데이터 형식(String) , dataImg는 실질적인 데이터 전송 형식 (File) // 합칠 수 있으면 합치길 원함!
      setPostImages(() => e.target.files[0]);
      setDataImages(() => e.target.files[0]);
      setChoosePost(true);
    } else {
      //업로드 취소할 시
      setPostImages([]);
      setDataImages([]);
      setChoosePost(false);
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
      // 2022.11.12.김요한.추가 - htmlFormData 선언 및 inputData => 이 부분은 헤더를 application/json 로 데이터 변경
      const htmlFormData = new htmlFormData();
      const inputs = new Blob([JSON.stringify(postData)], {
        type: "application/json",
      });
      htmlFormData.append("fileInfo", dataImages);
      htmlFormData.append("userInfo", inputs);

      await commonAxios.commonMultiPart(
        "/user/userRegister",
        htmlFormData,
        callback
      );

      const callback = (data) => {
        if (data[0].resultCd === "SUCC") {
          navigate("/login");
          console.log(data);
        }
      };
    } else {
      const data = [
        {
          resultMsg: "적어도 한장의 사진을 올려주셔야 합니다.",
        },
      ];
      alert(data);
    }
  };

  // 모달 클로징하면 데이터 사라짐.
  if (!open) return null && setChooseModal(true);
  const selectPostStory = () => {
    // 여기서  chooseModal이 true면 이거 보여주고,choosePost가 true면, noneUpload를 보여주자
    return (
      <>
        <div onClick={onClose} className="header-modal-container">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="post-upload-box"
          >
            {/* Post를 선택하면 noneUpload()가 실행됨 */}

            <div className="post-upload-box-inner">
              <div
                className="post-upload-box-title"
                style={{ justifyContent: "center" }}
              >
                <div style={{ fontSize: "1.8em" }}>새 게시물 만들기</div>
              </div>
              <div
                className="post-upload-box-inner-inner"
                style={{ display: "block", padding: "15%" }}
              >
                {/* 게시글 또는 스토리 선택영역 */}

                <div style={{ textAlign: "center", padding: "30px" }}>
                  <label
                    onClick={() => onChooseModal()}
                    // onClick={()=>{postImages == false ? noneUpload() : uploadedPage()}}
                    htmlFor="postUpload"
                    style={{
                      cursor: "pointer",
                      padding: "8px 6px",
                      background: "rgb(0,169,246)",
                      color: "white",
                      borderRadius: "10px",
                      fontSize: "1.5rem",
                    }}
                  >
                    게시물 올리기
                  </label>
                </div>
                <div style={{ textAlign: "center" }}>
                  <label
                  onClick={() =>{alert("스토리올리기 부분은 준비중입니다")}}
                    htmlFor="storyUplod"
                    style={{
                      cursor: "pointer",
                      padding: "8px 6px",
                      background: "rgb(0,169,246)",
                      color: "white",
                      borderRadius: "10px",
                      fontSize: "1.5rem",
                    }}
                  >
                    스토리 올리기
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="upload-close" onClick={onClose}>
            <IoIosClose style={{ width: "5vw", height: "9vh" }} />
          </div>
        </div>
      </>
    );
  };

  {
    /* 사진 업로드 페이지 */
  }

  const noneUpload = () => {
    return (
      <>
        <div onClick={onClose} className="header-modal-container">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="post-upload-box"
          >
            <div className="post-upload-box-inner">
              <div
                className="post-upload-box-title"
                style={{ justifyContent: "center" }}
              >
                <div style={{ fontSize: "1.8em" }}>새 게시물 만들기</div>
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
                  style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    margin: "15px",
                  }}
                >
                  사진과 동영상을 여기에 끌어다 놓으세요
                </div>
                <div style={{ textAlign: "center" }}>
                  <label
                    htmlFor="upload"
                    style={{
                      cursor: "pointer",
                      padding: "8px 6px",
                      background: "rgb(0,169,246)",
                      color: "white",
                      borderRadius: "10px",
                      fontSize: "1.5rem",
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
          </div>
          <div className="upload-close" onClick={onClose}>
            <IoIosClose style={{ width: "5vw", height: "9vh" }} />
          </div>
        </div>
      </>
    );
  };

  {
    /* 사진 업데이트 직전 페이지! */
  }
  const uploadedPage = () => {
    return (
      <>
        <div onClick={onClose} className="header-modal-container">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="post-upload-box"
          >
            <div className="post-upload-box-inner">
              <div className="post-upload-box-title">
                <div style={{ width: "3vw" }}>
                  <BsArrowLeft
                    style={{
                      fontSize: "20pt",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    onClick={() => goToBack()}
                  />
                </div>

                <div
                  style={{
                    fontSize: "1.5em",
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
                      fontSize: "1.7rem",
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
          </div>
          <div className="upload-close" onClick={onClose}>
            <IoIosClose style={{ width: "5vw", height: "9vh" }} />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
    {/* header부분 +버튼을 눌렀을 때 true라서 selectPostStory가 나오게 만들었다 */}
    {/* selectPostStory에서 Post올리기 버튼을 선택하면 choosePost가 false라서 noneUpload()가 나옴 */}
      {/* noneUpload()에서 사진을 올리면 choosePost가 true로 바뀌면서 uploadedPage로 이동된다  */}
      {chooseModal
        ? selectPostStory()
        : choosePost
        ? uploadedPage()
        : noneUpload()}

      {/* choosePost ? noneUpload? postImage 1이상이면 uploadedPage  */}
    </>
  );
}
export default PostUploadModal;
