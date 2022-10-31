import React, { useState, useEffect } from "react";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import {
  IoMdHeartEmpty,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { BsChat, BsEmojiSmile, BsBookmark } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import commonAxios from "../../commonAxios";
import "./PostDetailPage.css";

/*
 * 설명 : Layout.js
 * -------------------------------------------------------------
 * 작업일         작업자    작업내용
 * -------------------------------------------------------------
 * 2022.10.20   김영일    최초작성
 * -------------------------------------------------------------
 */

export default function PostDetailPage() {
  const [loading, setLoading] = useState(false);
  const [postList, resultData] = useState([]);

  function callback(data) {
    resultData(data);
    setLoading(false);
  }

  if (loading)
    return (
      <div className="box" style={{ margin: "30px 0" }}>
        {" "}
        Loading...{" "}
      </div>
    );

  return (
    <>
      <div className="post-detail-box">
        <div className="post-detail-box-inner">
          <div className="icon-arrow">
            <IoIosArrowBack />
          </div>
          <div className="post-detail-box-inner-inner">
            <div className="img-post">
              <img src="https://github.com/maykbrito.png" alt="profile" />
            </div>
            <div className="post-detail-footer-post">
              <div className="post-detail-username">
                <div className="infos-post">
                  <img
                    className="img-header-post"
                    src="https://github.com/maykbrito.png"
                    alt="profile"
                  />
                  <p>user id</p>
                </div>
                <FiMoreHorizontal className="info-button"/>
              </div>

              <div className="post-detail-contents">
                <div className="infos-post">
                  <img
                    className="img-header-post"
                    src="https://github.com/maykbrito.png"
                    alt="profile"
                  />
                  <p>user id</p>
                </div>
              </div>
              <IconContext.Provider value={{ size: "30px" }}>
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
              <div className="post-detail-like">
                <span>61 curtidas</span>
              </div>
              <div className="post-detail-legend">
                <p>
                  <span>user ID</span> POST CONTENT
                </p>
              </div>
              <div className="post-detail-time-post">
                <time>Create Data</time>
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
