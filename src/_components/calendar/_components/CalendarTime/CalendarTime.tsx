import React, { memo, useCallback, useEffect, useMemo } from 'react'
import classNames from 'classnames/bind'
import './CalendarTime.scss'
import { CalendarTimeType } from 'components/calendar/types'
import { CalendarTimeSelect } from './CalendarTimeSelect'

const CLASS_NAME = 'CalendarTime'
const cn = classNames

type PropsType = {
  minutes: number
  hours: number
  onChange: (params: CalendarTimeType) => void
}

export const CalendarTime = memo(({ minutes, hours, onChange }: PropsType) => {
  const hoursOptions = useMemo(
    () =>
      new Array(24).fill(0).map((item, index) => ({
        id: index,
        label: index < 10 ? `0${index}` : `${index}`
      })),
    []
  )
  const minutesOptions = useMemo(
    () =>
      new Array(60).fill(0).map((item, index) => ({
        id: index,
        label: index < 10 ? `0${index}` : `${index}`
      })),
    []
  )

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
