/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import MessageForm from './MessageForm';
import MessageOutCome from './MessageOutCome';
import MessageInCome from './MessageInCome';

function Message({ message, lastMessage, isMyMessage, receipts }) {
  const classMessage = isMyMessage ? 'message-out' : 'message-in';

  return (
    <>
      <div className={`message-block ${classMessage}`}>
        {isMyMessage ? (
          <MessageOutCome message={message} isMyMessage={isMyMessage} />
        ) : (
          <MessageInCome message={message} lastMessage={lastMessage} />
        )}
      </div>
      {receipts && receipts(message, isMyMessage)}
    </>
  );
}

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  const keys = Object.keys(messages);

  // console.log(chat, userName, messages);
  const renderReceipts = (message, isOutcomeMessage) => {
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className={`read-receipts ${
              isOutcomeMessage ? 'justify-end' : 'justify-start'
            }`}
          >
            <img
              src={person?.person?.avatar}
              alt="avatar"
              width={48}
              height={48}
            />
          </div>
        )
    );
  };

  const renderMessages = () =>
    keys.map((key, index) => {
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === messages[key].sender.username;

      return (
        <Message
          key={`msg_${key}`}
          message={messages[key]}
          lastMessage={messages[lastMessageKey]}
          isMyMessage={isMyMessage}
          receipts={renderReceipts}
        />
      );
    });

  if (!chat)
    return (
      <div className="chat-loading">
        <LoadingOutlined className="chat-loading-icon" />
      </div>
    );

  return (
    <>
      <div className="chat-feed">
        {/* <div className="chat-title-container">
          <div className="chat-title">{chat.title}</div>
          <div className="chat-subtitle">
            {chat.people.map(person => `${person.person.first_name}; `)}
          </div>
        </div> */}
        {renderMessages()}
        <div style={{ height: '100px' }} />
      </div>
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </>
  );
}

export default ChatFeed;
