import React from "react";

interface Props {
  title: string;
  content: string;
  comentsQty: number;
  // tags: string[];
}

const Destructuring = ({ title, content, comentsQty }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {comentsQty}</p>
      {/* <div>{tags.map(tag => { <span>#{tag}</span></>})}</div> */}
    </div>
  );
};

export default Destructuring;
