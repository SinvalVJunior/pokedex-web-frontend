import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            overflow: 'hidden',
            position: 'relative',
            textAlign: 'center'
        },
        imageBackground: {
            opacity: 0.04,
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: 'auto',
        },
        content: {
            opacity: '100%',
            position: 'relative',
            minHeight: 'calc(100vh - 50px)'
        },
        titleText: {
            fontFamily: 'Pokemon',
            color: theme.palette.info.main,
            display: 'inline'
        },
        pokedexWebText: {
            display: "inline",
            color: theme.palette.info.light,
            WebkitTextStroke: `2.5px ${theme.palette.info.main}`

        },
        titleContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: 100
        },
        pokemonText: {
            fontFamily: 'Pokemon',
            color: theme.palette.info.main,
            display: 'inline'
        },
        table: {
            marginTop: '10vh',
            marginBottom: "10vh",
            maxWidth: 800,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        },
        tableCell: {
            height: 50,
            width: "20%"
        },
        secondColumn: {
            paddingLeft: 50,
            width: "80%",
            [theme.breakpoints.down('sm')]: {
                textAlign: "justify"
            }
        },
        tableLine: {
            marginTop: 100,
            display: "block"
        },
        transition: {
            display: "block",
            width: "100%",

        },
        backgroundRed: {
            backgroundColor: theme.palette.primary.main
        },
        pokemonSubtitleText: {
            fontFamily: 'Pokemon',
            color: "#fff",
            display: 'inline',
            fontSize: 150,
            [theme.breakpoints.down('sm')]: {
                fontSize: 50,
            }
        },
        textWhite: {
            color: "#fff",
            margin: 0
        },
        pokeAPILink: {
            color: theme.palette.info.light,
            fontFamily: 'Pokemon',
            display: 'inline',
            fontSize: "x-large",
            textDecoration: "none"

        },
        releaseNotesContainer: {
            margin: 50,
            maxWidth: 300
        },
        normalLink: {
            color: theme.palette.primary.main,
            textDecoration: "none"
        },
        ul: {
            listStyleType: "none",
            paddingLeft: 0,
        },
        li: {
            marginRight: 15
        },
        releaseNotesList: {
            display: "flex",
            textAlign: "left"

        },
        foot: {
            marginTop: "10%",
            marginBottom: "10%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: 0,
            paddingTop: 40,
            paddingBottom: 40
        },
        authors: {
            marginTop: 40
        },
        footElement: {
            marginTop: 50,
            maxWidth: "50%",
            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
            }
        }
    }

});