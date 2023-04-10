const styles = {
    container: {
      width: "100%",
      margin: 0,
      padding: 0,
      maxWidth: "100%",

      // ".css-1oqqzyl-MuiContainer-root": {
      //   margin: 0
      // }
    },
    paperContainer: {
        borderRadius: 0,
        backgroundImage: `url(/london.jpg)`,
        marginTop: "-20px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "870px",
        padding: {
          md: 10,
          xs: 5
        },
        paddingTop: {
          md: 10,
          xs: 10
        }
    },
    title: {
      // display: ",
      color: "white",
      fontSize: {
        xs: "3.5rem",
        sm: "4.4rem",
        md: "6.4rem"
      },
      fontFamily: 'serif',
      fontWeight: "600",
      lineHeight: "1.1em",
      letterSpacing: {
        md: "-5px",
        xs: "-2px"
      },
      width: {
        md: 890,
        sm: 540,
        xs: 330
      },
    },
    underlineText: {
      textDecoration: "underline",
      color: "#dfc100",
      fontWeight: "700"
    },
    button: {
      // border: "none !important"
    },
    buttonsBox: {
      flexDirection: {
        xs: "column",
        sm: "column",
        md: "row",

      },
      gap: {
        xs: 1,
        sm: 1,
        md: 3,

      }
    }
};

export default styles;