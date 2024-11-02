'use client'

import { useEffect } from 'react'

import { useSelectedUser } from '@/store/use-selected-user'

import { ChatBottomBar } from './chat-bottom-bar'
import { ChatTopBar } from './chat-top-bar'
import { MessageList } from './message-list'

export const MessageContainer = () => {
  const { setSelectedUser } = useSelectedUser()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedUser(null)
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [setSelectedUser])

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopBar />
      <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
        <MessageList />
        <ChatBottomBar />
      </div>
    </div>
  )
}
