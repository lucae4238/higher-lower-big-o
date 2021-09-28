import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const Code = (props) => {
  const { text } = props;

  return (
    <div
      style={{
        fontFamily: "Fira Code",
        width: "40vw",
        margin: "10px"
      }}
    >
      <CodeBlock
        className="codeblock"
        text={text}
        language="javascript"
        showLineNumbers={false}
        theme={dracula}
      />
    </div>
  );
};

export default Code;
