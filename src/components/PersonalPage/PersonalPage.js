import { Component, useState } from "react";

import Header from "../Header/Header";

import pp1 from "../../images/pp1.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IoMdSettings} from 'react-icons/io'
import {FaHeart } from 'react-icons/fa'
import {FaComment } from 'react-icons/fa'

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
    

<div className="personal-container">

  <div className="profile">

    <div className="profile-image">

      <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />

    </div>

    <div className="profile-user-settings">

      <h1 className="profile-user-name">janedoe_</h1>

      <button className="btn profile-edit-btn">Edit Profile</button>

      <button className="btn profile-settings-btn" aria-label="profile settings"><IoMdSettings className="setting-btn" aria-hidden="true" /></button>

    </div>

    <div className="profile-stats">

      <ul>
        <li><span className="profile-stat-count">164</span> posts</li>
        <li><span className="profile-stat-count">188</span> followers</li>
        <li><span className="profile-stat-count">206</span> following</li>
      </ul>

    </div>

    <div className="profile-bio">

      <p><span className="profile-real-name">Jane Kim</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

    </div>

  </div>
  {/* <!-- End of profile section --> */}

</div>
{/* <!-- End of container --> */}


{/* post contianer */}
<div className="container">

  <div className="gallery">

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/> 56</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 2</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>89</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 5</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-type">

        <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

      </div>

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>42</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 1</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-type">

        <span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true"></i>

      </div>

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>38</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 0</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-type">

        <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

      </div>

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>47</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 1</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>94</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 3</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-type">

        <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

      </div>

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>52</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 4</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>66</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 2</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-type">

        <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

      </div>

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>45</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 0</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>34</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 1</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>41</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 0</li>
        </ul>

      </div>

    </div>

    <div className="gallery-item" tabIndex="0">

      <img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" className="gallery-image" alt="" />

      <div className="gallery-item-type">

        <span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true"></i>

      </div>

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FaHeart className="io-text" aria-hidden="true"/>30</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FaComment className="io-text fa-comment" aria-hidden="true" /> 2</li>
        </ul>

      </div>

    </div>

  </div>
  {/* <!-- End of gallery --> */}
  {/* 사진을 불러오는 동안 로더 나오게 함  */}
  {/* <div className="loader"></div> */}

</div>
{/* <!-- End of post container --> */}



        {/* <div className="user-Details-Container">
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
              {/* </ul>
            </div>
            <div className="user-all-post-container">
              <div className="users-all-post">
           
                <h1 className="post-count">Posts</h1>
              </div> */}
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
            {/* </div>
              
          </div>
        </div> */}
     
    </>
  );
}

export default PersonalPage;
