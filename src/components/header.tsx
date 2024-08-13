import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { MenuIcon } from 'lucide-react'

export default function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/img/Logo.png" alt="logo" width={100} height={100} />
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
