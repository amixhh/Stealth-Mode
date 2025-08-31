'use client'

import { Plus, MessageSquare, LogOut, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scrollarea";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

interface SidebarProps {
  currentView: 'chat' | 'document-summarization';
  onViewChange: (view: 'chat' | 'document-summarization') => void;
}

const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  const { user } = useUser();
  
  const chatHistory = [
    "AI overview",
    "Cursor shortcut issue", 
    "AI overview",
    "Clerk integration setup",
    "Chat app design",
    "Logo design request",
    "Login and signup buttons",
    "Shiver's SDE Sheet",
    "Cloning websites with Lovable",
    "AI overview",
    "Cursor shortcut issue", 
    "AI overview",
    "Clerk integration setup",
    "Chat app design",
    "Logo design request",
    "Login and signup buttons",
    "Shiver's SDE Sheet",
    "Cloning websites with Lovable",
  ];

  return (
    <div className="w-64 bg-sidebar-background border-r border-border flex flex-col h-full">
      {/* Header */}
      <div className="p-3 border-b border-border">
        <Button 
          className="w-full justify-start border border-border text-foreground bg-background hover:bg-[#EFEAE4] transition-colors duration-150"
          onClick={() => onViewChange('chat')}
        >
          <Plus className="h-4 w-4 mr-2" />
          New chat
        </Button>
      </div>

      {/* Summarization Option */}
      <div className="p-3 border-b border-border">
        <Button 
          className={`w-full justify-start border border-border text-foreground transition-colors duration-150 ${
            currentView === 'document-summarization' 
              ? 'bg-[#EFEAE4]' 
              : 'bg-background hover:bg-[#EFEAE4]'
          }`}
          onClick={() => onViewChange('document-summarization')}
        >
          <FileText className="h-4 w-4 mr-2" />
          Document Summarization
        </Button>
      </div>

      {/* Chat History - Only show when in chat view */}
      {currentView === 'chat' && (
        <ScrollArea className="flex-1 px-3">
          <div className="py-2">
            <div className="mb-4">
              <h3 className="text-xs font-medium text-foreground mb-2 px-2">Chats</h3>
              <div className="space-y-1">
                {chatHistory.map((chat, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-2 rounded-lg text-sm text-foreground truncate hover:bg-[#EFEAE4] transition-colors duration-150"
                  >
                    {chat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      )}

      {/* Document Summarization Info - Only show when in document summarization view */}
      {currentView === 'document-summarization' && (
        <div className="flex-1 px-3 py-4">
          <div className="text-center">
            <div className="p-3 bg-[#EFEAE4] rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <FileText className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-sm font-medium text-foreground mb-2">Document Summarization</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Upload legal documents to get AI-powered summaries. We support PDF, DOC, DOCX, and TXT files.
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <SignedIn>
        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <UserButton />
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1 pt-5">
              <p className="text-base font-light text-zinc-600 truncate">
                {user?.firstName || user?.emailAddresses[0]?.emailAddress || 'User'}
              </p>
              {user?.firstName && user?.lastName && (
                <p className="text-sm text-muted-foreground truncate">
                  {user.lastName}
                </p>
              )}
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
};

export default Sidebar;