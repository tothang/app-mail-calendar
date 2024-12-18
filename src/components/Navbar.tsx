import { AppButton } from '@/components/ui/app-button'
import AiEssentials from './icons/AiEssentials'

export default function Navbar() {
  return (
    <nav className="flex-shrink-0 h-12 px-1 bg-white border-b md:p-3 lg:p-5 xl:p-8 md:h-16 border-gray-600/30">
      <div className="flex items-center justify-between h-full mx-auto max-w-screen-2xl">
        <span></span>
        <div>
          <AppButton className="gap-1 font-normal text-white">
            <AiEssentials />
            Create campaign with AI
          </AppButton>
        </div>
      </div>
    </nav>
  )
}
