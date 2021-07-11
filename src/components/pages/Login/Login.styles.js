import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`,
            alignContent: 'center',
            flexDirection: 'column'
        },
        fieldWrapper: {
            alignContent: 'center',
            component: 'div',
            flexDirection: 'column'
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
        }
    }

});