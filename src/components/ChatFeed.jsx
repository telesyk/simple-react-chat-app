/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { LoadingOutlined, CheckOutlined } from '@ant-design/icons';
import MessageForm from './MessageForm';
import MessageOutCome from './MessageOutCome';
import MessageInCome from './MessageInCome';

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;
      const classReceiptsAlign = isMyMessage ? 'text-right' : 'text-left';

      return (
        <>
          <div
            key={`msg_${index}`}
            style={{ width: '100%' }}
            className="message-block"
          >
            {isMyMessage ? (
              <MessageOutCome
                key={`msg_${index}`}
                message={message}
                isMyMessage={isMyMessage}
              />
            ) : (
              <MessageInCome
                key={`msg_${index}`}
                message={message}
                lasMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          {lastMessageKey && (
            <div className={`read-receipts ${classReceiptsAlign}`}>
              <CheckOutlined className="read-receipts-icon" />
            </div>
          )}
        </>
      );
    });
  };

  if (!chat)
    return (
      <div className="chat-feed">
        <LoadingOutlined />
      </div>
    );

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map(person => `${person.person.first_name}; `)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}

export default ChatFeed;
