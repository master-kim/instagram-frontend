import { useEffect, useState } from 'react'
import { Cookies } from 'react-cookie';
import commonAxios from '../../../commonAxios';
import { useCookies } from 'react-cookie';
import './SuggestionList.css'

/* 
 * 설명 : suggestion.js
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.13    김영일    최초작성 
 * 2022.10.27    김요한    팔로우 추천 영역
 * -------------------------------------------------------------
*/

export function SuggestionList() {

    const [cookies, setCookie , removeCookie] = useCookies(['loginCookie']); // 쿠키 훅 

    const [loading, setLoading] = useState(true);
    const [suggestionList, resultData] = useState([]);
    const [limitUsers, setLimitUsers] = useState(5)
    const resultList = suggestionList.slice(0, limitUsers)

    function callback(data) {
        resultData(data);
        setLoading(false);
    }

    useEffect(() => {
        commonAxios('/follow/followList' , {} , callback);
        return () => {
        };
    }, []); 

    if (loading) return <div className="container" > Loading... </div>;
    
    if (resultList.length > 0) {
        
        return (
            <div className="container-suggestion">
                <div className="header-suggestion" >
                    <img src={`https://github.com/gabrieldiasss.png`} alt="profile"/>
                    <div className="user-infos-suggestion" >
                        <div className="infos" >
                            <span>{cookies.loginId}</span>
                            <p>{cookies.loginNick}</p>
                        </div>
                        <button className="switch" style={{margin: "0 -50px 0 0"}}>계정전환</button>
                    </div>
                </div>
                <div className="header-main-suggestion" >
                    <p>회원님을 위한 추천</p>
                    <span style={{margin: "0 -50px 0 0"}}>모두 보기</span>
                </div>
                <div className="user-suggestion" >
                {resultList.map(
                    (suggestion, key) => (
                        <div className="infos-suggestion" key={key}>
                        {/* <img src={`https://github.com/${suggestion.login}.png`} alt="profile"/> */}
                        <img className="image-user-story" src="https://github.com/peas.png" alt="profile" />
                        <div className="info-suggestion" >
                            <span>{suggestion.userId}</span>
                            <p>{suggestion.userNick}</p>
                        </div>
                        <button className='follow' style={{margin: "0 -50px 0 0"}} >팔로우</button>
                    </div>
                ))}
                </div>
                <footer className="footer-suggestion" >
                    <p>깃허브 주소 &bull; 개발자 소개 ......</p>
                    <p>&copy; 2022 INSTAGRAM FROM META</p>
                </footer>
            </div>
        )
    } else {
        return (
            <div className="container-suggestion">
                <div className="header-suggestion" >
                    <img src={`https://github.com/gabrieldiasss.png`} alt="profile"/>
                    <div className="user-infos-suggestion" >
                        <div className="infos" >
                            <span>{suggestionList[0].userId}</span>
                            <p>{suggestionList[0].userNick}</p>
                        </div>
                        <button className="switch" style={{margin: "0 -50px 0 0"}}>계정전환</button>
                    </div>
                </div>
                <div className="header-main-suggestion" >
                    <p>회원님을 위한 추천</p>
                    <span style={{margin: "0 -50px 0 0"}}>모두 보기</span>
                </div>
                <div className="user-suggestion" >
                    추천인원이 존재하지 않습니다.
                </div>
                <footer className="footer-suggestion" >
                    <p>깃허브 주소 &bull; 개발자 소개 ......</p>
                    <p>&copy; 2022 INSTAGRAM FROM META</p>
                </footer>
            </div>
        )
    }

}