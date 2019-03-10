import { css, cx } from "emotion";
import * as React from "react";

// @ts-ignore
import COLORS from "../../constants/colors";

import { ButtonAtom, CardAtom, IconAtom, TextAtom } from "../../atoms";

interface IProps {
  className?: any;
  "data-test"?: any;
  type?: string;
  name?: string;
  min?: number;
  max?: number;
  value?: number;
  description?: string;
}

class NumberSliderMolecule extends React.PureComponent<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
      min: this.props.min,
      max: this.props.max,
    };
    this.incrementButton = this.incrementButton.bind(this);
    this.decrementButton = this.decrementButton.bind(this);
  }

  public incrementButton() {
    if (this.state.value < this.state.max) {
      this.setState({
        value: this.state.value + 1,
      });
    }
  }

  public decrementButton() {
    if (this.state.value > this.state.min) {
      this.setState({
        value: this.state.value - 1,
      });
    }
  }

  public render() {
    return (
      <CardAtom type="GREY" className={cx("dib", css``)}>
        <div className={cx("fl w3 tc pv2", css``)}>
          <ButtonAtom
            type={this.props.min === this.state.value ? "GREY" : "SMALL_PRIMARY"}
            onClick={this.decrementButton}
            className={cx(
              "",
              css`
                display: inline-block !important;
                padding: 0.3rem 0.45rem 0.2rem 0.45rem !important;
                border-radius: 100%;
                font-size: 14px;
              `,
            )}
          >
            <TextAtom>
              <IconAtom name="minus" className={cx("fw7", css``)} />
            </TextAtom>
          </ButtonAtom>
        </div>
        <div
          className={cx(
            "fl w3 tc",
            css`
              padding-top: 0.8rem;
            `,
          )}
        >
          <TextAtom>
            {this.state.value} {this.props.description}
          </TextAtom>
        </div>
        <div className={cx("fl w3 tc pv2", css``)}>
          <ButtonAtom
            type={this.props.max === this.state.value ? "GREY" : "SMALL_PRIMARY"}
            onClick={this.incrementButton}
            className={cx(
              "",
              css`
                display: inline-block !important;
                padding: 0.3rem 0.45rem 0.2rem 0.45rem !important;
                border-radius: 100%;
                font-size: 14px;
              `,
            )}
          >
            <TextAtom>
              <IconAtom name="plus" className={cx("fw7", css``)} />
            </TextAtom>
          </ButtonAtom>
        </div>
      </CardAtom>
    );
  }
}

export { NumberSliderMolecule };
