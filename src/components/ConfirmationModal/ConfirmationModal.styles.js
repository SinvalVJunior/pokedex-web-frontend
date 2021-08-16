import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {

    return {
        modalPaper: {
            position: 'absolute',
            width: 400,
            minHeight: "60vh",
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)' ,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            fontSize: 20
        },
        pokeLogo: {
            display: "flex",
            justifyContent: "center",
            color: theme.palette.info.light
        },
        confirmButton: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            background: theme.palette.primary.main,
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            marginTop: 10,
            "&:hover": {
                backgroundColor: theme.palette.primary.main
            }
        },
        buttonLabel: {
            textTransform: 'capitalize',
            fontFamily: 'Pokemon'
        },
        titleContainer: {
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: 'Pokemon',
            color: theme.palette.info.main,
            fontSize: 40

        }
    };


});