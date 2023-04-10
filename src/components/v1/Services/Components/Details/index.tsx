import * as React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "../../style"
import ValidButton from "../../../ValidButton";

type Props = {};

const Details = ({ }: Props) => {
    const classes = useStyles({});

    return (
        <Box className={classes.details}>
            
            <Typography variant="subtitle1" component="span">Nossos serviços</Typography>
            <Typography variant="h2">O que fazemos</Typography>
            <Typography variant="h2">Trabalhamos com uma linha de criação e estratégia adaptada para atender ao perfil exclusivo de cada cliente.</Typography>
            
            <ValidButton href="#contact">Solicitar Orçamento</ValidButton>
        </Box>
    );
};

export default Details;