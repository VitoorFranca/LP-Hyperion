import { makeStyles } from '@mui/styles';

export default makeStyles(() => {
  return {
        footer: {
            // border: '1px solid black',

            padding: "0 20px"
            // height: '300px',

            // backgroundColor: "#444"
        },

        phoneAndAddress: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: "wrap",
            alignItems: "center",

            minHeight: 100,

            "& svg": {
                fontSize: 52
            }

        },
        addressBox: {
            display: 'flex',
            gap: 14
            
        },
        address: {
            fontSize: 18
            
        },
        phoneBox: {
            display: 'flex',
            gap: 14
            
        },
        phone: {
            fontSize: 18

        },
        about: {
            justifyContent: 'center',
            padding: "12px 0",
            display: "flex",
            gap: 58,
            flexWrap: "wrap",
            
            "& ul": {
                listStyle: "none",
                padding: 0,
                margin: 0,

            },
            "& ul li a": {
                textDecoration: "none",
                color: "#000"

            },
            "& li": {
                listStyle: "none",

            }

        },
        aboutCompany: {
            width: "180px",
            display: "flex",
            flexDirection: "column",
            
        },
        aboutServices: {
            width: "180px",
            display: "flex",
            flexDirection: "column",
            
        },
        aboutSolutions: {
            width: "180px",
            display: "flex",
            flexDirection: "column",

        },
        footerSecond: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 100

        },
        aboutTitle: {
            fontSize: 28,
            fontWeight: "bold",
        }
    }
});