import Image from 'next/image'

import { Rocket, Users, Bolt } from 'lucide-react'

import { SkillCard } from '@/components/skill-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Container } from '@/components/container'

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100dvh-121px)] flex-1">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              About Acme Inc
            </h1>
            <p className="max-w-[600px] text-zinc-500 md:text-xl">
              Acme Inc is a leading technology startup that specializes in
              building innovative web applications. Founded in 2018, we are
              passionate about creating products that empower our users and
              drive progress.
            </p>
          </div>
          <Image
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="About"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </Container>

      <Container className="bg-zinc-100">
        <div className="space-y-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet the Founders
              </h2>
              <p className="max-w-[700px] text-zinc-500 md:text-xl">
                Acme Inc was founded by a team of passionate individuals with
                diverse backgrounds and a shared vision for the future of
                technology.
              </p>
            </div>
          </div>
          <div className="grid place-content-center place-items-center sm:grid-cols-2">
            <div className="flex max-w-xs flex-col items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Juan Emilio Rivero</h3>
                <p className="text-sm text-zinc-500">
                  Emi has over 15 years of experience in the tech industry, with
                  a focus on building scalable and user-friendly applications.
                </p>
              </div>
            </div>
            <div className="flex max-w-xs flex-col items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>IB</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Ignacio Biran</h3>
                <p className="text-sm text-zinc-500">
                  Nacho is a seasoned engineer with a passion for cutting-edge
                  technologies and innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="space-y-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Mission and Values
              </h2>
              <p className="max-w-[700px] text-zinc-500 md:text-xl">
                At Acme Inc, we are driven by a mission to empower our users and
                create a better future through technology. Our core values guide
                everything we do, from product development to customer service.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <SkillCard
              Icon={Rocket}
              title="Innovation"
              description="We are constantly exploring new technologies and approaches to
                  create innovative solutions that drive progress."
            />

            <SkillCard
              Icon={Users}
              title="User-Centricity"
              description="Our users are at the heart of everything we do. We prioritize
                  their needs and strive to create products that empower and
                  delight them."
            />

            <SkillCard
              Icon={Bolt}
              title="Agility"
              description="We embrace a culture of continuous improvement, quickly
                  adapting to changing market conditions and user needs."
            />
          </div>
        </div>
      </Container>
    </main>
  )
}
