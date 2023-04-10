import React from "react";
import { SvgIconProps } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props extends SvgIconProps {
    bg: string;
};

export function SimpleWaveBottom ({
    color,
    ...props
}: Props) {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));

    const dynamicMarginBottom = matchesMd ? "-120px" : "-20px";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}
            style={{
                // marginBottom: dynamicMarginBottom,
                display: 'block', 
                ...props.style
            }}>
            <path fill={props.bg} fillOpacity="1" d="M0,96L1440,0L1440,0L0,0Z"></path>
        </svg>
    )
}