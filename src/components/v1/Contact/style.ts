import { Theme } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';

type Props = {
    error?: boolean;
};

const error = ({ error }: Props) => error ? "#f74b03" : "#dfc100";

export default makeStyles((theme: Theme) => ({
        container: {
            display: 'flex',
            minHeight: "400px",
            width: "100%",
            
            margin: 0,
            padding: 0,
            
            backgroundColor: "black",
            // backgroundColor: "gray"
        },
        details: {
            // width: "50%",
            minHeight: "100px",
            padding: 86,
            // margin: 70,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 9,

            // textAlign: "center",
            color: "#f4efea",

            "& :first-child": {
                fontSize: 38,
                fontWeight: "bold",
                
            },
            "& :nth-child(2)": {
                fontSize: 25,
                padding: 10
                
            },

            // backgroundColor: "green"
        },
        form: {
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            // width: "50%",
            

            // backgroundColor: "blue"
        },
        standardInput: {
            color: "white !important",

            width: 350,
            borderBottomWidth: "1px",
            borderBottomColor: error,
            borderBottomStyle: "solid",
            // color: "white",
            fontWeight: "bold",
            fontSize: 18,
            padding: 6,
            margin: 6,

            "&:hover": {
                borderBottomColor: error,
            },
            "&.css-1v4h62a-MuiInputBase-root-MuiInput-root:after, &.css-swrvkd-MuiInputBase-root-MuiInput-root:after": {
                borderBottom: "none"
            }
        },
}))