import { Container } from '@/components/container'
import { SkillCard } from '@/components/skill-card'

import { Laptop, Smartphone, Database, Cloud, Info, Rocket } from 'lucide-react'

export default function ServicesPage() {
  return (
    <main className="min-h-[calc(100dvh-121px)] flex-1">
      <Container className="border-b">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Our Services
          </h1>
          <p className="max-w-[600px] text-zinc-500 md:text-xl">
            We offer a wide range of services to help your business grow and
            succeed.
          </p>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-6">
          <SkillCard
            Icon={Laptop}
            title="Web Development"
            description="We build custom, responsive websites and web applications tailored to your business needs."
          />

          <SkillCard
            Icon={Smartphone}
            title="Mobile Development"
            description="Our team of experts create high-performing web responsive apps for mobile platforms."
          />

          <SkillCard
            Icon={Database}
            title="Database Management"
            description="We design and maintain robust database solutions to power your applications."
          />

          <SkillCard
            Icon={Cloud}
            title="Cloud Services"
            description="Our cloud experts help you leverage the power of the cloud to scale your business."
          />

          <SkillCard
            Icon={Info}
            title="Data Analytics"
            description="We provide data-driven insights to help you make informed business decisions."
          />

          <SkillCard
            Icon={Rocket}
            title="Digital Marketing"
            description="Our digital marketing experts help you reach and engage your target audience."
          />
        </div>
      </Container>
    </main>
  )
}
