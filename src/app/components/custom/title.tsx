import React from "react";

export interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1>{text}</h1>;
};

export default Title;
