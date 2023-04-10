import * as React from "react";
import { Box, Typography } from "@mui/material";
import Icon from "../Icon";
import useStyles from "../../style";
import copys from "../../utils/copys.data"

export interface Props {
    type: "WebProjects" | "MarketingDigital" | "VisualIdentity" | "SocialMedias"
};

const Card = ({ type }: Props) => {
    const classes = useStyles();

    return (
        <Box className={classes.card}>
            <Icon type={type} />

            <Box className={classes.copy}>
                <Typography className={classes.copyTitle}>
                    {copys[type].title}
                </Typography>
                <Typography className={classes.copyDescription}>
                    {copys[type].description}
                </Typography>

            </Box>
        </Box>
    );
};

export default Card;