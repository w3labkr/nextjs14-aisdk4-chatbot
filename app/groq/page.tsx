import * as React from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AppSidebar } from '@/components/app-sidebar'
import { ChatProvider } from '@/context/chat-provider'

export default function GroqPage() {
  return (
    <ChatProvider api="/api/groq">
      <AppSidebar>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="deepseek-r1-distill-llama-70b" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="deepseek-r1-distill-llama-70b">deepseek-r1-distill-llama-70b</SelectItem>
          </SelectContent>
        </Select>
      </AppSidebar>
    </ChatProvider>
  )
}
