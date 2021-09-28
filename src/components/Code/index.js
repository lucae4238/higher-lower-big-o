import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const Code = (props) => {
  const { text } = props;

  return (
    <div
      style={{
        fontFamily: "Fira Code",
        width: "46vw",
        margin: "10px",
        overflow: "scroll",
        maxHeight: "65vh",
      }}
    >
      <CodeBlock
        customStyle={{
          borderRadius: "15px",
          padding: "10px",
        }}
        text={text}
        language="javascript"
        // showLineNumbers={false}
        theme={dracula}
      />
    </div>
  );
};

export default Code;
