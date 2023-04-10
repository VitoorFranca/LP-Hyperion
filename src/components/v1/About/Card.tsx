import * as React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./style"
import Icon from "./Icon";
import copys from "./utils/copys.data";

export type Props = {
    type: "experience" | "removeFirst" | "forShirt"
};

const Card = ({ type }: Props) => {
    const classes = useStyles({});

    return (
        <Box className={classes.card}>
            <Icon type={type} />

            <Typography className={classes.cardTitle}>
                {copys[type].title}
            </Typography>

        </Box>
    );
};

export default Card;