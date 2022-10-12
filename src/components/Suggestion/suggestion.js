import { useEffect, useState } from 'react'
import './suggestion.css'

export function Suggestion() {
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
                <img src={`https://github.com/gabrieldiasss.png`} />
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
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}