import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            zIndex: 1,
            position: "absolute",
            backgroundColor: "#fff",
            width: "100%",
            height: "100vh",
            opacity: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        loading: {
            fontFamily: "Pokemon",
            fontSize: 80,
            position: "absolute",
            zIndex: 15,
            color: theme.palette.primary.main,
            top: "40%",
            left: "50%"

        },
        centralizeAbsoluteElement: {
            position: "relative",
            left: "-50%"
        }
    }
});