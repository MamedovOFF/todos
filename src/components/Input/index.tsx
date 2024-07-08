import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import style from './style.module.scss'

type InputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'className'
>

function Input({ ...props }: InputProps) {
  return <input className={style.input} {...props} />
}

export default Input
