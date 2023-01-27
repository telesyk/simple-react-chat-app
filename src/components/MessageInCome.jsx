/* eslint-disable react/prop-types */
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';

function MessageInCome({ lastMessage, message }) {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  console.debug('[message In-come]', message.sender.username);
  // console.debug('[isMyMessage In-come]', isMyMessage);
  // const userNameAbr = message.sender.first_name.

  return (
    <div className="message-row">
      <div className="message-avatar border-gray-800">
        {isFirstMessageByUser && message?.sender?.avatar && (
          <img
            className="message-avatar-image"
            src={message?.sender?.avatar}
            alt="user-avatar"
          />
        )}
        {isFirstMessageByUser && !message?.sender?.avatar && (
          <SmileOutlined className="message-avatar-image" />
        )}
      </div>
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image mr-auto ml-8"
        />
      ) : (
        <div className="message message-in-come">{message.text}</div>
      )}
    </div>
  );
}

export default MessageInCome;
