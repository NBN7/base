'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAV_ITEMS, ROUTES } from '@/constants'

import { Mountain } from 'lucide-react'

export const Header = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center px-4 backdrop-blur-sm lg:px-6">
      <Link
        href={ROUTES.HOME}
        className="flex items-center justify-center transition-all hover:scale-110"
        prefetch={false}
      >
        <Mountain className="size-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`text-sm font-medium text-zinc-500 ${item.href === pathname && 'text-zinc-900'}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
