import { useRef, useState } from 'react'
import type { CalendarHoliday } from '../types'
import Portal from '@/components/Portal'

interface Props {
  holiday: CalendarHoliday
}

export default function CalendarHolidayLabel({ holiday }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <div
        ref={ref}
        className="flex items-center cursor-default w-full px-0.5 py-1 md:py-2 text-white rounded-md bg-error-main relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchEnd={() => setIsHovered(!isHovered)}
      >
        <p className="text-[9px] text-nowrap md:text-xs text-left md:text-center w-full truncate">{holiday.title}</p>
        {isHovered && !!ref.current && (
          <Portal anchor={ref.current}>
            <div
              className="fixed z-10 px-3 py-2 text-sm -translate-x-1/2 -translate-y-full bg-black rounded-lg"
              style={{
                top: ref.current.getBoundingClientRect().top - 4,
                left: ref.current.getBoundingClientRect().left + ref.current.getBoundingClientRect().width / 2
              }}
            >
              {holiday.countries.join(', ')}
            </div>
          </Portal>
        )}
      </div>
    </>
  )
}
