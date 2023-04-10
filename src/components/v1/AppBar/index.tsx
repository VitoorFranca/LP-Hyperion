import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import Logo from '../Logo';
import { Typography } from '@mui/material';
;

// const pages = ['Home', 'Serviços', 'Sobre', 'Contato'];
const pages = [
  {
    title: 'Serviços',
    to: '#services'
  },
  {
    title: 'Sobre',
    to: '#about'
  },
  {
    title: 'Contato',
    to: '#contact'
  }
]
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function AppBarComp() {
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrolled = scrollPosition > 89;
  const color = scrolled ? "#0e0e0e" : "#f6f6f6"

  return (
    <AppBar
      position={scrolled ? "fixed" : "static"}
      sx={{
        backgroundColor: scrollPosition ?  "rgba(255, 255, 255, 0.3)" : "#0e0e0e",
        backdropFilter: "blur(20px)",
        boxShadow: scrollPosition ? "rgb(0 0 0 / 10%) 0px 0px 30px 0px" : "none",
        transition: "all 0.3s ease 0s",
        minHeight: 60,
        // transitionDelay: ".5s",
        
      }}>
      <Container maxWidth="xl">
        <Toolbar sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }} >
          <Box
            component="a"
            href="/"
            sx={{
              
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            <Logo height={115 - 100} width={198 - 150} scrolled={scrolled} />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'flex', gap: 16 } }}>
            {pages.map((page) => (
              <Typography
                component="a"
                key={page.title}
                href={page.to}
                // onClick={handleCloseNavMenu}
                color="secondary"
                sx={{
                  my: 2,
                  display: 'block',
                  fontWeight: "bold",
                  fontSize: 16,
                  color,
                  // textDecoration: `underline ${color} 3px`,
                  textDecoration: "none",
                  borderRadius: 0,
                  '&:hover': {
                    textDecoration: `underline #dfc100 3px`,
                  }
                }}
              >
                {page.title}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
