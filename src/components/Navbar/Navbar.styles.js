import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
    return {
        navbar: {
            backgroundColor: theme.palette.primary.main,
            height: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        menuBars: {
            marginLeft: '2rem',
            fontSize: '1.35rem',
            background: 'none'
        },
        navMenu: {
            backgroundColor: theme.palette.primary.main,
            width: '250px',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            top: '0',
            left: '-100%',
            transition: '850ms'
        },
        navMenuActive: {
            left: '0',
            transition: '100ms'
        },
        navText: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            listStyle: 'none',
            height: '60px',
            '& a': {
                textDecoration: 'none',
                color: '#f5f5f5',
                fontSize: '18px',
                width: '95%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 16px',
                borderRadius: '4px',
                '&:hover': {
                    backgroundColor: '#1a83ff',
                }

            }

        },
        navMenuItems: {
            width: '100%',
            paddingInlineStart: 0
        },
        navbarToggle: {
            backgroundColor: theme.palette.primary.main,
            width: '100%',
            height: '80px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center'
        },
        span: {
            marginLeft: '16px'
        }
    }

});