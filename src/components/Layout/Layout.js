import './Layout.css'
import { Story } from '../Story/story.js'
import { Post } from '../Post/post.js'
import { Suggestion } from '../Suggestion/suggestion.js'

/* 
 * 설명 : Layout.js
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.13    김영일    최초작성 
 * -------------------------------------------------------------
*/


export function Layout() {
    return (
        <>
            <div className="MainGrid" >
                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box" >
                        <Story />
                    </div>
                        <Post />
                </div>
                <div style={{ gridArea: "secondColumn" }} >
                    <div className="suggestionBox" >
                        <Suggestion />
                    </div>
                </div>
            </div>
        </>
    )
}