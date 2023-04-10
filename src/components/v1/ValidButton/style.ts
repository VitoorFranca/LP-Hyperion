import { makeStyles } from '@mui/styles';

export default makeStyles(() => {
  return {
        root3: {
          margin: "6px !important",
          padding: "9px !important",
          borderRadius: "2px !important",
          minWidth: "165px !important",

          fontWeight: "bold !important",
          fontSize: "14px !important",
          
          color: "#0e0e0e !important",
          
          textTransform: "none",
          backgroundColor: "#dfc100 !important",
          
          borderWidth: "2px !important",
          borderStyle: "solid !important",
          borderColor: "transparent !important",
          "&:hover": {
            borderStyle: "solid !important",
            borderColor: "#dfc100 !important",
            
            backgroundColor: "#0e0e0e !important",
            color: "#f4efea !important",
          },

        },
        contained: {
          color: "#0e0e0e !important",
          
          textTransform: "none",
          backgroundColor: "#dfc100 !important",
          
          borderWidth: "1px !important",
          borderStyle: "solid !important",
          borderColor: "transparent !important",
          "&:hover": {
            borderStyle: "solid !important",
            borderColor: "#dfc100 !important",
            
            backgroundColor: "#0e0e0e !important",
            color: "#a7a4a0 !important",
          },
        },
        outlined: {
          textTransform: "none",
          backgroundColor: "#0e0e0e !important",
          color: "#a7a4a0 !important",
          
          borderWidth: "1px !important",
          borderStyle: "solid !important",
          borderColor: "#dfc100 !important",
          "&:hover": {
            borderStyle: "solid !important",
            borderColor: "transparent !important",
            
            backgroundColor: "#dfc100 !important",
            color: "#0e0e0e !important",
          },
        },
        validWhatsAppButton: {
          // backgroundColor: "#61ce70",
        },
        icon: {
          fontSize: 29,
          padding: 3,
          color: "#61ce70 !important"
        }
    }

});