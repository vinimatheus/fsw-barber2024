import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GlassesIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <div>
          <h2 className="text-xl font-semibold">Olá Vinicius</h2>
          <p>Segunda feira, 11 de junho de 2024</p>
        </div>
        <div className="mt-5 flex gap-2">
          <Input placeholder="Faça uma busca" className="w-full" />
          <Button size="lg">
            <GlassesIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/img/Banner.png"
            alt="banner"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
