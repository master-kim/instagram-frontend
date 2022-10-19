import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import commonAxios from '../../../commonAxios';
import './PostList.css'


/* 
 * 설명 : Layout.js
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.13    김영일    최초작성 
 * 2022.10.19    김요한    게시글 데이터 바인딩 완료
 * -------------------------------------------------------------
 */

export function PostList() {

    const [loading, setLoading] = useState(true);
    const [postList, resultData] = useState([]);
    
    function callback(data) {
        resultData(data);
        setLoading(false);
    }

    useEffect(() => {
        commonAxios('/post/postList' , {} , callback);
        return () => {
        };
    }, []); 

    if (loading) return <div className="box" style={{margin: "30px 0"}} > Loading... </div>;

    return (
        <>
            {postList.map((post) => (
                <div className="box" style={{margin: "30px 0"}} >
                    <header className="header-post" >
                        <div className="infos-post" >
                            <img className="img-header-post" src="https://github.com/maykbrito.png" alt="profile"/>
                            <p>{post.userId}</p>
                        </div>
                            <FiMoreHorizontal />
                    </header>
                    <div className="img-post" >
                        <img src="https://github.com/maykbrito.png" alt="profile"/>
                    </div>
                    <div className="footer-post" >
                    <IconContext.Provider value={{size: "30px"}} >
                        <section className="engagement-post" >
                            <div className="icons-1" >
                                <div className="icon"><IoMdHeartEmpty /></div>
                                <div className="icon"><BsChat /></div>
                                <div className="icon"><FiSend /></div>
                            </div>
                            <div className="icon"><BsBookmark /></div>
                        </section>
                    </IconContext.Provider>
                    <section className="like" >
                        <span>61 curtidas</span>
                    </section>
                    <div className="legend" >
                        <p>
                            <span>{post.userId}</span> {post.postContent}
                        </p>
                    </div>
                    <div className="time-post" >
                        <time>{post.createDt}</time>
                    </div>
                    <div className="comment" >
                        <div className="fake-comment" >
                            <IconContext.Provider value={{size: '25px'}}>
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
            ))}
            
        </>
    )
}