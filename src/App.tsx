import { Box, Paper, Typography, Container } from '@mui/material';
import About from './components/v1/About';
import Clients from './components/v1/Clients';
import Contact from './components/v1/Contact';
import Services from './components/v1/Services';
import ValidButton from './components/v1/ValidButton';
import ValidWhatsAppButton from './components/v1/ValidButton/Variants/WhatsApp';

import styles from "./app.styles";

function App() {
  return (
    < >
      <Container style={styles.container}>
        <Paper sx={styles.paperContainer}>
          <Box>
            <Typography
              id="back-to-top-anchor"
              sx={styles.title}
              color="primary"
              component="h4"
              variant="h4"
            >
              Para marcas <UnderlineText>ambiciosas</UnderlineText> que buscam
              conquistar novos horizontes
            </Typography>

            <Box marginTop={4} display="flex" sx={styles.buttonsBox}>
              <ValidButton sx={styles.button} href="#contact" variant="text">
                Solicite seu orçamento
              </ValidButton>
              <ValidWhatsAppButton
                sx={styles.button}
                validVariant="outlined"
                //@ts-ignore}
                target="_blank"
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER}`}
                rel="noreferrer"
              >
                Solicitar reunião online
              </ValidWhatsAppButton>
            </Box>
          </Box>
        </Paper>

        <Clients />

        <About />

        <Services />

        <Contact />
      </Container>
    </>
  );
}

const UnderlineText = ({ children }: any) => {
  return <Typography sx={{ ...styles.title, ...styles.underlineText}} >{children}</Typography>
}

export default App;
