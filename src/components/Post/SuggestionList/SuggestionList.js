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

    const [suggestions, setSuggestions] = useState([])
    const [limitUsers, setLimitUsers] = useState(5)
    const slice = suggestions.slice(0, limitUsers)
    useEffect(() => {
        fetch(`https://api.github.com/users/gabrieldiasss/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })
        .catch((err) => {
            throw new Error(err)
        })
    }, [])

    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://github.com/gabrieldiasss.png`} alt="profile"/>
                <div className="user-infos-suggestion" >
                    <div className="infos" >
                        <span>gbrldiass</span>
                        <p>gabriel dias</p>
                    </div>
                    <button className="switch" >계정전환</button>
                </div>
            </div>

            <div className="header-main-suggestion" >
                <p>회원님을 위한 추천</p>
                <span>모두 보기</span>
            </div>
            <div className="user-suggestion" >
                {slice.map((suggestion, key) => (
                     <div className="infos-suggestion" key={key}>
                        <img src={`https://github.com/${suggestion.login}.png`} alt="profile"/>
                        <div className="info-suggestion" >
                            <span>{suggestion.login}</span>
                            <p>Seguido por filipedechamps</p>
                        </div>
                        <button className='follow' >팔로우</button>
                    </div>
                ))}
               
            </div>
            <footer className="footer-suggestion" >
                <p>깃허브 주소 &bull; 개발자 소개 ......</p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}