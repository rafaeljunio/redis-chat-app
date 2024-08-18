'use client'

import { useQuery } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

import { checkAuthStatus } from '@/actions/auth.actions'

const Page = () => {
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['authCheck'],
    queryFn: async () => await checkAuthStatus(),
  })

  if (data?.success) router.push('/')

  return (
    <div className="mt-20 w-full flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader className="size-10 animate-spin text-muted-foreground" />
        <h3 className="text-xl font-bold">Redirecting...</h3>
        <p>Please wait</p>
      </div>
    </div>
  )
}

export default Page
