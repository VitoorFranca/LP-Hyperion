import * as React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./style"
import ValidButton from "../ValidButton";

type Props = {
    matchesMd: boolean;
};

const Details = ({ matchesMd }: Props) => {
    const classes = useStyles({ matchesMd });

    return (
        <Box className={classes.details}>
            
            <Typography variant="subtitle1" component="span">Agência de Marketing Digital</Typography>
            <Typography variant="h2">Uma parceria de projetos incríveis</Typography>
            <Typography variant="h2">Uma agência de marketing digital do tamanho da sua empresa.</Typography>
            <Typography>Somos uma <strong>agência de marketing digital</strong> e publicidade que trabalha com soluções e estratégias para conectar sua marca com o consumidor de forma humanizada, proporcionando novas oportunidades de negócio e potencializando suas vendas.</Typography>

            <ValidButton href="#contact">Solicitar Orçamento</ValidButton>
        </Box>
    );
};

export default Details;