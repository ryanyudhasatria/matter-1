import * as React from 'react';
import * as Modal from 'react-modal';
import { css, cx } from 'emotion';

import { ButtonAtom, IconAtom, TextAtom } from '../../atoms';

// @ts-ignore
import COLORS from '../../constants/colors';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

class AppModalDialog extends React.Component<any, any> {
  state = {}

  closeModal = () => {
    this.props.closeConfirmable();
  }

  afterOpenModal: any

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isModalVisible}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.closeConfirmable}
          className={cx('bg-white br3 outline-0 flex flex-column', css`
            position: absolute;
            box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.06);
            top: 50%;
            left: 50%;
            right: auto;
            bottom: auto;
            margin-right: -50%;
            transform: translate(-50%, -50%);
          `)}
          overlayClassName={css`
            position: fixed;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, .2);
            z-index: 998;
          `}
          contentLabel="Confirmation Modal"
        >
          <div className="flex flex-column">
            <div className="flex flex-column ph5-ns ph4 pv4-ns pv3 justify-center align-center items-center">
              <IconAtom name="exclamation-circle" type="LIGHT" className={cx('mv3', css`font-size: 108px; color: ${COLORS.RED.NORMAL}`)} />
              <TextAtom size="XL" className={cx('fw6 mt3', css`color: ${COLORS.BLACK.NORMAL}`)}>Apa kamu Yakin?</TextAtom>
              <TextAtom size="M" className={cx('mt2', css`color: ${COLORS.BLACK.LIGHTER}`)}>{this.props.message}</TextAtom>
            </div>
            <div className={cx('flex flex-row justify-center items-center pv3 ph2 bt', css`border-color: ${COLORS.GREY.NORMAL}`)}>
              <ButtonAtom
                type="DEFAULT_GREY"
                onClick={this.props.cancel}
                className="ph5 mh1"
                data-test="confirmable-cancel"
              >
                Batalkan
              </ButtonAtom>
              <ButtonAtom
                type="DEFAULT_CTA"
                onClick={this.props.confirm}
                className="ph5 mh1"
                data-test="confirmable-confirm"
              >
                OK
              </ButtonAtom>
            </div>
          </div>

        </Modal>
      </div>
    );
  }
}

interface IProps {
  children: any
}

class Confirmable extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isVisible: false,
      message: props.confirmationMessage || null,
      confirmableAction: props.confirmableAction || null,
      confirmableResponse: null,
    };
  }

  setConfirmation = (confirmationMessage: String, confirmableAction: any) => {
    this.setState({
      isVisible: true,
      message: confirmationMessage,
      confirmableAction,
      confirmableResponse: {
        isIdle: true,
        isConfirmed: false,
      },
    });
  }

  showConfirmation = () => {
    this.setState({
      isVisible: true,
      confirmableResponse: {
        isIdle: true,
        isConfirmed: false,
      },
    });
  }

  cancel = () => {
    this.setState({
      isVisible: false,
      confirmableResponse: {
        isIdle: true,
        isConfirmed: false,
      },
    });
  }

  confirm = () => {
    if (this.state.confirmableAction) {
      this.state.confirmableAction();
    }
    this.setState({
      isVisible: false,
      confirmableResponse: {
        isIdle: false,
        isConfirmed: true,
      },
    });
  }

  closeConfirmable = () => {
    this.setState({ isVisible: false });
  }

  render() {
    return [
      <AppModalDialog
        key="confirmable-component-modal"
        isModalVisible={this.state.isVisible}
        closeConfirmable={this.closeConfirmable}
        message={this.state.message}
        cancel={this.cancel}
        confirm={this.confirm}
      />,
      <div key="confirmable-component-children">
        {this.props.children({
          confirm: this.setConfirmation,
          confirmableResponse: this.state.confirmableResponse, // will be deprecated
          showConfirmation: this.showConfirmation,
        })}
      </div>,
    ];
  }
}

export { Confirmable };
