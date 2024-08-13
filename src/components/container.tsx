import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={twMerge('w-full py-12 md:py-24 lg:py-32', className)}
    >
      <div className="container">{children}</div>
    </section>
  )
}
