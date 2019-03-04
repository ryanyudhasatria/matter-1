import * as React from 'react';
import { cx, css } from 'emotion';

import {
    ButtonAtom,
    CardAtom,
    TextAtom,
    IconAtom,
} from '../../atoms';

//@ts-ignore
import COLORS from '../../constants/colors';

interface item {
  label?:string
  handleClick?: any
  component?: any
}

interface IProps {
  className?: any
  'data-test'?: any
  type?: string
  children: any
  label?:string
  items?:item[]
}

class DropdownMenuMolecule extends React.PureComponent<IProps, any> {
  state = {
    isExpanded: false,
  }
  dropdownMenuWrapper: any;

  componentWillMount() {
    document.addEventListener('mousedown', this.handlePageClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handlePageClick);
  }

  handlePageClick = (e: any) => {
    if (this.dropdownMenuWrapper) {
      if (this.dropdownMenuWrapper.contains(e.target)) {
        this.setState({ isExpanded: !this.state.isExpanded });
        return;
      }
      this.setState({ isExpanded: false });
    }
  }

  render() {   
    const { isExpanded } = this.state;
    const {
        items = [],
        label
    } = this.props;

    return (
      <div ref={(dropdownMenuWrapper) => { this.dropdownMenuWrapper = dropdownMenuWrapper; }}
      className={cx('relative dib', this.props.className)}
      >
          <ButtonAtom
            type={isExpanded ? 'SMALL_PRIMARY' : 'SMALL_GREY'}
            onClick={() => {}}
            className="outline-0"
            data-test={this.props['data-test']}
          >
              <TextAtom>{label}</TextAtom>
              <IconAtom name="angle-down" className="ml2" />
          </ButtonAtom>
          <CardAtom className={
              cx('absolute flex flex-column top-0 right-0', 
              css`
                max-height: ${isExpanded ? 1000 : 0}px;
                opacity: ${isExpanded ? 1 : 0};
                top: ${isExpanded ? 38 : 30}px;
                overflow: hidden;
                transition: max-height 0.2s linear, opacity 0.2s linear, top 0.2s linear;
                z-index: 999;
              `
          )}
          >
           {items.map((item: any, idx: any) => {
            if (item.component) {
              return (
                <div
                  key={idx}
                  id={`dropdownmenu-${idx}`}
                  role="button"
                  tabIndex={idx}
                  className={cx('w-100 pointer pv3 ph3-ns ph2 outline-0', css`
                    display: ${isExpanded ? 'flex' : 'flex'};
                    width: auto;
                    min-width: 150px;
                    transition: 0.2s;
                    :hover {
                      background: #F5F7FA;
                      transition: 0.2s;
                    }
                  `)}
                  data-test={`${this.props['data-test']}-${idx}`}
                >
                  {item.component()}
                </div>
              );
            }

            return (
              <div
                key={idx}
                id={`dropdownmenu-${idx}`}
                role="button"
                tabIndex={idx}
                onKeyPress={item.handleClick}
                onClick={item.handleClick}
                className={cx('w-100 pointer pv3 ph3-ns ph2 outline-0', css`
                  display: ${isExpanded ? 'flex' : 'flex'};
                  width: auto;
                  min-width: 150px;
                  transition: 0.2s;
                  :hover {
                    background: #F5F7FA;
                    transition: 0.2s;
                  }
                `)}
                data-test={`${this.props['data-test']}-${idx}`}
              >
                <TextAtom size="S" className={cx('', css`white-space: pre;`)}>{item.label}</TextAtom>
              </div>
            );
          })}
          </CardAtom>
      </div>
    );
  }
}

export { DropdownMenuMolecule };
