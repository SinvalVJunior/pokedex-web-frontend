import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
    return {
        navbar: {
            backgroundColor: theme.palette.primary.main,
            height: '50px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center'
        },
        menu_bars: {
            marginLeft: '2rem',
            fontSize: '1.35rem',
            background: 'none'
        },
        nav_menu: {
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
        nav_menu_active: {
            left: '0',
            transition: '100ms'
        },
        nav_text: {
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
        
        nav_menu_items: {
            width: '100%',
            paddingInlineStart: 0
        },
        navbar_toggle: {
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