import React from "react";
import styled from "styled-components";
function UserAbout(props) {
  const Wrapper = styled.div`
    background: #dce0e8;
    padding: 1em;
    width: 450px;
    position: relative;
    display: inline-block;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-bottom: 20px;
  `;

  const About = styled.i`
    font-size: 15px;
    font-weight: 500;
    text-align: center;
  `;

  return (
    <div>
      <Wrapper>
        <About>
          <i>"{props.value}"</i>
        </About>
      </Wrapper>
    </div>
  );
}

export default UserAbout;
