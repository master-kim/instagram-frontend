import { useEffect, useState } from 'react'
import commonAxios from '../../../commonAxios';
import './SuggestionList.css'

/* 
 * 설명 : suggestion.js
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.13    김영일    최초작성 
 * -------------------------------------------------------------
*/

export function SuggestionList() {

    const [loading, setLoading] = useState(true);
    const [suggestionList, resultData] = useState([]);
    const [limitUsers, setLimitUsers] = useState(5)
    const resultList = suggestionList.slice(0, limitUsers)
    resultList.shift();

    function callback(data) {
        resultData(data);
        setLoading(false);
    }

    useEffect(() => {
        commonAxios('/follow/followList' , {} , callback);
        return () => {
        };
    }, []); 

    if (loading) return 
        <div className="container-suggestion">
            <div className="header-suggestion" >
            </div>
        </div>;

    if (resultList.length > 0) {
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
                <div className="header-suggestion" style={{height: "60px"}}>
                </div>
            </div>
        )
    }

}