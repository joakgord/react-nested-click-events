import React from "react";

import { css } from "@emotion/react";

const cardBaseCss = css`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: #f2f2f2;
  width: 500px;
  min-height: 200px;
  padding: 20px;
`;

interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  const handleOnClick = (e: any) => {
    console.log("Card click");
  };

  return (
    <article css={cardBaseCss} onClick={handleOnClick} tabIndex={0}>
      {children}
    </article>
  );
};

export default Card;
