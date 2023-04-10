import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppBar from './components/v1/AppBar';
import Footer from './components/v1/Footer';
import ScrollTop from './components/v1/ScrollTop';
import WhatsAppGroup from './components/v1/WhatsAppGroup';
import { defaultTheme } from './themes';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* <React.StrictMode> */}
    <ThemeProvider theme={defaultTheme} >
        <CssBaseline enableColorScheme />
        <AppBar />
        <App />
        <ScrollTop />
        <WhatsAppGroup />
        <Footer />
    </ThemeProvider>
    {/* </React.StrictMode> */}
  </>
);