import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    input: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
        // padding: theme.spacing(1),
    },
    icon: {
        primary: red,
    }
}));

const themeRed = createMuiTheme({
    palette: {
        primary: red,
    },
});

export default function Item(props) {
    const classes = useStyles();

    return (
        <div>
            <FormControlLabel 
                control={
                    <Checkbox 
                        name={props.index} 
                        checked={props.item.checked} 
                        onChange={props.onChange.Checked}
                    />
                }
            />
            <Input
                className={classes.input}
                name={props.index} 
                value={props.item.value} 
                onChange={props.onChange.Items}
                inputProps={{
                    'aria-label': 'description',
                }}
            />
            <ThemeProvider theme={themeRed}>
            <IconButton 
                className={classes.button} 
                color="primary" 
                aria-label="clear" 
                onClick={() => { props.onClick(props.index); }}
            >
                <ClearIcon />
            </IconButton>
            </ThemeProvider>
        </div>
    );
}