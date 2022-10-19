import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

import { IconContext } from 'react-icons'

import './Header.css'

/* 
 * 설명 : Header.js
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.13    김영일    최초작성 
 * -------------------------------------------------------------
*/

function Header() {
    return (
        <header className="header" >
            <div className="container" >
                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="profile"/>
                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    <input placeholder="pesquisar" />
                </div>
                <div className="menu-icons" >
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <AiFillHome />
                        </div>
                        <div>
                            <RiMessengerLine />
                        </div>
                        <div>
                            <BsPlusSquare />
                        </div>
                        <div>
                            <MdOutlineExplore />
                        </div>
                        <div>
                            <FiHeart />
                        </div>
                    </IconContext.Provider>
                    <img className="img-user" src="https://github.com/gabrieldiasss.png" alt="profile"/>
                </div>
            </div>
        </header>
    )
}

export default Header;