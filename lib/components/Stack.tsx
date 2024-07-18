import MuiStack, {StackProps} from "@mui/material/Stack";

const Stack = ({ children, ...rest }: StackProps) => {
  return <MuiStack {...rest}>{children}</MuiStack>
}

Stack.displayName = 'Stack'

export default Stack