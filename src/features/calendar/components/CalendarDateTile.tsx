import { cn } from '@/utils'
import dayjs from 'dayjs'
import { useMediaQuery } from 'usehooks-ts'
import CalendarBtnAddCampaign from './CalendarBtnAddCampaign'
import CalendarLabels from './CalendarLabels'

interface Props {
  date: string
  isToday: boolean
  index: number
}

export default function CalendarDateTile({ date, isToday, index }: Props) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div
      className={cn(
        'flex-[0_0_calc(100%/7)] flex min-h-40 flex-col overflow-hidden items-center transition-colors p-0.5 md:p-2 font-medium border-y border-l border-border-100 aspect-square group/date-tile',
        'hover:bg-[#F7F7F8] cursor-pointer',
        index % 7 === 0 && 'border-l-0'
      )}
    >
      <div className="flex items-center justify-center flex-shrink-0 h-7 md:h-10">
        <span
          className={cn(
            'px-[10px] py-[3px] rounded-full bg-transparent text-[#101828] text-sm h-[26px]',
            isToday && 'bg-black text-white'
          )}
        >
          {isMobile ? dayjs(date).format('D') : dayjs(date).format('MMM D')}
        </span>
      </div>

      <div className="flex-shrink-0 w-full py-1 md:py-[15px] space-y-3">
        <CalendarLabels date={date} />
        <div className="flex justify-center transition-opacity opacity-0 group-hover/date-tile:opacity-100">
          <CalendarBtnAddCampaign />
        </div>
      </div>
    </div>
  )
}
