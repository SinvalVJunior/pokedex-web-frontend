import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`,
            alignContent: 'center',
            flexDirection: 'column',
            [theme.breakpoints.down('sm')]: {
                width: 300,
            }
        },
        fieldWrapper: {
            alignContent: 'center',
            component: 'div',
            flexDirection: 'column',
        },
        buttonWrapper: {
            justifyContent: 'center',
            component: 'div',
            margin: theme.spacing(2),
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
            }
        },
        buttonLabel: {
            textTransform: 'capitalize',
            fontFamily: 'Pokemon'
        },
        card: {
            marginTop: theme.spacing(10)
        },
        header: {
            textAlign: 'center',
            background: theme.palette.primary.main,
            color: '#fff'
        },
        title: {
            fontFamily: 'Pokemon'
        },
        modalPaper: {
            position: 'absolute',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(5, 10, 6),
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
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
        link: {
            color:'red',
            "&:hover":{
                cursor: 'pointer',
                backgroundColor: "#fff"
            },
            "&:active":{
                color:'black',
            },
        }
    }

});