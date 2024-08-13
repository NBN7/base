import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ROUTES } from '@/constants'
import { Bolt, Gauge, Shield } from 'lucide-react'
import { Container } from '@/components/container'

export default function LandingPage() {
  return (
    <div className="min-h-[calc(100dvh-121px)] flex-1">
      <main className="flex-1">
        <Container className="border-b">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Revolutionize Your Business with Our Innovative Solutions
                </h1>
                <p className="max-w-[600px] text-zinc-500 md:text-xl">
                  Unlock new levels of efficiency, productivity, and growth with
                  our cutting-edge products and services.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={ROUTES.SERVICES}>
                  <Button className="px-8">Get Started</Button>
                </Link>
                <Link href={ROUTES.ABOUT}>
                  <Button variant="outline" className="px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </Container>

        <Container className="border-b bg-zinc-100">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-start space-y-4">
              <Gauge className="size-12" />
              <h3 className="text-xl font-bold">Unparalleled Speed</h3>
              <p className="text-zinc-500">
                Our platform is designed for lightning-fast performance,
                ensuring your business stays ahead of the curve.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <Bolt className="size-12" />
              <h3 className="text-xl font-bold">Powerful Automation</h3>
              <p className="text-zinc-500">
                Streamline your workflows and boost productivity with our
                intelligent automation tools.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <Shield className="size-12" />
              <h3 className="text-xl font-bold">Enterprise-Grade Security</h3>
              <p className="text-zinc-500">
                Rest easy with our robust security measures that protect your
                data and ensure compliance.
              </p>
            </div>
          </div>
        </Container>

        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              priority
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block cursor-default rounded-lg bg-zinc-100 px-3 py-1 text-sm">
                  Scalable Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Grow Your Business with Ease
                </h2>
                <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is designed to scale with your business,
                  providing the flexibility and resources you need to succeed.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#" prefetch={false}>
                  <Button className="px-8">Get Started</Button>
                </Link>
                <Link href="#" prefetch={false}>
                  <Button variant="outline" className="px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}
