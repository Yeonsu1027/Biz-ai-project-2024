"use client";

import { useCallback } from "react";
import Mermaid from "../modules/Mermaid";

// enter \n 을 br tag로 변경
const ViewResultPage = ({ resultText }) => {
  // 문자열 결과를 보기좋게 편집하기
  const textToHtml = useCallback((text) => {
    const textList = text.split("\n");

    let flag = false;

    const result = textList.map((t) => {
      if (!flag && t.trim().startsWith("```")) {
        flag = true;
        return '<pre class="mermaid_code">';
      } else if (flag && t.trim().startsWith("```")) {
        flag = false;
        return "</pre>";
      } else if (flag) {
        return `${t}\n`;
      }
      return `${t}<br/>`;
    });
    return result.join("");
  });
  // 잘라낸문자중 ``` 이 있으면

  const getMeraid = useCallback((text) => {
    const textList = text.split("\n");
    let flag = false;
    const result = textList.map((t) => {
      if (t.trim().startsWith("```mermaid")) {
        flag = true;
        return "";
      } else if (flag && t.trim().startsWith("```")) {
        flag = false;
        return "\n\n";
      } else if (flag) {
        return `${t}\n`;
      } else {
        return "\n";
      }
    });
    return result.join("\n");
  });

  // 콘솔의 데이터를 보면 ```mermaid ~ ``` 으로 끝난다
  // flag 가 true 면 읽고잇는거

  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: textToHtml(resultText) }}
      ></div>
      {resultText?.includes("```mermaid") && (
        <Mermaid chart={getMeraid(resultText)} />
      )}
      <div>{getMeraid(resultText)}</div>
    </>
  );
}; // mermaid 코드가 포함된 경우만

export default ViewResultPage;
