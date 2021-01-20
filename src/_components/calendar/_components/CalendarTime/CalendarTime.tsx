import React, { memo, useCallback, useMemo } from 'react'
import classNames from 'classnames/bind'
import './CalendarTime.scss'
import { CalendarTimeType } from 'components/calendar/types'
import { getTimeOptions } from 'components/calendar/_utils/getTimeOptions'
import { CalendarTimeSelect } from './CalendarTimeSelect'

const CLASS_NAME = 'CalendarTime'
const cn = classNames

type PropsType = {
  minutes: number
  hours: number
  onChange: (params: CalendarTimeType) => void
}

export const CalendarTime = memo(({ minutes, hours, onChange }: PropsType) => {
  const hoursOptions = useMemo(() => getTimeOptions(24), [])
  const minutesOptions = useMemo(() => getTimeOptions(60), [])

  const handleChangeHours = useCallback(
    (selected) => {
      onChange({ minutes, hours: selected })
    },
    [minutes, onChange]
  )

  const handleChangeMinutes = useCallback(
    (selected) => {
      onChange({ hours, minutes: selected })
    },
    [hours, onChange]
  )

  return (
    <div className={cn(`${CLASS_NAME}`)}>
      <CalendarTimeSelect
        onChange={handleChangeHours}
        options={hoursOptions}
        value={hours}
      />
      <CalendarTimeSelect
        onChange={handleChangeMinutes}
        options={minutesOptions}
        value={minutes}
      />
    </div>
  )
})
