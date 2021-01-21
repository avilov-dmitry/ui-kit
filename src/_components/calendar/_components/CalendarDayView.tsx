import React, { FC, SyntheticEvent, useCallback } from 'react'
import classNames from 'classnames/bind'
import { Locale } from '../locale'
import '../Calendar.scss'

const cn = classNames
const CLASS_NAME = 'Calendar'

type PropsType = {
  day: Date
  disabled: boolean
  onClick: any
  index: number
  length: number
  value: Date
}

export const CalendarDayView = ({
  day,
  disabled,
  onClick,
  index,
  length,
  value
}: PropsType) => {
  const now = new Date()
  now.setHours(0, 0, 0, 0)

  const handleSelect = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>) => {
      onClick({ event, value: event.currentTarget.value })
    },
    [onClick]
  )

  return (
    <button
      className={cn(`${CLASS_NAME}__days-day`, {
        [`${CLASS_NAME}__days-day-now`]: day.getTime() === now.getTime(),
        [`${CLASS_NAME}__days-day-select`]: Locale(value) === Locale(day),
        [`${CLASS_NAME}__days-day--firstup`]:
          index === 0 ||
          (day.getDate() >= 2 && day.getDate() < 8 && day.getDay() === 1),
        [`${CLASS_NAME}__days-day--lastup`]: day.getDay() === 0 && index < 7,
        [`${CLASS_NAME}__days-day--lastdown`]:
          day.getDate() === length ||
          (day.getDate() > 24 && day.getDay() === 0),
        [`${CLASS_NAME}__days-day--firstdown`]:
          (day.getDate() === length && day.getDay() === 1) ||
          (day.getDate() > 24 && day.getDay() === 1)
      })}
      disabled={disabled}
      onClick={handleSelect}
      type="button"
      value={`${day}`}
    >
      {day.getDate()}
    </button>
  )
}
