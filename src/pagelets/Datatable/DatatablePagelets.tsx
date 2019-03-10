import { css, cx } from "emotion";
import * as React from "react";
import * as DataTable from "react-data-table-component";

// @ts-ignore
import COLORS from "../../constants/colors";

const tableBase = `
    border-radius: 8px;
    max-width: 1049px;
    border: 2px solid;
`;

const THEME_LIST = {
    themeOne: css`
        ${tableBase}
        background: #EFEDFF;
        border-color: #EFEDFF;
    `,
    themeTwo: [
    (css`
        ${tableBase}
        background: ${COLORS.BLACK.LIGHTEST};
        border-color: ${COLORS.BLACK.NORMAL};
    `),
    // rows: {
    //     height: '64px'
    // },
    ],
};

const defaultTheme = {
    rows: {
      height: "64px",
      spacing: "spacing",
    },
    title: {
        fontWeight: "bold",
        fontSize: "20px",
        fontColor: "#4737FF",
        backgroundColor: "transparent",
    },
    header: {
        fontSize: "18px",
        fontColor: "#342D90",
        backgroundColor: "transparent",
        height: "48px",
    },
    cells: {
        cellPadding: "48px",
    },
    contextMenu: {
        backgroundColor: "#e3f2fd",
        fontSize: "18px",
        fontColor: "rgba(0,0,0,.87)",
        transitionTime: "225ms",
        padding: "10px",
      },
  };

interface IProps {
    className?: string;
    data?: string;
    columns?: string;
    title?: string;
    theme?: string;
    customTheme?: string;
  }

class DatatablePagelets extends React.PureComponent<IProps, any> {
    public render() {
        const {
            data = [],
            columns = [],
            title = "",
            className = "",
            theme = "",
        } = this.props;
        return (
            <DataTable
                className={cx(THEME_LIST[theme], className)}
                title={title}
                data={data}
                columns={columns}
                highlightOnHover={true}
                customTheme={defaultTheme}
            />
        );
    }
}

export { DatatablePagelets };
