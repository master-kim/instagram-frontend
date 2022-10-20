import './Layout.css'
import Header from "../../Header/Header";
import { StoryList } from '../StoryList/StoryList'
import { PostList } from '../PostList/PostList'
import { SuggestionList } from '../SuggestionList/SuggestionList'

/* 
 * 설명 : Layout.js
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.13    김영일    최초작성 
 * 2022.10.20    김요한    헤더 영역 추가
 * -------------------------------------------------------------
 */

export function Layout() {
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