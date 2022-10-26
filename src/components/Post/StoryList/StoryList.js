import React, { useState, useEffect } from 'react';
import commonAxios from '../../../commonAxios';
import './StoryList.css';

/* 
 * 설명 : story.js 
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.13    김영일    최초작성 
 * 2022.10.19    김요한    메인 페이지 (스토리 리스트 영역 데이터 바인딩 완료) [img 영역 필요]
 * 2022.10.25    김요한    팔로우 인원이 존재하지 않을때 데이터 처리 추가
 * -------------------------------------------------------------
*/

export function StoryList() {

    const [loading, setLoading] = useState(true);
    const [storyList, resultData] = useState([]);

    function callback(data) {
        resultData(data);
        setLoading(false);
    }

    useEffect(() => {
        commonAxios('/story/storyList' , {} , callback);
        return () => {
        };
    }, []); 

    if (loading) return <div className="container" > Loading... </div>;

    if (storyList.length > 0) {
        return (
            <div className="container" >
                {storyList.map((user) => (
                    <div className="user-elements" >
                        <div>
                            {/* 추후 img를 데이터를 가져와 넣으면 끝 */}
                            {/* <img className="image-user-story" src="C:\dev\06.img" alt="profile" /> */}
                            <img className="image-user-story" src="https://github.com/peas.png" alt="profile" />
                        </div>
                        <span style={{textAlign: "center"}}>{user.userentity.userNick}</span>       
                    </div> 
                ))}
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="user-elements" style={{height: "60px"}}>
                    <span>팔로우 한 인원이 존재하지 않습니다.</span>
                </div>
            </div>
        )
    }
    
}