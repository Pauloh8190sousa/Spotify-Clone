import React from "react";

export default function Main() {
  return (
    <div className="main">
      <div className="upperNav">dummy text</div>
      <div className="mainContent">
        <h1>Uniquely yours</h1>
        <div className="cardsWrap">
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                alt="image_uniquely"
              ></img>
            </div>
            <div className="cardContent">
              <h3>Liked Songs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
