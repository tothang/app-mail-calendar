import { PencilSquareIcon } from '@heroicons/react/24/outline'
import type { CalendarCampaign } from '../types'

interface Props {
  campaign: CalendarCampaign
}

export default function CalendarDraftCampaignLabel({ campaign }: Props) {
  return (
    <div className="flex items-center cursor-default justify-start px-0.5 md:px-2 py-1 md:py-2 w-full font-normal text-xs text-[#101828] rounded-md bg-gray-200 hover:bg-gray-300 relative gap-1">
      <PencilSquareIcon className="size-3" strokeWidth={2} />

      <p className="text-[9px] text-nowrap md:text-xs text-left w-full truncate">{campaign.title}</p>
    </div>
  )
}
