import React from "react";
import moment from "moment";
import styled from "styled-components";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    ?.startOf("day")
    ?.seconds(time)
    ?.format("H:mm:ss");
  return <Wrapper>{videoLengthInSeconds}</Wrapper>;
};

export default VideoLength;

const Wrapper = styled.span`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #000000;
  color: #ffffff;
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 0.375rem;
`;
