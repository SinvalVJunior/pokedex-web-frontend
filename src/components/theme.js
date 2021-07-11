
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
      light: red[300]
    },
    secondary: {
      main: grey[500],
    },
    info: {
      main: blue[500],
      light: yellow[700]
    }
  },
});

export { theme };