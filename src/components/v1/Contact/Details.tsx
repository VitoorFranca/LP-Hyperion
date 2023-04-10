import * as React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./style"

type Props = {};

const Details = ({ }: Props) => {
    const classes = useStyles({});

    return (
        <Box className={classes.details}>
            
            <Typography variant="h3">PEÇA JÁ SEU ORÇAMENTO!</Typography>
            <Typography>Pronto para fazer sua empresa decolar? Peça uma cotação.</Typography>

        </Box>
    );
};

export default Details;