// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
// import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const chatConfig = {
  ID: 'f120dab3-e5d2-4003-8d2c-bca33906f9ad',
  userPass: '123qwe',
  userName: 'admin',
  chatID: '143554',
  chatAccessKey: '123qwe!',
};

function App() {
  if (!localStorage.getItem('testChatUsername')) return <LoginForm />;
  return (
    <div className="page">
      <ChatEngine
        height="100vh"
        projectID={chatConfig.ID}
        userName={localStorage.getItem('testChatUsername')}
        userSecret={localStorage.getItem('testChatPassword')}
        renderChatFeed={chatAppState => <ChatFeed {...chatAppState} />}
      />
      {/* <ChatEngineWrapper>
        <ChatSocket
          projectID={chatConfig.ID}
          chatID={chatConfig.chatID}
          chatAccessKey={chatConfig.chatAccessKey}
          senderUsername={chatConfig.userName}
        />

        <ChatFeed activeChat={chatConfig.chatID} />
      </ChatEngineWrapper> */}
    </div>
  );
}

export default App;
