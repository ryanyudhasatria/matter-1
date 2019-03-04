import * as React from 'react';
import AceEditor from 'react-ace';
import * as ReactMarkdown from 'react-markdown';

import 'brace/mode/sh';
import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/mode/java';
import 'brace/theme/monokai';

import { css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';

let wordCount = 0;

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
  className = '',
  content
}: any) => {
  console.log('masuk')
  return (
      <div className={className}>
        <ReactMarkdown
            renderers={{
            link: props => (
                <a
                target="_blank"
                rel="noopener noreferrer"
                key={`${wordCount} ${props.href} AHREF`}
                href={props.href || ''}
                className={aTagCss}
                >
                {props.children}
                </a>
            ),
            code: props => (
                <AceEditor
                key={`${wordCount} ${props.language} KODE`}
                mode={props.language}
                theme="monokai"
                width="100%"
                height="400px"
                fontSize={18}
                readOnly
                showGutter={props.language !== 'sh'}
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
  )
}
MarkdownRendererMolecule.displayName = 'MarkdownRendererMolecule';


export { MarkdownRendererMolecule };

// const transformInlines = (line:any) => {
//     const imgRegex = /^!\[[\s\S]*\([\s\S]*\)/;
//     const urlRegex = /(https?:\/\/[^\s]+)/g;
//     const urlRegex2 = /^\[[\s\S]*\([\s\S]*\)/;
//     const mdBoldOpenRegex = /\[KODEID_MD_BOLD\].*/;
//     const mdBoldCloseRegex = /\[\/KODEID_MD_BOLD\]/;
//     const mdItalicOpenRegex = /\[KODEID_MD_ITALIC\].*/;
//     const mdItalicCloseRegex = /\[\/KODEID_MD_ITALIC\]/;
//     const mdTaggedOpenRegex = /\[KODEID_MD_TAGGED\].*/;
//     const mdTaggedCloseRegex = /\[\/KODEID_MD_TAGGED\]/;
  
//     let isBoldMode = false;
//     let isItalicMode = false;
//     let isTaggedMode = false;
  
//     return line.split(' ').map((word: any, i:any) => {
//       let extraClasses = '';
//       let containsDotOrCommaAtEnd = false;
//       let dotOrCommaAtEndSymbol = '';
  
//       wordCount += 1;
//       // check for trailing dot, meaning that it is the end of the sentence
//       if (word[word.length - 1] === '.' || word[word.length - 1] === ',') {
//         containsDotOrCommaAtEnd = true;
//         dotOrCommaAtEndSymbol = word[word.length - 1];
//       }
  
//       // check for Image occurences
//       if (imgRegex.test(word)) {
//         const imageAlt = word.split('](')[0].slice(1);
//         const imageUrl = word.split('](')[1].slice(0, word.split('](')[1].length - 1);
//         return (
//           <ImageAtom
//             key={`${wordCount} ${i} ${imageAlt}`}
//             alt={imageAlt}
//             src={imageUrl}
//             className="fl mr1 lh-copy self-center"
//           />
//         );
//       }
//       // check for Url occurences
//       if (urlRegex2.test(word)) {
//         const linkAlt = word.split('](')[0].slice(1);
//         let linkUrl = word.split('](')[1].slice(0, word.split('](')[1].length - 1);
//         linkUrl = linkUrl.slice(0, linkUrl.length - 1);
  
//         // eslint-disable-next-line
//         word = word.replace(/\[KODEID_MD_ITALIC\].*/g, '_');
//         // eslint-disable-next-line
//         word = word.replace(/\[\/KODEID_MD_ITALIC\]/g, '_');
//         return <AnchorTextAtom key={`${wordCount} ${i} a`} className="fl mr1 lh-copy" href={linkUrl} target="_blank">{`${linkAlt} `}</AnchorTextAtom>;
//       }
  
//       if (urlRegex.test(word)) {
//         // eslint-disable-next-line
//         word = word.replace(/\[KODEID_MD_ITALIC\].*/g, '_');
//         // eslint-disable-next-line
//         word = word.replace(/\[\/KODEID_MD_ITALIC\]/g, '_');
//         return <AnchorTextAtom key={`${wordCount} ${i} a`} className="fl mr1 lh-copy" href={word} target="_blank">{`${word} `}</AnchorTextAtom>;
//       }
  
//       // check for tagged (ex: `<div />`) occurence
//       if (word.length >= 3
//           && word[0] === '`'
//           && word[1] !== '`'
//           && word[word.length - (containsDotOrCommaAtEnd ? 3 : 2)] !== '`'
//           && (word[word.length - (containsDotOrCommaAtEnd ? 2 : 1)] === '`')
//       ) {
//         return (
//           <span className="fl dib lh-copy" key={`${wordCount} ${i} txt tagged-txt`}>
//             <TextAtom
//               className="fl mr1 lh-copy bg-near-white ph1 br2 ba b--shade"
//             >
//               {`${word.slice(1, word.length - (containsDotOrCommaAtEnd ? 2 : 1))}`}
//             </TextAtom>
//             <span className="fl mr1 lh-copy">{`${dotOrCommaAtEndSymbol} `}</span>
//           </span>
//         );
//       }
  
//       if (mdBoldOpenRegex.test(word)) {
//         isBoldMode = true;
//         // eslint-disable-next-line
//         word = word.replace('[KODEID_MD_BOLD]', '');
//         // eslint-disable-next-line
//         word = word.replace('[KODEID_MD_BOLD]', '');
//       }
  
//       if (mdBoldCloseRegex.test(word)) {
//         isBoldMode = false;
//         // eslint-disable-next-line
//         word = word.replace('[/KODEID_MD_BOLD]', '');
//         // eslint-disable-next-line
//         word = word.replace('[/KODEID_MD_BOLD]', '');
//       }
  
//       if (mdItalicOpenRegex.test(word)) {
//         isItalicMode = true;
//         // eslint-disable-next-line
//         word = word.replace('[KODEID_MD_ITALIC]', '');
//         // eslint-disable-next-line
//         word = word.replace('[KODEID_MD_ITALIC]', '');
//       }
  
//       if (mdItalicCloseRegex.test(word)) {
//         isItalicMode = false;
//         // eslint-disable-next-line
//         word = word.replace('[/KODEID_MD_ITALIC]', '');
//         // eslint-disable-next-line
//         word = word.replace('[/KODEID_MD_ITALIC]', '');
//       }
  
//       if (mdTaggedOpenRegex.test(word)) {
//         isTaggedMode = true;
//         // eslint-disable-next-line
//         word = word.replace('[KODEID_MD_TAGGED]', '');
//         // eslint-disable-next-line
//         word = word.replace('[KODEID_MD_TAGGED]', '');
//       }
  
//       if (mdTaggedCloseRegex.test(word)) {
//         isTaggedMode = false;
//         // eslint-disable-next-line
//         word = word.replace('[/KODEID_MD_TAGGED]', '');
//         // eslint-disable-next-line
//         word = word.replace('[/KODEID_MD_TAGGED]', '');
//       }
  
//       if (isItalicMode) {
//         extraClasses += 'i ';
//       }
  
//       if (isBoldMode) {
//         extraClasses += 'fw6 ';
//       }
  
//       if (isTaggedMode) {
//         extraClasses += 'bg-silver ';
//       }
  
//       // return any other to text
//       return (
//         <TextAtom
//           key={`${wordCount} ${i} txt`}
//           className={`fl mr1 lh-copy ${extraClasses}`}
//         >
//           {`${word} `}
//         </TextAtom>
//       );
//     });
// };

// const MarkdownRendererArchived = (props: any) => {
//     const { content } = props;
//     const readingElements: any = [];
//     if (!content) { return null; }
  
//     let isInsideCodeMode = false;
//     let currentCodeEditorLang = '';
//     let currentCodeEditorValue = '';
  
//     const codeRegex = /```/;
//     const urlRegex2 = /^\[[\s\S]*\([\s\S]*\)/;
  
//     content.split('\n').forEach((lines: any, key: any) => {
//       let res = '';
  
//       let isUnderscoreBold = false;
//       let isUnderscoreItalic = false;
  
//       let isAsteriskBold = false;
//       let isAsteriskItalic = false;
  
//       for (let i = 0; i < lines.length; i += 1) {
//         let str = '';
//         if (!isUnderscoreBold && lines[i] === '_' && lines[i + 1] === '_') {
//           str += '[KODEID_MD_BOLD]';
//           isUnderscoreBold = true;
//         } else if (!isAsteriskBold && lines[i] === '*' && lines[i + 1] === '*') {
//           str += '[KODEID_MD_BOLD]';
//           isAsteriskBold = true;
//         } else if (!isUnderscoreItalic && lines[i] === '_' && lines[i + 1] !== '_' && lines[i - 1] !== '_') {
//           str += '[KODEID_MD_ITALIC]';
//           isUnderscoreItalic = true;
//         } else if (!isAsteriskItalic && lines[i] === '*' && lines[i + 1] !== ' ' && lines[i + 1] !== '*' && lines[i - 1] !== '*') {
//           str += '[KODEID_MD_ITALIC]';
//           isAsteriskItalic = true;
//         } else if (lines[i] !== '_' && lines[i] !== '*') {
//           str += lines[i];
//         } else if (isUnderscoreItalic && lines[i] === '_' && lines[i + 1] !== '_' && lines[i - 1] !== '_') {
//           str += '[/KODEID_MD_ITALIC]';
//           isUnderscoreItalic = false;
//         } else if (isAsteriskItalic && lines[i] === '*' && lines[i + 1] !== '*' && lines[i - 1] !== '*') {
//           str += '[/KODEID_MD_ITALIC]';
//           isAsteriskItalic = false;
//         } else if (isUnderscoreBold && lines[i] === '_' && lines[i + 1] === '_') {
//           str += '[/KODEID_MD_BOLD]';
//           isUnderscoreBold = false;
//         } else if (isAsteriskBold && lines[i] === '*' && lines[i + 1] === '*') {
//           str += '[/KODEID_MD_BOLD]';
//           isAsteriskBold = false;
//         }
  
//         res += str;
//       }
  
//       if (!isInsideCodeMode) {
//         // eslint-disable-next-line
//         lines = res;
//       }
  
  
//       // check for code editor occurences
//       if (codeRegex.test(lines) && !isInsideCodeMode) {
//         currentCodeEditorLang = lines.split(' ')[0].slice(3);
//         isInsideCodeMode = true;
//       } else if (codeRegex.test(lines) && isInsideCodeMode) {
//         const editor = (
//           <AceEditor
//             key={`${wordCount} ${key} KODE`}
//             mode={currentCodeEditorLang}
//             theme="monokai"
//             width="100%"
//             height="400px"
//             fontSize={16}
//             readOnly
//             showGutter={currentCodeEditorLang !== 'sh'}
//             name="UNIQUE_ID_OF_DIV"
//             value={currentCodeEditorValue}
//             editorProps={{ $blockScrolling: true }}
//             style={{ marginTop: 20 }}
//           />
//         );
//         readingElements.push(editor);
//         isInsideCodeMode = false;
//         currentCodeEditorValue = '';
//         wordCount += 1;
//       } else if (isInsideCodeMode) {
//         currentCodeEditorValue += `${lines}\n`;
//       } else if (urlRegex2.test(lines)) {
//         const linkAlt = lines.split('](')[0].slice(1);
//         let linkUrl = lines.split('](')[1].slice(0, lines.split('](')[1].length - 1);
  
//         // eslint-disable-next-line
//         linkUrl = linkUrl.replace(/\[KODEID_MD_ITALIC\]/g, '_');
//         // eslint-disable-next-line
//         linkUrl = linkUrl.replace(/\[\/KODEID_MD_ITALIC\]/g, '_');
//         readingElements.push(<AnchorTextAtom key={`${wordCount} ${key} a`} className="fl mr1 lh-copy" href={linkUrl} target="_blank">{`${linkAlt} `}</AnchorTextAtom>);
//         wordCount += 1;
//       } else if (lines.slice(0, 2) === '# ') { // check for H1 occurences
//         readingElements.push(<H1Atom key={key}>{lines.slice(2)}</H1Atom>);
//         wordCount += 1;
//       } else if (lines.slice(0, 3) === '## ') { // check for H2 occurences
//         readingElements.push(<H2Atom key={key}>{lines.slice(3)}</H2Atom>);
//         wordCount += 1;
//       } else if (lines.slice(0, 4) === '### ') { // check for H3 occurences
//         readingElements.push(<H3Atom key={key}>{lines.slice(4)}</H3Atom>);
//         wordCount += 1;
//       } else if (lines.slice(0, 5) === '#### ') { // check for H4 occurences
//         readingElements.push(<H3Atom key={key}>{lines.slice(5)}</H3Atom>);
//         wordCount += 1;
//       } else if (lines.slice(0, 6) === '##### ') { // check for H5 occurences
//         readingElements.push(<H3Atom key={key}>{lines.slice(6)}</H3Atom>);
//         wordCount += 1;
//       } else {
//         const components = transformInlines(lines);
//         const lineBreaks: any = [
//           // <br key={`${wordCount} br1`} />,
//           // <br key={`${wordCount} br2`} />,
//           // <br key={`${wordCount} br2`} />,
//         ];
//         readingElements.push(<div className="flex flex-wrap" key={`${wordCount} line`}>{[...components, ...lineBreaks]}</div>);
//       }
//     });
  
//     return (
//       <div className={props.className} style={props.style}>
//         {readingElements}
//       </div>
//     );
//   };  
