import './post.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <>
            <header className="header-post" >
                <div className="infos-post" >
                    <img className="img-header-post" src="https://github.com/maykbrito.png" />
                    <p>maykbrito</p>
                </div>
                    <FiMoreHorizontal />
            </header>
            <div className="img-post" >
                <img src="https://github.com/maykbrito.png"/>
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
                        <span>maykbrito</span> Desenvolvemos peças exclusivas para a Black Friday com descontos de até 60% OFF. Em breve.
                    </p>
                </div>
                <div className="time-post" >
                    <time>HÁ 1 HORA</time>
                </div>
                <div className="comment" >
                    <div className="fake-comment" >
                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>
                        <input placeholder="Adicione um comentário..." />
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
        </>
    )
}