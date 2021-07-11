import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
    return {
        board: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        },
        gameCard: {
            width: "200px",
            height: "300px",
            borderRadius: "10px",
            border: "5px solid black",
            position: "relative",
            display: "grid",
            gridTemplateColumns: "25px auto 25px",
            gridTemplateRows: "30px 150px auto",
            margin: "30px"
        },
        selectedGameCard:{
            border: "5px solid limeGreen"
        },
        gameCardImage: {
            width: "150px",
            height: "150px",
            maxWidth: "100%",
            maxHeight: "100%",
            gridColumn: "2/3",
            gridRow: "2/3"
        },
        gameCardText: {
            gridColumn: "2/3",
            gridRow: "3/4",
            alignSelf: "center",
            justifySelf: "center"
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
            marginTop: "25px"
        }
    }
});