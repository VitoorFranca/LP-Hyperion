import * as React from "react";
import { Props as CardProps } from "../Card"
import useStyles from "../../style" 
import { IconButton } from "@mui/material";
import icons from "../../utils/icons.data"

type Props = {
    type: CardProps["type"];
};

const Icon = ({ type }: Props) => {
    const classes = useStyles();
    const Icon = icons[type]

    return (
        <IconButton className={classes.icon}>
            <Icon />
        </IconButton>
    );
};

export default Icon;