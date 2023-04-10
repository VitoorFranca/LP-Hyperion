import * as React from "react";
import { Box } from "@mui/material";
import useStyles from "./style" 
import { SimpleWaveBottom, SimpleWaveTop } from "../Svgs";
import Details from "./Details";
import Form from "./Form";

type Props = {};

const Contact = ({ }: Props) => {
    const classes = useStyles({});

    return (
        <>
            <SimpleWaveTop bg="black" style={{padding: 0, margin: 0}} />
            <Box
                id="contact"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        
                    }
                }}
                className={classes.container}
                >

                <Details />
                <Form />
            </Box>
            <SimpleWaveBottom bg="black" />
        </>
    );
};

export default Contact;