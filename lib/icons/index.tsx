import MuiAbc from '@mui/icons-material/Abc';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {SvgIcon} from '@mui/material';
import {SvgIconComponent} from "@mui/icons-material";
import {ComponentProps} from "react";


const Abc = (props: ComponentProps<SvgIconComponent>) => {
  return <MuiAbc {...props}></MuiAbc>
}


export {AccountCircle, Abc, SvgIcon};