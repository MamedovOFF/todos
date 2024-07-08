import style from './style.module.scss'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: () => void
  dataTestId: string
}

function Checkbox({ label, checked, onChange, dataTestId }: CheckboxProps) {
  return (
    <label className={style.container}>
      <input
        name={label}
        className={style.input}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        data-testid={dataTestId}
      />
      <span className={style.checkmark}></span>
      <span className={style.text}>{label}</span>
    </label>
  )
}

export default Checkbox
