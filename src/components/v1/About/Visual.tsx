import * as React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./style"
import Card from "./Card";

type Props = {
    matchesMd: boolean;
};

const Visual = ({ matchesMd }: Props) => {
    const classes = useStyles({ matchesMd });

    return (
        <Box
            display="flex"
            sx={{
                flexDirection: {
                    md: "row",
                    sm: "column",
                    xs: "column",
                }
            }} 
            className={classes.visual}>
            
            <Box className={classes.cardsBox}>
                <Card type="experience" />
                <Card type="forShirt" />
                <Card type="removeFirst" />
            </Box>
            <Box className={classes.visualImage}>
                <img className={classes.image} src="/mockup_escritorio.png" alt="Escritorio Hyperion" width={500} height={400} />
            </Box>


        </Box>
    );
};

export default Visual;