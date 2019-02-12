import * as React from 'react';
import { css, cx } from 'emotion';

import { IconAtom, TextAtom } from '../../atoms';

// @ts-ignore
import COLORS from '../../constants/colors';

class InputOrganism extends React.PureComponent<any, any> {
  private input: HTMLInputElement | HTMLTextAreaElement | null;

  state = {
    isFocus: false,
    isActive: !!this.props.value
  };

  onFocus = () => {
    this.setState({ isFocus: true });
    if (this.input) {
      this.input.focus();
    }
  };

  onBlur = () => {
    this.setState({ isFocus: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  onScroll = () => {
    if (this.input) {
      window.scrollTo({
        top: this.input.offsetTop - 200,
        behavior: 'smooth'
      });
    }
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.props.onChange(e);
    this.setState({ isActive: !!e.target.value });
  };

  render() {
    const { isFocus, isActive } = this.state;
    const {
      value,
      error,
      name,
      placeholder,
      label,
      icon,
      className,
      type = 'text',
      disabled,
      height,
      required,
      onKeyUp = () => {}
    } = this.props;

    return (
      <div
        className={cx(
          'flex flex-column justify-center align-center',
          className
        )}
      >
        <div
          role="button"
          onClick={this.onFocus}
          tabIndex={0}
          onKeyPress={this.onFocus}
          onFocus={this.onFocus}
          className={cx(
            'w-100 ph3 pv1 br3 flex flex-row align-start outline-0',
            css`
              background: ${COLORS.WHITE.NORMAL};
              cursor: ${disabled ? 'not-allowed' : 'pointer'};
              border: 1px solid
                ${error
                  ? '#EB5757'
                  : isFocus && !disabled
                  ? '#645AFF'
                  : '#E8EDF2'};
              transition: all 0.5s ease;
              height: ${type === 'textarea' ? height || 'auto' : '48px'};
              @media screen and (min-width: 30em) {
                height: ${type === 'textarea' ? height || 'auto' : '56px'};
              }
            `
          )}
        >
          {icon && (
            <IconAtom
              name={icon}
              className={cx(
                'self-center',
                css`
                  transition: 0.2s;
                  color: ${COLORS.BLACK.LIGHT};
                `
              )}
            />
          )}
          <div className="w-100 ml2 flex flex-column justify-start align-start">
            <TextAtom
              size={isFocus || isActive ? 'XS' : 'M'}
              className={cx(
                'bg-white ph2 self-start',
                css`
                  transition: all 0.4s ease;
                  color: ${error
                    ? '#EB5757'
                    : isFocus && !disabled
                    ? '#645AFF'
                    : '#8393A3'};
                  transform: translateY(${isFocus || isActive ? -12 : 12}px);
                  @media screen and (min-width: 30em) {
                    transform: translateY(${isFocus || isActive ? -13 : 13}px);
                  }
                `
              )}
            >
              {required && (isFocus || isActive)
                ? label
                : !required
                ? label
                : `* ${label}`}
            </TextAtom>
            {type !== 'textarea' && (
              <input
                ref={input => {
                  this.input = input;
                }}
                type={type}
                className={cx(
                  'w-100 ph2 outline-0 bn',
                  css`
                    font-size: 0.8rem;
                    cursor: ${disabled ? 'not-allowed' : 'auto'};
                    background: transparent;
                    opacity: ${isFocus || isActive ? '1' : '0'};
                    height: ${height || 'auto'};
                    transition: all 0.4s ease;
                    margin-top: -0.5px;
                    transform: translateY(${isFocus || isActive ? -2 : 0}px);
                    @media screen and (min-width: 30em) {
                      font-size: 1rem;
                      margin: 0;
                    }
                  `
                )}
                onKeyUp={onKeyUp}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={this.handleChange}
                onBlur={this.onBlur}
                disabled={disabled}
                data-test={this.props['data-test']}
              />
            )}
            {type === 'textarea' && (
              <textarea
                ref={input => {
                  this.input = input;
                }}
                className={cx(
                  'w-100 ph2 outline-0 bn',
                  css`
                    font-size: 0.8rem;
                    cursor: ${disabled ? 'not-allowed' : 'auto'};
                    background: transparent;
                    opacity: ${isFocus || isActive ? '1' : '0'};
                    height: ${height || 'auto'};
                    transition: all 0.4s ease;
                    margin-top: -0.5px;
                    transform: translateY(${isFocus || isActive ? -2 : 0}px);
                    @media screen and (min-width: 30em) {
                      font-size: 1rem;
                      margin: 0;
                    }
                  `
                )}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={this.handleChange}
                onKeyUp={onKeyUp}
                onBlur={this.onBlur}
                disabled={disabled}
                data-test={this.props['data-test']}
              />
            )}
          </div>
          {error && (
            <IconAtom
              name="exclamation-circle"
              className={cx(
                'f3 self-center',
                css`
                  color: ${COLORS.RED.NORMAL};
                `
              )}
            />
          )}
        </div>
        <div className="mt2 mb2">
          {error && (
            <TextAtom
              size="S"
              className={cx(
                'self-center',
                css`
                  color: #eb5757;                  
                `
              )}
            >
              {error}
            </TextAtom>
          )}
        </div>
      </div>
    );
  }
}

export { InputOrganism };
