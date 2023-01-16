import React from "react";
import styled from "styled-components";

const CommentCard = ({ comments }) => {
  return (
    <Wrapper>
      <div className="comment-user">
        <div className="comment-avatar-area">
          <img src={comments?.author?.avatar[0]?.url} alt="Dp" />
        </div>
      </div>
      <div className="comment-area">
        <div className="user-name">
          <span className="span-1">{comments?.author?.title} </span>
          <span className="span-2">{comments?.publishedTimeText}</span>
        </div>
        <p className="comment-p">{comments?.content}</p>
      </div>
    </Wrapper>
  );
};

export default CommentCard;

const Wrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  .comment-user {
    display: flex;
    align-items: flex-start;
    .comment-avatar-area {
      display: flex;
      overflow: hidden;
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 9999px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .comment-area {
    display: flex;
    color: white;
    padding-left: 20px;
    flex-direction: column;
    align-content: center;
    .user-name {
      display: flex;
      flex-direction: row;
      align-items: center;
      .span-1 {
        text-align: center;
        font-size: 14px;
      }
      .span-2 {
        padding-top: 3px;
        padding-left: 10px;
        font-size: 10px;
      }
    }
    .comment-p {
      font-size: 17px;
    }
  }
`;
