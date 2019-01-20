import * as React from 'react';
import { cx, css } from 'emotion';
import * as codeIcon from './code.png';
import * as projectIcon from './project.png';
import * as videoIcon from './video.png';
import * as quizIcon from './quiz.png';
import * as readingIcon from './reading.png';

const iconsCourseType = css`
width: 48px;
height: 48px;
border-radius: 100%;  
`;


interface IProps {
    className?: any,
    'data-test'?: any,
    type?: string,
    src: string,
    alt: string, 
}

class CourseTypeAtom extends React.PureComponent<IProps, any>{
    state = {}

    render(){
        const {
            type = '',
            className = '',    
            alt,
        } = this.props;

        let icon = null;

        if (type === 'CODE') {
            icon = codeIcon;
        }

        if (type === 'PROJECT') {
            icon = projectIcon;
        }

        if (type === 'VIDEO') {
            icon = videoIcon;
        }

        if (type === 'QUIZ') {
            icon = quizIcon;
        }

        if (type === 'READING') {
            icon = readingIcon;
        }
         
        return (            
            <img
                src={icon}
                alt={alt}
                data-test={this.props['data-test']}
                className={cx((iconsCourseType), className)}
            />        
        )
    }
}

export { CourseTypeAtom }
