import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { SOCIALS } from '@/constants/socials'

export default function ContactPage() {
  return (
    <div className="mx-auto min-h-[calc(100dvh-121px)] w-full max-w-6xl px-4 py-12 md:px-6 md:py-20">
      <div className="grid gap-8 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Get in Touch
            </h1>
            <p className="max-w-[600px] text-zinc-500 md:text-xl">
              Have a question or want to work together? Fill out the form below
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" rows={5} />
            </div>
            <Button type="submit" className="w-full px-8 md:w-auto">
              Send Message
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-zinc-500">
              Find us at the office or get in touch through other channels.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-zinc-500">+54 336 4123123</p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Social</h3>
              <div className="flex items-center space-x-4">
                {SOCIALS.map((social) => (
                  <Link
                    href={social.href}
                    className="text-zinc-500 transition-all hover:scale-110"
                    prefetch={false}
                  >
                    <social.Icon className="size-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
