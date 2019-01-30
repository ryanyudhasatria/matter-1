import * as React from 'react';
// import Select, { components } from 'react-select';
// import { css, cx } from 'emotion';

// import { IconAtom, TextAtom } from '../../atoms';
import { SelectOrganism } from '../../organisms';

// import * as angleDown from './angle-down.png';
// import * as angleDownGray from './angle-down-gray.png';

// @ts-ignore
import COLORS from '../../constants/colors';


class DateOrganism extends React.PureComponent<any, any> {

   render(){
      const {
        value,
        options,
        placeholder,
        label,
        icon,
        className,
      } = this.props;

       return (
            <SelectOrganism 
                type="text"
                label={label}
                placeholder={placeholder}
                icon={icon}
                className={className}
                options={options}
                value={options.filter((opt: any) => opt.value === value)[0]}
                onChange={() => {}}
            />
        )
   }

}

export {DateOrganism}
