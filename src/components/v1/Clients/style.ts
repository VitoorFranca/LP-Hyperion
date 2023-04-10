import { makeStyles } from '@mui/styles';

export default makeStyles(() => {
  return {
        container: {
            backgroundColor: "#ebf0f9",
            height: 450,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        descriptionBox: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 30,
            maxWidth: 890,

            // backgroundColor: "#ebf"
        },
        description: {
            
            textAlign: 'center',
            fontSize: "26px !important",
            fontFamily: 'Helvetica Ne !important',
            fontWeight: "500 !important",
            textTransform: "capitalize",
            lineHeight: "1.2em"
        },
        subDescription: {
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Inter',
            fontWeight: 300,
            textTransform: "none",
            lineHeight: "1.5em",
            color: "#7a7a7a"
        },
    }
});