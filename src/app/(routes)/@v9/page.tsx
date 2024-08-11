import { Paragraph } from "@/app/components/ui"

import { DatePickerWithDefaults } from "./with-default"
import { DatePickerWithDisabledRange } from "./with-disabled-range"
import { DatePickerWithDropdown } from "./with-dropdown"
import { DatePickerWithPresets } from "./with-presets"
import { DatePickerWithRange } from "./with-range"

export default function Version9DatepickerPage() {
  return (
    <div className="flex flex-col gap-y-8">
      <Paragraph>Version 9</Paragraph>
      <DatePickerWithDefaults />
      <DatePickerWithDropdown />
      <DatePickerWithDisabledRange />
      <DatePickerWithRange />
      <DatePickerWithPresets />
    </div>
  )
}
