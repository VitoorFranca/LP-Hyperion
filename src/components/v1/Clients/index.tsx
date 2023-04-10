import { Box, Typography } from '@mui/material';
import { SimpleWaveBottom } from '../Svgs';
import makeStyles from './style'

export default function Clients () {

    const classes = makeStyles();

    return (
        <>
            <Box className={classes.container}>
                <Box className={classes.descriptionBox}>
                    <Typography component="h3" variant="h3" className={classes.description}>
                    Oferecemos nossos serviços para empresas que desejam alcançar ou já possuem alto nível de escalabilidade
                    </Typography>

                    <Typography className={classes.subDescription}>
                    Desenvolvemos uma metodologia para aumentar a eficiência na geração de demanda e conversão em vendas para startups, empresas B2B e empresas de serviços.
                    </Typography>
                </Box>
            </Box>
            <SimpleWaveBottom
                // sx={{
                //     marginBottom: {
                //         xs: "-70px",
                //         sm: "-100px",
                //         md: "-180px",
                //     },
                // }}
                bg="#ebf0f9" 
                />
        </>
    )
};