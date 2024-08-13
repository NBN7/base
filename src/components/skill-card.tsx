import { LucideIcon } from 'lucide-react'

interface SkillCardProps {
  Icon: LucideIcon
  title: string
  description: string
}

export const SkillCard = ({ Icon, title, description }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-center rounded-md bg-zinc-100 p-3">
        <Icon className="size-6 text-zinc-500" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-zinc-500">{description}</p>
      </div>
    </div>
  )
}
