import React from 'react'
import classNames from 'classnames/bind'
import './CalendarTimeSelect.scss'

const CLASS_NAME = 'CalendarTimeSelect'
const cn = classNames

type PropsType = {
  options: Array<any>
  value: number
  onChange: (params: number) => void
}

export const CalendarTimeSelect = ({ options, value, onChange }: PropsType) => (
  <div className={cn(`${CLASS_NAME}`)}>
    {options.map(({ id, label }: any) => (
      <div
        key={id}
        className={cn(`${CLASS_NAME}__item`, {
          [`${CLASS_NAME}__item--selected`]: value === id
        })}
        id={id}
      >
        {label}
      </div>
    ))}
  </div>
)
