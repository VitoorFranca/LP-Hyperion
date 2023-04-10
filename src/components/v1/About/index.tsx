

import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import makeStyles from './style'
import Details from './Details';
import Visual from './Visual';

export default function About () {

    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const classes = makeStyles({ matchesMd });
    
    return (
        <Box className={classes.root1} id="about">
            <Details matchesMd={matchesMd}  />

            <Visual matchesMd={matchesMd} />
        </Box>
    )
};