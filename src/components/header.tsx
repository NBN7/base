'use client'

import { useMemo } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAV_ITEMS, TNavItem, ROUTES } from '@/constants'

import { Mountain } from 'lucide-react'

export const Header = () => {
  const pathname = usePathname()

  const memoizedNavItems = useMemo(
    () =>
      NAV_ITEMS.map((item: TNavItem) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-sm font-medium text-zinc-500 ${pathname === item.href ? 'text-black' : ''}`}
        >
          {item.label}
        </Link>
      )),
    [pathname]
  )

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
      <nav className="ml-auto flex gap-4 sm:gap-6">{memoizedNavItems}</nav>
    </header>
  )
}
