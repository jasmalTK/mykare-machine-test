import styled from "styled-components/macro";
import React from "react";

const SmallHeading = ({ text, align }) => {
  return <Heading align={align}> {text}</Heading>;
};

export default SmallHeading;

const Heading = styled.p`
  font-weight: bold;
  ${({ align }) =>
    align &&
    `
    text-align: ${align};
  `}
`;

