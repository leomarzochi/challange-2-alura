type ButtonType = 'filled' | 'outlined';

interface Props {
  children: string,
  type: ButtonType
}

export const Button = ({children}: Props) => {
  return (
    <button>{children}</button>
  )
}