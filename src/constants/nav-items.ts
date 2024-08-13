import { ROUTES } from '@/constants/routes'

export const NAV_ITEMS = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Services', href: ROUTES.SERVICES },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Contact', href: ROUTES.CONTACT },
] as const

export type TNavItem = (typeof NAV_ITEMS)[number]
