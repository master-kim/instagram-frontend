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

    const inputs = { postId: "7" };

    commonAxios(`/post/postDetail`, inputs, callback);

    function callback(data) {
      resultData(data);
      setLoading(false);
    }

    return () => {};
  }, []);

  if (postList.length === 0) {
  } else {
    return (
      <>
        <div className="box" style={{ margin: "30px 0" }}>
          <header className="header-post">
            <div className="infos-post">
              <img
                className="img-header-post"
                src="https://github.com/maykbrito.png"
                alt="profile"
              />
              <p>{postList.postInfo.userId}</p>
            </div>
            <FiMoreHorizontal />
          </header>
          <div className="img-post">
            <img
              className="img-header-post"
              src={`${postList.fileInfo[0].uuidFileNm}`}
              alt="post"
            />
            {console.log(postList.fileInfo[0].uuidFileNm)}
          </div>

          <img src={`'/${postList.fileInfo[0].uuidFileNm}'`}></img>

          <div className="footer-post">
            <IconContext.Provider value={{ size: "30px" }}>
              <section className="engagement-post">
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
              </section>
            </IconContext.Provider>
            <section className="like">
              <span>61 curtidas</span>
            </section>
            <div className="legend">
              <p>
                <span>{postList.postInfo.userId}</span>
                {postList.postInfo.postContent}
              </p>
            </div>
            <div className="time-post">
              <time>{postList.postInfo.createDt}</time>
            </div>
            <div className="comment">
              <div className="fake-comment">
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
      </>
    );
  }
}
