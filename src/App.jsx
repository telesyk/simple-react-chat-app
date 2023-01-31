// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
// import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const chatConfig = {
  ID: 'f120dab3-e5d2-4003-8d2c-bca33906f9ad',
  userPass: '123qwe',
  userName: 'admin',
  chatID: '142693',
  chatAccessKey: 'ca-897542c4-7b5a-4f5a-9a70-6b15a8d31a21',
};

function App() {
  return (
    <div className="page">
      <ChatEngine
        height="100vh"
        projectID={chatConfig.ID}
        userName={chatConfig.userName}
        userSecret={chatConfig.userPass}
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
