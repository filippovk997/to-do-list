import React, { useState, useEffect } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
        // padding: theme.spacing(1),
    }
}));

const themeGreen = createMuiTheme({
    palette: {
        primary: green,
    },
});

export default function Header(props) {
    const label = useFormLabel();
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={label.ref} htmlFor="component-outlined">
                    Task
                </InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    value={props.task} 
                    onChange={props.onChange} 
                    onKeyPress={props.onKeyPress} 
                    autoFocus={props.autoFocus} 
                    labelWidth={label.width}
                />
            </FormControl>
            <ThemeProvider theme={themeGreen}>
            <Button 
                className={classes.button} 
                variant="outlined" 
                color="primary" 
                onClick={() => { props.onClick(props.task); }}
            >
                ADD
            </Button>
        </ThemeProvider>
        </div>
    );
}

function useFormLabel() {
    const [width, setWidth] = useState(0);
    const ref = React.useRef(null);

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
      }, []);

    return {
        width,
        ref
    };
}