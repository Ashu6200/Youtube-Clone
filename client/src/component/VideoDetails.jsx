import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import SuggestionVideoCard from "./SuggestionVideoCard";
import { abbreviateNumber } from "js-abbreviation-number";
import styled from "styled-components";
import { Context } from "../context/AppContext";
import { fetchDataFromApi } from "../context/Api";
import CommentCard from "./CommentCard";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const [comm, setComm] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);
  useEffect(() => {
    fetchComments();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      setVideo(res);
      setLoading(false);
    });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      setRelatedVideos(res);
      setLoading(false);
    });
  };
  const fetchComments = () => {
    setLoading(true);
    fetchDataFromApi(`video/comments/?id=${id}`).then((res) => {
      setComm(res);
      setLoading(false);
    });
  };
  return (
    <Wrapper>
      <Conatiner>
        <ContainerLeft>
          <div className="player">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="title">{video?.title}</div>
          <InfoConatiner>
            <Link
              to={`/channel/${video?.author?.channelId}`}
              style={{ textDecoration: "none" }}
            >
              <div className="author-info">
                <div className="author-info-1">
                  <div className="avatar-area">
                    <img src={video?.author?.avatar[0]?.url} alt="author" />
                  </div>
                </div>
                <div className="author-info-2">
                  <div className="info-1">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="icons" />
                    )}
                  </div>
                  <div className="info-2">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
              </div>
            </Link>
            <div className="informatiom">
              <div className="information-area">
                <AiOutlineLike className="icons" />
                {`${abbreviateNumber(video?.stats?.views, 2)} Likes`}
              </div>
              <div className="information-area" style={{ marginLeft: "1rem" }}>
                {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
              </div>
            </div>
          </InfoConatiner>
          <CommentContainer>
            <h1>Comments</h1>
            <div className="comment-input">
              <input type="text" placeholder="Add a comment" />
              <button type="submit">Comment</button>
            </div>
            {comm?.comments?.map((item, index) => {
              return <CommentCard key={index} comments={item} />;
            })}
            <CommentCard />
          </CommentContainer>
        </ContainerLeft>
        <ConatinerRight>
          <h2 style={{ color: "white" }}>Related Videos</h2>
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestionVideoCard key={index} video={item?.video} />;
          })}
        </ConatinerRight>
      </Conatiner>
    </Wrapper>
  );
};

export default VideoDetails;

const Wrapper = styled.div`
  display: flex;
  background-color: #000000;
  flex-direction: row;
  justify-content: center;
  height: calc(100%-56px);
  width: 100%;
`;
const Conatiner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1280px;
`;
const ContainerLeft = styled.div`
  display: flex;
  position: sticky;
  top: auto;
  flex-direction: column;
  /* width: calc(100%-350px); */
  width: inherit;
  overflow-y: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  .player {
    height: 600px;
    margin-left: 0;
    margin-right: 0;
  }
  .title {
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
  }
`;
const InfoConatiner = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: space-between;
  .author-info {
    display: flex;
    .author-info-1 {
      display: flex;
      align-items: flex-start;
      .avatar-area {
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
    .author-info-2 {
      display: flex;
      margin-left: 0.75rem;
      flex-direction: column;
      .info-1 {
        display: flex;
        color: #ffffff;
        font-weight: 600;
        align-items: center;
        font-size: 1rem;
        line-height: 1.5rem;
        .icons {
          margin-left: 0.25rem;
          color: #ffffff;
          font-size: 12px;
        }
      }
      .info-2 {
        color: #ffffff;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
  }
  .informatiom {
    display: flex;
    margin-top: 0;
    margin-top: 1rem;
    color: #ffffff;
    .information-area {
      display: flex;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      background-color: black;
      justify-content: center;
      align-items: center;
      height: 2.75rem;
      border-radius: 1.5rem;
      .icons {
        margin-right: 0.5rem;
        color: #ffffff;
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
  }
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: #ffffff;
  }
  .comment-input {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    width: 100%;
    input {
      width: 90%;
      height: 30px;
      background: transparent;
      border: none;
      outline: none;
      color: #ffffff;
      border-bottom: 1px solid white;
    }
    button {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      font-weight: 600;
      padding: 10px;
    }
  }
`;

const ConatinerRight = styled.div`
  display: flex;
  overflow-y: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  flex-direction: column;
  width: 350px;
`;
