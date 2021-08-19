import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
    return {
        board: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: '100%'
        },
        gameCard: {
            width: '20%',
            maxWidth: '200px',
            height: "200px",
            maxHeight: "300px",
            borderRadius: "10px",
            border: "5px solid black",
            position: "relative",
            display: "grid",
            margin: "30px",
            justifyContent: "center",
            [theme.breakpoints.down('sm')]: {
                margin: "10px",
                height: "150px"
            }
        },
        selectedGameCard:{
            border: `5px solid ${theme.palette.info.main}`
        },
        gameCardImage: {
            width: "100px",
            height: "100px",
            maxWidth: "100%",
            maxHeight: "100%",
            gridColumn: "2/3",
            gridRow: "2/3",
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            [theme.breakpoints.down('sm')]: {
                width: "50px",
                height: "60px",
            }
        },
        gameCardText: {
            gridColumn: "2/3",
            gridRow: "3/4",
            alignSelf: "center",
            justifySelf: "center",
            [theme.breakpoints.down('sm')]: {
                fontSize: 10
            }
        },
        playButton: {
            fontFamily: "Pokemon",
            fontSize: "45px",
            lineHeight: "1em",
            padding: "20px 50px",
            right: "0",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.info.light,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "25px",
            borderRadius: '10px'
        }
    }
});