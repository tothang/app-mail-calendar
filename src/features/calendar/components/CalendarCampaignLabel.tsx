import Portal from '@/components/Portal'
import { useRef, useState } from 'react'
import type { CalendarCampaign } from '../types'

interface Props {
  campaign: CalendarCampaign
}

export default function CalendarCampaignLabel({ campaign }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <div
        ref={ref}
        className="flex items-center cursor-default justify-center w-full px-0.5 py-1 md:py-2 text-xs text-[#101828] rounded-md bg-warning-100 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchEnd={() => setIsHovered(!isHovered)}
      >
        <p className="text-[9px] text-nowrap md:text-xs text-left md:text-center w-full truncate">{campaign.title}</p>
        {isHovered && !!ref.current && (
          <Portal anchor={ref.current}>
            <div
              className="fixed z-10 max-w-sm pt-2"
              style={{
                top: ref.current.getBoundingClientRect().bottom - 4,
                left: ref.current.getBoundingClientRect().left
              }}
            >
              <div className="bg-white text-xs text-gray-900 border rounded-lg border-[#D0D5DD] p-[10px]">
                {campaign.ideas.map((idea) => (
                  <div
                    key={idea.id}
                    className="flex items-center gap-2 px-4 py-1 bg-white cursor-pointer hover:bg-gray-100"
                  >
                    {idea.content}
                  </div>
                ))}
              </div>
            </div>
          </Portal>
        )}
      </div>
    </>
  )
}
