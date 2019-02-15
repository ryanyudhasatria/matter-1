import * as React from 'react';
import { css, cx } from 'emotion';

import { LoaderMolecule } from '../../molecules';
import { TextAtom } from '../../atoms';

interface IProps {
    message?: string,
    sub?: string,
}

class LoadingPagelets extends React.PureComponent<IProps, any>{
    render(){
        const {
            message = '',
            sub = ''
        } = this.props;
        return (
            <div className={cx('w-100 flex flex-column align-center justify-center', css`height: 90vh`)}>
                <LoaderMolecule className="self-center mb4" />
                <TextAtom size="L" className={cx('fw6 self-center')}>{message}</TextAtom>
                <TextAtom size="M" className={cx('self-center')}>{sub}</TextAtom>
            </div>
        )
    }
}

export { LoadingPagelets };
