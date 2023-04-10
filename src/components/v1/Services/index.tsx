

import * as React from "react";
import { Box } from "@mui/material";
import useStyles from "./style" 
import { SimpleWaveBottom, SimpleWaveTop } from "../Svgs";
import Card from "./Components/Card";
import ValidCarousel from "./Components/Carousel";
import Details from "./Components/Details";

type Props = {};

const Services = ({ }: Props) => {
    const classes = useStyles();

    return (
        <>
            <SimpleWaveTop id="services" bg="#0e0e0e" style={{padding: 0, margin: 0}} />
                <Box
                    // display="flex"
                    // flexDirection={{ sm: "column", xs: "row", md: "row" }}
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "column",
                            md: "row",
                        }
                    }}
                    className={classes.root2}>
                        <Details />
                        <ValidCarousel >
                            <Card type="SocialMedias" />
                            <Card type="MarketingDigital" />
                            <Card type="VisualIdentity" />
                            <Card type="WebProjects" />
                        </ValidCarousel>
                </Box>
            <SimpleWaveBottom bg="#0e0e0e" />
        </>
    );
};

export default Services;

/*
WebProjects      |       LaptopIcon
MarketingDigital |       CrisisAlertIcon
VisualIdentity   |       CategoryOutlinedIcon
SocialMedias     |       ThumbUpIcon




    import LaptopIcon from '@mui/icons-material/Laptop';
    import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
    import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
    import ThumbUpIcon from '@mui/icons-material/ThumbUp';
*/