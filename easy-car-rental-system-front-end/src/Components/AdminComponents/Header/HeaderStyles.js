import {makeStyles} from "@material-ui/core";
import {blue, blueGrey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
    },
    logo: {
        color: "white",
    },
    navList: {
        minWidth: "250px",
        maxWidth: "300px",
    },
    ulAvatar: {
        backgroundColor: blue["A200"],
        color: "white",
    },
    navAvatar: {
        width: "30px",
        height: "30px",
    },

    //wrapper of main container
    // wrapper: {
    //     minHeight: "100vh",
    //     height: "auto",
    //     background: "#efefef",
    //     marginTop: "60px",
    //     padding: theme.spacing(2, 2, 0, 34),
    //     [theme.breakpoints.down("sm")]: {
    //         padding: theme.spacing(2, 2),
    //         marginTop: "45px",
    //     },
    // },

    //Side nav
    drawerPaper: {
        width: "250px",
        marginTop: "65px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "0px",
        },
    },
    // navlinks: {
    //     color: blueGrey["A400"],
    //     "& :hover , &:hover div": {
    //         color: blue["A200"],
    //     },
    //     " & div": {
    //         color: blueGrey["A400"],
    //     },
    // },
    // activeNavlinks: {
    //     color: blue["A700"],
    //     "& div": {
    //         color: blue["A700"],
    //     },
    // },
    // navButton: {
    //     width: " 100%",
    //     textTransform: "capitalize",
    // },
}));
