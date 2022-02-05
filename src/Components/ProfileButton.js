import React from "react";
import styled from "styled-components";
function ProfileButton(props) {
  const Button = styled.button`
    background-color: ${props.color};
    padding: 15px 40px;
    color: white;
    box-sizing: border-box;
    display: inline-block;
    border: 1px solid;
    font-size: 16px;
    text-decoration: none;

    &:hover:not(:disabled),
    &:active:not(disabled),
    &:focus {
      outline: 0;
      color: white;
      filter: brightness(105%);
    }
  `;

  return (
    <div>
      <Button as="a" href={`mailto:${props.email}`}>
        <strong>CONTACT ME</strong>
      </Button>
    </div>
  );
}

export default ProfileButton;
