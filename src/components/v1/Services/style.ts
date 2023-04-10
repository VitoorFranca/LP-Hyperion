import { Height } from "@mui/icons-material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';

type Props = {
    error?: boolean;
};

const yellowDefault = "#dfc100";
const blackDefault = "#0e0e0e";


export default makeStyles((theme: Theme) => ({
    root2: {
        display: "flex",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // flexWrap: "wrap",
        gap: 20,
        padding: 25,
        
        backgroundColor: "#0e0e0e"
    },
    carousel: {
        // height: 600,
        // display: "flex",
        // flexDirection: "row",
        // flexWrap: "wrap",
        

        
        // backgroundColor: "#555",
    },
    details: {
            // width: "50%",
            minHeight: "100px",
            padding: 40,
            // margin: 70,

            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "flex-start",
            // gap: 9,

            // textAlign: "center",
            color: "#f6f6f6",

            "& :first-child, & :nth-child(2), & :nth-child(3)": {
                // fontSize: 15,
                fontWeight: 400,
                // color: #041020,
                lineHeight: 1.2,
                margin: "0 0 30px",
                opacity: .8,
            },


            "& :first-child": {
                fontSize: 15,
                fontWeight: 400
                
            },
            "& :nth-child(2)": {
                fontSize: 36,
                fontWeight: 700
                // padding: 10
                
            },
            "& :nth-child(3)": {
                fontSize: 24,
                fontWeight: 400
                // padding: 10
                
            },


        
        // backgroundColor: "#555",
    },
    card: {
        width: 400,
        minHeight: 220,
        borderRadius: 3,
        padding: 15,
        
        backgroundColor: "#1d1d1d",
        margin: 16,
        marginBottom: 26,
        cursor: "pointer"
    },
    icon: {
        padding: 15,
        margin: 5,
        cursor: "unset",
        // width:,
        "& svg": {
            color: yellowDefault
        },
        
        backgroundColor: "rgba(255,187,54,.1);"
    },
    copy: {
        padding: 10
        
        // backgroundColor: "#1209"
    },
    copyTitle: {
        marginBottom: 8,
        fontSize: 18,
        fontWeight: "bold",
        color: "#f6f6f6"
        
        // backgroundColor: "#1209"
    },
    copyDescription: {
        color: "#cdcfd2"
        
        // backgroundColor: "#1209"
    },
    previewChip: {
        
        // backgroundColor: "#1209"
    },
    currentChip: {
        
        // backgroundColor: "#1209"
    },
}));