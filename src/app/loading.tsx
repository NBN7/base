import { Loader2 } from 'lucide-react'

export default function LoadingPage() {
  return (
    <div className="flex h-[calc(100vh-121px)] w-full items-center justify-center">
      <Loader2 className="size-6 animate-spin" />
    </div>
  )
}
