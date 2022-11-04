import React, { useState, useEffect } from "react";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import {
  IoMdHeartEmpty,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { BsChat, BsEmojiSmile, BsBookmark } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import commonAxios from "../../../commonAxios";
import "./PostDetailPage.css";

/*
 * 설명 : PostDetailPage.js
 * -------------------------------------------------------------
 * 작업일         작업자    작업내용
 * -------------------------------------------------------------
 * 2022.10.13    김영일    최초작성
 * 2022.10.26    김영일    ui fixed
 * 
 * 2022.11.04    이강현    백엔드연결, 데이터바인딩 완료
 * -------------------------------------------------------------
 */

export default function PostDetailPage() {
  const [loading, setLoading] = useState(false);
  const [postList, resultData] = useState([]);

  /* const [inputs] = useState({
        postId         : '7'
    }); */

  useEffect(() => {
    //    axios.post(`http://localhost:9999/post/postDetail?postId=7`).then(({data}) =>{
    //     console.log(data);
    //    })

    const inputs = { postId: "13" };

    commonAxios(`/post/postDetail`, inputs, callback);

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
                    <img
                      className="img-header-post"
                      src={`${postList.fileInfo[0].uuidFileNm}`} 
                      alt="post"
                    />
                  </div>
                  <div className="post-detail-footer-post">
                    <div className="post-detail-username">
                      <div className="infos-post">
                      <img
                        className="img-header-post"
                        src={`${postList.fileInfo[0].uuidFileNm}`} 
                        alt="post"
                      />
                  <p>{postList.postInfo.userId}</p>
                </div>
                <FiMoreHorizontal className="info-button" />
              </div>
              <div className="post-detail-contents">
                <div className="infos-post">
                  <img
                    className="img-header-post"
                    src={`${postList.fileInfo[0].uuidFileNm}`} 
                    alt="post"
                  />
                  <p>{postList.postInfo.userId}</p>
                </div>
              </div>
              <IconContext.Provider value={{size : "30px"}}>
                <div className="post-detail-engagement-post">
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
              <div className="post-detail-legend">
                  <p>
                    <span>{postList.postInfo.userId}</span>
                    {postList.postInfo.postContent}
                  </p>
                </div>
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
                <input placeholder="댓글달기..." />
                </div>
                <button>게시</button>
              </div>
            </div>
          </div>

          <div className="icon-arrow">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </>
    );
  }
}
