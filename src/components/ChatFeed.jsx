/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
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
      const isMyMessage = userName === message.sender.uresname;
      const classReceiptsAlign = isMyMessage ? 'text-left' : 'text-right';

      console.debug(key);

      return (
        <>
          <div key={key} style={{ width: '100%' }} className="message-block">
            {isMyMessage ? (
              <MessageOutCome message={message} />
            ) : (
              <MessageInCome
                message={message}
                lasMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div className={`read-receipts ${classReceiptsAlign}`}>
            read-receipts
          </div>
        </>
      );
    });
  };

  if (!chat) return '...Loading';

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map(person => ` ${person.person.username}`)}
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
