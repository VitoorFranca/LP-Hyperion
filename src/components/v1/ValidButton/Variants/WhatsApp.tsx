import * as React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useStyles from "../style"
import ValidButton, { Props as ValidButtonProps } from "..";

interface Props extends ValidButtonProps {

};

const ValidWhatsAppButton = ({ children, ...other }: Props) => {
    const classes = useStyles();

    return (
        <ValidButton
        className={classes.validWhatsAppButton}
        {...other}
            >
            <WhatsAppIcon className={classes.icon} />
            {children}
        </ValidButton>
    );
};

export default ValidWhatsAppButton;