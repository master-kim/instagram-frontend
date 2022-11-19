import { useLocation } from 'react-router-dom';
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import {
  IoMdHeart,
  IoMdHeartEmpty,
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosClose
} from "react-icons/io";
import { BsChat, BsEmojiSmile, BsBookmark } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from "react";
import * as commonAxios from "../../../commonAxios";
import "./PostDetailPage.css";

/*
 * 설명 : PostDetailPage.js
 * -------------------------------------------------------------
 * 작업일         작업자    작업내용
 * -------------------------------------------------------------
 * 2022.10.13    김영일    최초작성
 * 2022.10.26    김영일    ui fixed
 * 2022.11.04    이강현    백엔드연결, 데이터바인딩 완료
 * 2022.11.05    이강현    게시글번호에 따른 상세페이지 호출 완료
 * 2022.11.19    김요한    게시글 디테일 페이지 소스 정리 (파일 이미지 , 유저 이미지 댓글 좋아요 수 가져오기 추가)
 * 2022.11.19    김요한    게시글 디테일 페이지 좋아요 기능 추가
 * 2022.11.19    김요한    게시글 디테일 페이지 댓글 기능 추가
 * 2022.11.19    김요한    디테일 페이지 X누를경우 메인페이지로 이동 추가 (임시 방편) 추후 팝업창으로 변경 필요
 * -------------------------------------------------------------
 */

export default function PostDetailPage() {

  const [cookies, setCookie , removeCookie] = useCookies(['loginCookie']); // 쿠키 훅 

  const [loading, setLoading] = useState(false);
  const [postList, resultData] = useState([]);
  const [inputData, setinputData] = useState();

  const location = useLocation();

  //PostList.js 에서 보내준 파라미터 postId 취득
  const postId = location.state.postId;

  const navigate = useNavigate();
  const pageMove = (url) => {
      navigate(url);
  };

  useEffect(() => {
    const inputs = {postId};

    commonAxios.commonAxios('/post/postDetail', inputs, callback);

    function callback(data) {
      resultData(data);
      setLoading(false);
    }

    return () => {};
  }, []);

  if (loading) 
  return(
   <div className="box" style={{margin: "30px 0"}} >
      {" "}
      Loading... 
    </div>
  );

  // 2022.11.14.김요한.추가 - 좋아요 렌더링
  const postLikeRendering = (postList , postLikeList) => {
      const result = [];
      var setCnt = 0;
      for (let likeIdx=0; likeIdx < postLikeList.length; likeIdx++) {
          if (postLikeList.length > 0) {
              if(cookies.loginId === postLikeList[likeIdx].userId && postLikeList[likeIdx].postId === postList.postId){
                  setCnt = 1;
                  break;
              } else {
                  setCnt = 0;
              }
          } else {
              setCnt = 0;
              break;
          }
      }
      if (setCnt > 0) {
          result.push(<div className="icon"><IoMdHeart onClick={() => {doLike(postList.postId);}} /></div>);
      } else {
          result.push(<div className="icon"><IoMdHeartEmpty onClick={() => {doLike(postList.postId);}} /></div>);
      }
      return result;
  };

  // 2022.11.14.김요한.추가 - 좋아요
  const doLike = (postId) => {
      const postData = {
          postId : postId
      }
      commonAxios.commonAxios('/post/doLike' , postData , callback);

      function callback(data) {
          if (data.resultCd === "SUCC") {
              window.location.reload();
          } else {;}
      }
  };

  // 댓글달기
  const onChange = (e) => {
    const { value, id } = e.target;  
    setinputData({
      ...inputData,                     
      [id]: value                    
    });
  };
   
  const doComment = (postId) => {
      const postData = {
          postId      : postId ,
          postComment : inputData.postComment
      }

      commonAxios.commonAxios('/post/doComment' , postData , callback);

      function callback(data) {
          if (data.resultCd === "SUCC") {
              window.location.reload();
          } else {;}
      }
  };

  if (postList.length === 0) {
  } else {
    return (
      <>
            <div className="post-detail-box">
              <div className="post-detail-box-inner">
                <div className="icon-arrow">
                  <IoIosArrowBack />
                </div>
                <div className="post-detail-box-inner-inner">
                  <div className="img-post">
                    <img className="img-header-post" src={postList.postImg.uuidFileNm} alt="post" />
                  </div>
                  <div className="post-detail-footer-post">
                    <div className="post-detail-username">
                      <div className="infos-post">
                      <img className="img-header-post" src={postList.postUserImg.uuidFileNm} alt="post"
                      />
                  <p>{postList.postInfo.userentity.userNick}</p>
                </div>
                <FiMoreHorizontal className="info-button" />
              </div>
              <div className="post-detail-contents">
                <div className="infos-post">
                  <img className="img-header-post" src={postList.postUserImg.uuidFileNm} alt="post" />
                  <p>{postList.postInfo.userentity.userNick}</p>
                  {postList.postInfo.postContent} 
                </div>
              </div>
              <div style={{margin: "6px 20px 6px"}}>
              <span>댓글영역</span>
                  {postList.postCommentList.map((commentList) => {
                    return <p className="commentP">&bull; {commentList.userentity.userNick}<span className="commentSpan">{commentList.content}</span></p>
                  })}
              </div>
              <IconContext.Provider value={{size : "30px"}}>
                <div className="post-detail-engagement-post">
                  <div className="icons-1">
                    <div className="icon">
                    {postLikeRendering(postList.postInfo , postList.postLikeList)}
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
                <section className="like" style={{margin: "3px 20px 6px"}}>
                    <span>좋아요 {postList.postLikeCnt}개</span>
                </section>
              </IconContext.Provider>
              <div className="post-detail-time-post">
                <time>{postList.postInfo.createDt}</time>
              </div>
              <div className="post-detail-comment">
                <div className="post-detail-fake-comment">
                <IconContext.Provider value={{ size: "25px" }}>
                      <div className="icon">
                        <BsEmojiSmile />
                      </div>
                </IconContext.Provider>
                <input id="postComment" type="text" placeholder="댓글달기..." onChange={onChange} />
                </div>
                <button onClick={()=>{doComment(postList.postInfo.postId);} }>게시</button>
              </div>
            </div>
          </div>

          <div className="icon-arrow">
            <IoIosArrowForward />
          </div>
          <div class="close">
            <IoIosClose onClick={ () => {pageMove('/mainpage');} }/>
          </div>
        </div>
      </div>
    </>
    );
  }
}
