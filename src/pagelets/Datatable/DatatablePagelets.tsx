import * as React from 'react';
// import { css, cx } from 'emotion';
import * as DataTable from 'react-data-table-component';

interface IProps {  
  className?: string; 
  data?: string;
  columns?: string;
  title?: string;
}

class DatatablePagelets extends React.PureComponent<IProps, any> {
    render() {
        const { data = [], columns = [], title = '', className = ''} = this.props;
        return (
            <DataTable     
                className={className}          
                title={title}                
                data={data}
                columns={columns}
                highlightOnHover={true}
            />
        );
    }
}

export { DatatablePagelets };
