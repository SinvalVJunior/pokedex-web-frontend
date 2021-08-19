import { makeStyles } from '@material-ui/core'
import Florest from '../../../assets/images/florest.png';
export const useStyles = makeStyles((theme) => {

    return {
        root: {
            maxWidth: 300,
            maxHeight: 100,
            marginTop: 10,
            display: 'inline-table'
        },
        buttonLearn: {
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            background: 'white',
            borderRadius: 3,
            border: 0,
            color: theme.palette.primary.main,
            height: 48,
            padding: '0 30px',
            "&:hover": {
                backgroundColor: 'white'
            }
        },
        buttonLearnLabel: {
            textTransform: 'capitalize',
            fontFamily: 'Pokemon'
        },
        image: {
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            width: 85,
            height: 65
        },
        pokemonName: {
            fontFamily: 'Pokemon',
            color: theme.palette.info.main,
            marginTop: 10
        },
        pokemonStat: {
            listStyleType: 'none',
            minWidth: 50,
            padding: 0,
            marginTop: 20,
            marginRight: 20,
            marginLeft: 20,
            paddingBottom: 10
        },
        pokemonText: {
            display: 'inline'
        },
        list: {
            '&:hover': {
                '& $toolipText': {
                    visibility: 'visible'
                }
            }
        },
        speciesList: {
            width: 120,
            marginBottom: 10,
            textTransform: 'capitalize',
            '&:hover': {
                '& $toolipText': {
                    visibility: 'visible'
                }
            }
        },
        toolipContainer: {
            position: 'relative',
            display: 'inline-block',
            borderBottom: '1px dotted black'
        },
        toolipText: {
            visibility: 'hidden',
            backgroundColor: 'black',
            position: 'absolute',
            zIndex: 1,
            color: 'white',
            textAlign: 'center',
            padding: '5px 0',
            borderRadius: 6,
            width: 65,
            fontSize: 12,
            top: '-20px',
            right: '105%'
        },
        statLogo: {
            marginRight: 4
        },
        modalPaper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            [theme.breakpoints.down('sm')]: {
                width: 200,
                fontSize: 10,
                padding: theme.spacing(2, 3, 2),

            }
        },
        pokemonImageWrapper: {
            backgroundImage: `url(${Florest})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            paddingBottom: 10,
            paddingTop: 5
        },
        pokemonImage: {
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            height: 190,
            maxWidth: 350,
            [theme.breakpoints.down('sm')]: {
                height: 80,
                maxWidth: 175
            }
        },
        firstColumn: {
            fontFamily: 'Pokemon',
            color: theme.palette.info.light,
            width: 150,
            [theme.breakpoints.down('sm')]: {
                width: 80,
            }
        },
        curiosityTable: {
            marginTop: 10
        },
        curiosityText: {
            textAlign: 'justify'
        }
    };


});