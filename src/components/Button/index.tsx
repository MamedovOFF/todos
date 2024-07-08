import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import style from './style.module.scss'

interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'className'
  > {
  children: string | JSX.Element
  active?: boolean
}

function Button({ active, children, ...props }: ButtonProps) {
  return (
    <button className={`${style.button} ${active && style.active}`} {...props}>
      {children}
    </button>
  )
}

export default Button
