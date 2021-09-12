import React,{useState} from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
const PasswordToggle = (props) => {
    const vicon=(
        (props.vis ? <VisibilityIcon/> : <VisibilityOffIcon/>)
    );
    return(vicon);
}

export default PasswordToggle
