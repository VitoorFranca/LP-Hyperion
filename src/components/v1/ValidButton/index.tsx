import * as React from "react";
import { Button, ButtonProps } from "@mui/material";
import useStyles from "./style"

export interface Props extends ButtonProps {
    validVariant?: "contained" | "outlined";
};

const ValidButton = ({ children, validVariant, ...other }: Props) => {
    const classes = useStyles();

    return (
        <Button
            {...other}
            className={`${classes.root3} ${other.className} ${classes[validVariant || "contained"]}`}>
            {children}
        </Button>
    );
};

export default ValidButton;