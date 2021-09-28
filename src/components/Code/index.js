import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { Container } from "./styles";

const Code = (props) => {
  const { text } = props;

  return (
    <Container>
      <CodeBlock
        customStyle={{
          borderRadius: "15px",
          padding: "0 9px ",
        }}
        text={text}
        language="javascript"
        theme={dracula}
      />
    </Container>
  );
};

export default Code;
