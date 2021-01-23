import React, { memo, useCallback, useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import './CalendarTimeSelect.scss'
import { CalendarTimeSelectOption } from './CalendarTimeSelectOption'

const CLASS_NAME = 'CalendarTimeSelect'
const cn = classNames

type PropsType = {
  options: Array<any>
  value: number
  onClick: (params: number) => void
}

export const CalendarTimeSelect = ({ options, value, onClick }: PropsType) => {
  const refLink = useRef(null)

  return (
    <div className={cn(`${CLASS_NAME}`)}>
      {options.map(({ id, label }: any, index) => (
        <CalendarTimeSelectOption
          key={id}
          id={id}
          index={index}
          isSelected={Boolean(value === id)}
          label={label}
          onClick={onClick}
          refLink={refLink}
        />
      ))}
    </div>
  )
}
