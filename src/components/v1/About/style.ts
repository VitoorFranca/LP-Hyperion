import { makeStyles } from '@mui/styles';


export default makeStyles(() => {
    function verifyIsMd(matchesMd: any, mdArgs: any, xsArgs: any){
        return matchesMd ? mdArgs : xsArgs;
    }
  return {
        root1: {
            display: "flex",
            justifyContent: "center",
            padding: 24,
            flexDirection: (props: any) => verifyIsMd(props?.matchesMd,"row","column"),
            // backgroundColor: (props: any) => verifyIsMd(props?.matchesMd,"red","blue")

        },
        details: {
            // height: '500px',
            width: (props: any) => verifyIsMd(props?.matchesMd,"40%", "100%"),
            display: "flex",
            flexDirection: "column",

            padding: (props: any) => verifyIsMd(props?.matchesMd,"10px 90px", "0 10px 30px 10px"),

            "& strong": {
                color: "#000 !important",
                fontWeight: "bold"
            },

            "& :first-child, & :nth-child(2), & :nth-child(3)": {
                fontWeight: 400,
                color: "#5a5e64",
                lineHeight: 1.2,
                margin: "0 0 30px",
                opacity: .8,
            },


            "& :first-child": {
                fontSize: 15,
                fontWeight: 400,
                
            },
            "& :nth-child(2)": {
                fontSize: 48,
                fontWeight: 700,
                color: "#041020"
                
            },
            "& :nth-child(3)": {
                fontSize: 28,
                fontWeight: 400,
                color: "#041020"
                
            },
            "& :nth-child(4)": {
                fontSize: 16,
                fontWeight: 400,
                color: "#5a5e64",
                marginBottom: 28
                
            },

        },
        visual: {
            // display: "flex",
            gap: 40,
            width: (props: any) => verifyIsMd(props?.matchesMd,"60%", "100%"),


            // backgroundColor: "green"
        },
        card: {
            cursor: "pointer",
            // height: "120px",
            padding: "30px 20px",

            display: "flex",
            flexDirection: "column",
            border: "1px solid #04102014",
            borderRadius: 3,

            // backgroundColor: "#222"
        },
        cardsBox: {
            maxWidth: (props: any) => verifyIsMd(props?.matchesMd,"24%", "100%"),
            display: "flex",
            flexDirection: "column",
            gap: 33,
            
            // backgroundColor: "#753"
        },
        cardTitle: {
            margin: "20px 0 15px 10px",

            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "1.3",
            color: "#041020"

            // backgroundColor: "#753"
        },
        cardIcon: {
            color: "#dfc100",
            width: "40px",

            // backgroundColor: "#753"
        },
        image: {
            // maxWidth: "auto",
            height: (props: any) => verifyIsMd(props?.matchesMd,"100%", "340px"),
            borderRadius: 3,
            // alignSelf: "center",
            // justifySelf: "center",

            position: "relative",
            width: "100%",
            // height: "100%",
            top: "auto",
            right: "auto",
            objectFit: "cover",
            backgroundColor: "#efefef",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "50px auto",
            // borderRadius: "3px",
        },
        visualImage: {

        }
    }
});