import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          今はreactの学習中です。これから頑張ってreactエンジニアとして活躍したいです。fffffffffffkkkkskskskskskskskskkskskskskkskskskskkskskskskskskkskskskskkskskskkskskskskskskskskkskskkskskskksksksks
        </div>
        <div className="nameAndDeleteButton">
          <h3>@ShinCode</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  )
}

export default Home