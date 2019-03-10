import * as React from "react";
import AceEditor from "react-ace";
import * as ReactMarkdown from "react-markdown";

import "brace/mode/css";
import "brace/mode/html";
import "brace/mode/java";
import "brace/mode/javascript";
import "brace/mode/sh";
import "brace/theme/monokai";

import { css } from "emotion";

// @ts-ignore
import COLORS from "../../constants/colors";

const wordCount = 0;

const aTagCss = css`
    width: auto;
    text-decoration: none;
    padding-bottom: 0;
    vertical-align: bottom;
    color: #645AFF;
    position: relative;
    display: inline-block;
    &:after {
        display: block;
        content: '';
        border-bottom: solid 1px #645AFF;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin:100% 50%;
    }
    &:hover:after {
        transform: scaleX(1);
        transform-origin:0 50%;
    }`
;

const MarkdownRendererMolecule = ({
  className = "",
  content,
}: any) => {
  return (
      <div className={className}>
        <ReactMarkdown
            renderers={{
            link: (props) => (
                <a
                target="_blank"
                rel="noopener noreferrer"
                key={`${wordCount} ${props.href} AHREF`}
                href={props.href || ""}
                className={aTagCss}
                >
                {props.children}
                </a>
            ),
            code: (props) => (
                <AceEditor
                key={`${wordCount} ${props.language} KODE`}
                mode={props.language}
                theme="monokai"
                width="100%"
                height="400px"
                fontSize={18}
                readOnly
                showGutter={props.language !== "sh"}
                name="UNIQUE_ID_OF_DIV"
                value={props.value}
                editorProps={{ $blockScrolling: true }}
                style={{ marginTop: 20 }}
                />
            ),
            }}
            source={content}
        />
      </div>
  );
};
MarkdownRendererMolecule.displayName = "MarkdownRendererMolecule";

export { MarkdownRendererMolecule };
