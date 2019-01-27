import * as React from 'react';

import { NotificationBannerMolecule } from '../../molecules/NotificationBanner/NotificationBannerMolecule';

const initialState = {
  isNotificationVisible: false,
  message: null,
  type: null,
};

interface IProps {
  children: any
}

class Notifiable extends React.Component<IProps, any> {
  state = { ...initialState }

  componentDidMount() {
    if (localStorage.getItem('isNotificationVisible')) {
      this.setState({
        isNotificationVisible: localStorage.getItem('isNotificationVisible'),
        message: localStorage.getItem('notificationMessage'),
        type: localStorage.getItem('notificationType'),
      });
    }
  }

  showNotification = ({ message, type }: any) => {
    this.setState({
      isNotificationVisible: true,
      message,
      type,
    }); // type: SUCCESS / FAILURE
    localStorage.setItem('isNotificationVisible', 'true');
    localStorage.setItem('notificationMessage', message);
    localStorage.setItem('notificationType', type);

    setTimeout(() => {
      this.setState({
        isNotificationVisible: false,
        message,
        type,
      });
      localStorage.setItem('isNotificationVisible', 'false');
      localStorage.setItem('notificationMessage', message);
      localStorage.setItem('notificationType', type);
    }, 3000);
  }

  closeNotification = () => {
    this.setState({ ...initialState });
    localStorage.removeItem('isNotificationVisible');
    localStorage.removeItem('notificationMessage');
    localStorage.removeItem('notificationType');
  }

  render() {
    const NotificationBannerComponent = () => {
      if (this.state.isNotificationVisible) {
        return (
          <NotificationBannerMolecule
            type={this.state.type}
            onClose={this.closeNotification}
          >
            {this.state.message}
          </NotificationBannerMolecule>
        );
      }

      return null;
    };

    return [
      <NotificationBannerComponent key="notification-wrapper-banner" />,
      <div key="notification-wrapper-child-container">
        {this.props.children({
          isVisible: this.state.isNotificationVisible,
          showNotification: this.showNotification,
        })}
      </div>,
    ];
  }
}

export { Notifiable };
