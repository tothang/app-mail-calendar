import { getDates } from '@/utils'
import { useCalendar } from '../context/CalendarContext'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import CalendarDateTile from './CalendarDateTile'

export default function CalendarDates() {
  const calendarContext = useCalendar()
  const dates = getDates(calendarContext.selectedDate)
  const today = useMemo(() => {
    return dayjs().format('YYYY-MM-DD')
  }, [])

  return (
    <div className="z-10 flex flex-wrap flex-1 grid-cols-7">
      {dates.map((date, index) => {
        const dateStr = dayjs(date).format('YYYY-MM-DD')
        const isToday = dateStr === today
        return <CalendarDateTile key={dateStr} date={dateStr} isToday={isToday} index={index} />
      })}
    </div>
  )
}
