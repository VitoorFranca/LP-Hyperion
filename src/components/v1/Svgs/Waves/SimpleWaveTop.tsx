import { SvgIconProps } from "@mui/material";

interface Props extends SvgIconProps {
    bg: string;
};

export function SimpleWaveTop ({
    color,
    ...props
}: Props) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 192" {...props} style={{ display: 'block', ...props.style }}>
            <path fill={props.bg} fillOpacity="1" d="M0,192L1440,64L1440,192L0,192Z"></path>
        </svg>
    )
}

