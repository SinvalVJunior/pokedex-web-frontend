import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {

    return {
        menuUserContainer: {
            zIndex: 10
        },
        menuUserNotLogged: {
            display: 'inline',
            marginRight: '1rem',
            marginLeft: '0.5rem',
            color: 'white'

        },
        menuUserLogged: {
            display: 'inline',
            marginRight: '0.35rem',
            marginLeft: '0.5rem',
            color: 'white'

        },
        userLogo: {
            marginRight: '0.5rem',
            fontSize: '1.0rem',
            background: 'none',
            textDecoration: 'none'
        },
        button: {
            background: theme.palette.primary.main,
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            "&:hover": {
                backgroundColor: theme.palette.primary.main
            },
        },
        buttonLabel: {
            textTransform: 'capitalize',
        },
        saveButton: {
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
            fontFamily: 'Pokemon'
        },
        menuUserData: {
            display: 'block',
            marginRight: '1rem',
            marginLeft: '0.5rem',
            fontWeight: 'bold'
        },
        listData: {
            listStyleType: 'none'
        },
        userEditButton: {
            background: theme.palette.primary.main,
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            "&:hover": {
                backgroundColor: theme.palette.primary.light
            }
        },
        userLoggoutButton: {
            marginRight: '0.5rem',
            fontSize: '1.0rem',
            borderRadius: 3,
            border: 0,
            height: 48,
            backgroundColor: 'white',
            color: theme.palette.primary.main,
            padding: '0 30px'
        },
        modalPaper: {
            position: 'absolute',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(5, 10, 5),
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        Icon: {
            top: '1%',
            left: '4%',
            width: 40,
            height: 40,
            display: 'inline',
            marginRight: '1rem'
        },
        perfilTitle: {
            color: theme.palette.primary.main,
            fontFamily: 'Pokemon',
            display: 'inline'   
        },
        closeSpace: {
            margin: '0px',
            marginTop: "5px",
            padding: '2px',
            maxWidth: '250px'
        },
     
    }
});