import { Box, Typography } from '@mui/material';
import makeStyles from './style'

import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const services = [
    'Desenvolvimento Web',
    'Gestão de Redes Sociais',
    'Criação de Publicitária',
    'Link Patrocinado',
    'Otimização de Seo',
    'Comunicação Integrada'
];

export default function Footer () {

    const classes = makeStyles();

    return (
        <Box className={classes.footer}>

            <Box className={classes.phoneAndAddress}>
                <Box className={classes.addressBox}>
                    <PinDropIcon />
                    <Typography className={classes.address}>
                        Santo Antônio de Jesus - BA
                    </Typography>
                    
                </Box>
                <Box className={classes.phoneBox}>
                    <LocalPhoneIcon />
                    <Typography className={classes.phone}>
                        +55 (75) 9807-0561
                    </Typography>

                </Box>
                
            </Box>

            <hr />

            <Box className={classes.about}>
                <Box className={classes.aboutCompany}>
                    <Typography className={classes.aboutTitle}>
                        Hyperion
                    </Typography>
                    <Typography >
                    Somos uma Agência de Marketing digital com estratégias personalizadas de forma inteligente e com resultados eficazes para o seu negócio.
                    </Typography>
                </Box>
                <Box className={classes.aboutServices}>
                    <Typography className={classes.aboutTitle}>Nossos Serviços</Typography>

                    <Box component="ul">
                        {
                            services?.map((service, index) => {
                                return (
                                    <Box component="li" key={index}>
                                        <Typography component="a" href={`https://api.whatsapp.com/send?phone=5571986237773&amp;text=Olá, me chamo [nome], gostaria de saber mais sobre o serviço ${service} para o meu negocio`}>
                                            {service}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }

                    </Box>
                </Box>
                <Box className={classes.aboutSolutions}>
                    <Typography className={classes.aboutTitle}>Soluções Digitais</Typography>

                    <Box component="ul">
                        {
                            services?.map((service, index) => {
                                return (
                                    <Box component="li" key={index}>
                                        <Typography component="a" href={`https://api.whatsapp.com/send?phone=5571986237773&amp;text=Olá, me chamo [nome], gostaria de saber mais sobre a solução ${service} para o meu negocio`}>
                                            {service}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }

                    </Box>
                </Box>
                

            </Box>

            <hr />

            <Box className={classes.footerSecond}>
                <Typography>
                    Hyperion Agência de Marketing Digital © 2023 — Todos os direitos autorais reservados
                </Typography>
            </Box>

        </Box>
    )
};