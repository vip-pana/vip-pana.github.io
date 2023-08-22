import { Heading } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react'

export const LabelWrapper = (props) => {
  const labelText = "Full Stack Dev".split("");

  return (
    <Wrapper>
          <Heading
            bgGradient={
              props.isDark ? "linear(to-r, teal.500, green.500)" : "black"
            }
            bgClip={props.isDark ? "text" : ""}
            mb={[50, 5]}
          >
            {labelText.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </Heading>
        </Wrapper>

  )
}


const animation = keyframes`
  0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
  100% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
`;

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;

const Wrapper = styled.span`
  display: inline-block;

  span {
    animation: ${gradient} 5s ease-in-out;
    background: linear-gradient(to right, #ac00e6, #faf089, #38a169);
    background-size: 300%;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  span:nth-of-type(1) {
    animation-delay: 0.3s;
  }
  span:nth-of-type(2) {
    animation-delay: 0.6s;
  }
  span:nth-of-type(3) {
    animation-delay: 0.9s;
  }
  span:nth-of-type(4) {
    animation-delay: 1.2s;
  }
  span:nth-of-type(6) {
    animation-delay: 0.3s;
  }
  span:nth-of-type(7) {
    animation-delay: 0.6s;
  }
  span:nth-of-type(8) {
    animation-delay: 0.9s;
  }
  span:nth-of-type(9) {
    animation-delay: 1.2s;
  }
  span:nth-of-type(10) {
    animation-delay: 1.5s;
  }
  span:nth-of-type(12) {
    animation-delay: 0.3s;
  }
  span:nth-of-type(13) {
    animation-delay: 0.6s;
  }
  span:nth-of-type(14) {
    animation-delay: 0.9s;
  }
`;
