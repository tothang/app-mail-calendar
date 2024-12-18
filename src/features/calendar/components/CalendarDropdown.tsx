import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function CalendarDropdown() {
  return (
    <Menu>
      <MenuButton className="inline-flex items-center w-36 border-gray-400 font-normal gap-2 rounded-[8px] bg-white py-1.5 px-3 border text-sm/6 text-black focus:outline-none ring-[5px] ring-transparent transition-colors data-[hover]:ring-gray-100 data-[open]:ring-gray-100 data-[focus]:outline-1 data-[focus]:outline-white">
        My Calendar
        <ChevronDownIcon className="size-5" strokeWidth={1.67} />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="py-1 mt-1 bg-white border rounded-lg min-w-36 border-border-100"
      >
        <MenuItem>
          <div className="flex items-center gap-2 px-3 py-2 text-black transition-colors cursor-pointer text-sm/6 hover:bg-gray-100">
            Select Country
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex items-center gap-2 px-3 py-2 text-black transition-colors cursor-pointer text-sm/6 hover:bg-gray-100">
            Edit Events
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
