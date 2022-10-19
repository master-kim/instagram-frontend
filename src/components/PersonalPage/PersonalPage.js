import { Component, useState } from "react";

import Header from "../Header/Header";

import pp1 from "../../images/pp1.png";
import "./PersonalPage.css";

/* 
 * 설명 : PersonalPage.js
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.13    김영일    최초작성 
 * -------------------------------------------------------------
*/

function PersonalPage() {

  return (
    <>
      <Header   />
        <div className="user-Details-Container">
          <div className="user-Details-content">
            <div className="profile-container">
              <img
                className="profile-img"
                src={pp1}
                alt="my profile"
              />

              <div className="user-post-detail-container">
                <h1 className="profile-name">Youngil Kim</h1>
                <ul className="user-follower-container">
                  <li>
                    <p className="post-count ">
                      <span className="count ">5 </span>
                      posts
                    </p>
                  </li>
                  <li>
                    <p className="post-count">
                      <span className="count">32</span>
                      followers
                    </p>
                  </li>
                  <li>
                    <p className="post-count">
                      {" "}
                      <span className="count ${textColor">
                        32{" "}
                      </span>
                      following
                    </p>
                  </li>
                </ul>
                <p className="post-count count">afaf</p>
                <p className="post-count">biobio</p>
              </div>
            </div>
            <div className="users-all-post">
              <ul className="user-story-container">
              {/* 올렸던 스토리들이 모아지는 곳입니다 */}
                {/* {storyDetails.map((eachStory) => (
                  <li key={eachStory.id} className="story-item">
                    <img
                      className="user-story"
                      src={eachStory.image}
                      alt="my story"
                    />
                  </li>
                ))} */}
              </ul>
            </div>
            <div className="user-all-post-container">
              <div className="users-all-post">
           
                <h1 className="post-count">Posts</h1>
              </div>
              {/* 포스트 했던 사진들이 보이는 곳입니다 */}
              {/* {postDetails.length > 0 ? (
                <ul className="all-post-container">
                  {postDetails.map((eachPost) => (
                    <li className="all-post-img" key={eachPost.id}>
                      <img
                        className="posted-img"
                        src={eachPost.image}
                        alt="my post"
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-post-container">
                  <BiCamera className="No-post-available" />
                  <h1 className="post-count">No Posts Yet</h1>
                </div>
              )} */}
            </div>
            
          </div>
        </div>
     
    </>
  );
}

export default PersonalPage;
