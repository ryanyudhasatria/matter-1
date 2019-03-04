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

interface IProps {
  className?: any;
  'data-test'?: any;
  type?: string;
  children: any;
  label?:string;
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
          
          </CardAtom>
      </div>
    );
  }
}

export { DropdownMenuMolecule };
