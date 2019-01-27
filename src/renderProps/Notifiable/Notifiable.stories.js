import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import styles from '../../styles';
import { Notifiable } from './Notifiable';

storiesOf('RenderProps.Notifiable', module)
  .add(
    'Success Notification',
    withInfo({
      styles,
      text: `
      \`\`\`js
        <div>
        <Notifiable>
          {({ showNotification }) => (
            <div className="pa6">
              <button
                onClick={() => showNotification({
                  message: 'Notifikasi Sukses!',
                  type: 'SUCCESS',
                })}
              >
                Show Notification
              </button>
            </div>
          )}
        </Notifiable>
        \`\`\`
      `
    })
    (() => (
      <div>
        <Notifiable>
          {({ showNotification }) => (
            <div className="pa6">
              <button
                onClick={() => showNotification({
                  message: 'Notifikasi Sukses!',
                  type: 'SUCCESS',
                })}
              >
                Show Notification
              </button>
            </div>
          )}
        </Notifiable>
      </div>
  )))
  .add(
    'FAILURE Notification',
    withInfo({
      styles,
      text: `
      \`\`\`js
        <div>
        <Notifiable>
          {({ showNotification }) => (
            <div className="pa6">
              <button
                onClick={() => showNotification({
                  message: 'Notifikasi Gagal!',
                  type: 'FAILURE',
                })}
              >
                Show Notification
              </button>
            </div>
          )}
        </Notifiable>
        \`\`\`
      `
    })
    (() => (
      <div>
        <Notifiable>
          {({ showNotification }) => (
            <div className="pa6">
              <button
                onClick={() => showNotification({
                  message: 'Notifikasi Gagal!',
                  type: 'FAILURE',
                })}
              >
                Show Notification
              </button>
            </div>
          )}
        </Notifiable>
      </div>
  )));
