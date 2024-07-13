import MuiButton, {ButtonProps} from "@mui/material/Button";

const Button = ({ children, ...rest }: ButtonProps) => {
  return <MuiButton {...rest}>{children}</MuiButton>
}

Button.displayName = 'Button'

export default Button