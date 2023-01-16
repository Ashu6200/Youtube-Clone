import React from "react";
import styled from "styled-components";

const LeftNavMenuItem = ({ text, icon, className, action, className1 }) => {
  return (
    <Wrapper
      onClick={action}
      style={{ backgroundColor: className, color: className1 }}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </Wrapper>
  );
};

export default LeftNavMenuItem;
const Wrapper = styled.div`
  display: flex;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  align-items: center;
  height: 2.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
  }
  span {
    margin-right: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 1px;
  }
`;
