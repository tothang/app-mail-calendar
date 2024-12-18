import Portal from '@/components/Portal'
import { AppButton } from '@/components/ui/app-button'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useState, useRef, useCallback, useEffect } from 'react'

export default function CalendarBtnAddCampaign() {
  const [isOpened, setIsOpened] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleToggle = useCallback(() => {
    setIsOpened((prev) => !prev)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpened(false)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClose])

  return (
    <>
      <AppButton
        ref={ref}
        variant="outline"
        size="icon"
        className="bg-white border-gray-300 size-[30px] hover:bg-white hover:border-black"
        onClick={handleToggle}
      >
        <PlusIcon className="size-6" />
      </AppButton>
      {isOpened && !!ref.current && (
        <Portal anchor={ref.current}>
          <div className="fixed inset-0 z-10 cursor-default" onClick={handleClose}>
            <div
              className="fixed bg-white text-xs text-gray-900 border rounded-lg border-[#D0D5DD] py-3 max-w-sm"
              style={{
                top: ref.current.getBoundingClientRect().bottom + 4,
                left: ref.current.getBoundingClientRect().left
              }}
            >
              <span className="p-2 hover:bg-gray-100 cursor-pointer">Create campaign with AI</span>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}
