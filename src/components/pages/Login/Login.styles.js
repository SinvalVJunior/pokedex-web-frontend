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
            background: '#F51720',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            "&:hover": {
                backgroundColor: "#F51720"
            }
        },
        buttonLabel: {
            textTransform: 'capitalize',
        },
        card: {
            marginTop: theme.spacing(10)
        },
        header: {
            textAlign: 'center',
            background: '#F51720',
            color: '#fff'
        },
        pokeball: {
            maxWidth: 20,
            maxHeight: 20,
            marginLeft: 10,
            display: 'flex',
            justifyContent: 'center'
        }
    }

});