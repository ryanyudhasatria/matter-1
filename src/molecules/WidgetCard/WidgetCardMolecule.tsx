import * as React from 'react';
import { cx, css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';

import { 
    CardAtom,
    // TextAtom
} from '../../atoms';



class WidgetCardMolecule extends React.PureComponent<any, any> {

    state = {};
  
    render() {
      
      const { 
          heading = () => {},
          content = () => {},

        //   headingComponent = () => {},        
       } = this.props;

      console.log('data', this.props)
    //   const headingComponent: any = () => {}

      return (
        <CardAtom
          type="DEFAULT"
          className={cx('', css``)}
        >
          <article className={cx('center mw5 mw6-ns hidden', css``)}>
          {
              (typeof heading === 'string' || heading instanceof String)

              ? (
                  <h1 className={cx('f4 mv0 pv2 ph3', css``)}>string {heading}</h1>
              )
              : (
                  <div>
                    not string {heading}       
                               
                  </div>
              )
          }
              
          
              <hr className={cx('ma3', css`border: 0.5px solid ${COLORS.BLACK.LIGHT}; margin-bottom: 0;`)}/>
                  
              <div className={cx('pa3', css``)}>       
              {
                   (typeof content === 'string' || content instanceof String) 

                   ? (
                        <p className={cx('f6 f5-ns lh-copy measure mv0', css``)}>
                            {content}
                        </p>
                   )
                   :
                   (
                        <div>
                            not string {content}                    
                        </div>
                   )
              }        
                  
              </div>                   
          </article>   
        </CardAtom>
      );
    }
  }

export { WidgetCardMolecule };
