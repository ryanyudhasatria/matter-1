import * as React from 'react';
import { cx, css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';

import { 
    CardAtom,
} from '../../atoms';



class WidgetCardMolecule extends React.PureComponent<any, any> {

    state = {};
  
    render() {
      
      const { 
        HeadingComponent = () => {},
        ContentComponent = () => {},       
       } = this.props;

      return (
        <CardAtom
          type="DEFAULT"
          className={cx('', css``)}
        >
          <article className={cx('center mw5 mw6-ns hidden', css``)}>
          {
              (typeof HeadingComponent === 'string' || HeadingComponent instanceof String)

              ? (
                  <h1 className={cx('f4 mv0 pv2 ph3', css``)}>{HeadingComponent}</h1>
              )
              : (
                 <HeadingComponent />
              )
          }
              
          
              <hr className={cx('ma3', css`border: 0.5px solid ${COLORS.BLACK.LIGHT}; margin-bottom: 0;`)}/>
                  
              <div className={cx('pa3', css``)}>       
              {
                   (typeof ContentComponent === 'string' || ContentComponent instanceof String) 

                   ? (
                        <p className={cx('f6 f5-ns lh-copy measure mv0', css``)}>
                            {ContentComponent}
                        </p>
                   )
                   :
                   (
                        <ContentComponent />
                   )
              }        
                  
              </div>                   
          </article>   
        </CardAtom>
      );
    }
  }

export { WidgetCardMolecule };
