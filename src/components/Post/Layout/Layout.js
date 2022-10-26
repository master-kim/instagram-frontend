import './Layout.css'
import Header from "../../Header/Header";
import { StoryList } from '../StoryList/StoryList'
import { PostList } from '../PostList/PostList'
import { SuggestionList } from '../SuggestionList/SuggestionList'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import React, { useEffect } from 'react';
/* 
 * 설명 : Layout.js
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.13    김영일    최초작성 
 * 2022.10.20    김요한    헤더 영역 추가
 * 2022.10.26    김요한    쿠키 추가
 * -------------------------------------------------------------
 */

export function Layout() {

    const [cookies, setCookie , removeCookie] = useCookies(['loginCookie']); // 쿠키 훅 
    const navigate = useNavigate();

    const userId = cookies.loginId; // 쿠키에서 id 를 꺼내기

    useEffect(() => {

        if (userId === undefined) {
            alert('세션이 만료되었습니다.')
            navigate('/login')
        } else {;}
        return () => {
        };
    }, []); 
    
    if (userId === undefined) {
    } else {
        return (
            <>
                <Header />
                <div className="MainGrid" >
                    <div className="first-column" style={{gridArea: "firstColumn"}}>
                        <div className="box" >
                            <StoryList />
                        </div>
                            <PostList />
                    </div>
                    <div style={{ gridArea: "secondColumn" }} >
                        <div className="suggestionBox" >
                            <SuggestionList />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}