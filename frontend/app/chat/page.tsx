"use client";

import { useState } from "react";
import Sidebar from "../components/chat/sideBar";
import ChatArea from "../components/chat/chatArea";
import DocumentSummarization from "../components/chat/documentSummarization";

export default function ChatPage() {
  const [currentView, setCurrentView] = useState<'chat' | 'document-summarization'>('chat');

  return (
    <div className="h-screen bg-[#FAF7F4] flex">
      {/* Only show sidebar in chat view */}
      {currentView === 'chat' && (
        <Sidebar 
          currentView={currentView} 
          onViewChange={setCurrentView} 
        />
      )}
      {currentView === 'chat' ? (
        <ChatArea />
      ) : (
        <DocumentSummarization onBack={() => setCurrentView('chat')} />
      )}
    </div>
  );
}
