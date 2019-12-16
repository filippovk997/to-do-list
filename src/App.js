import React from 'react';
import Container from './Container'

export default function App() {
    return (
        <Container />
    );
}

/*
import React, { useState, useEffect } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
    },
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

const themeGreen = createMuiTheme({
    palette: {
        primary: green,
    },
});
const themeRed = createMuiTheme({
    palette: {
        primary: red,
    },
});

export default function App() {
    const label = useFormLabel();
    const name = useFormInput('TextField');
    const checked = useFormCheckbox({ checkedA: true })
    const classes = useStyles();

    return (
        <div className={classes.container}>
        <FormControl className={classes.formControl} variant="outlined">
            <InputLabel ref={label.ref} htmlFor="component-outlined">
            Task
            </InputLabel>
            <OutlinedInput
            id="component-outlined"
            {...name}
            labelWidth={label.width}
            />
        </FormControl>
        <Input
            className={classes.input}
            inputProps={{
                'aria-label': 'description',
            }}
        />
        <FormControlLabel 
            control={
                <Checkbox 
                    checked={checked.state.checkedA}
                    onChange={checked.handleChange('checkedA')}
                    value="checkedA"
                />
            }
            label="Secondary"
        />
        <ThemeProvider theme={themeGreen}>
            <Button variant="outlined" color="primary" className={classes.button}>
                ADD
            </Button>
        </ThemeProvider>
        <ThemeProvider theme={themeRed}>
            <IconButton className={classes.button} color="primary" aria-label="clear">
                <ClearIcon />
            </IconButton>
        </ThemeProvider>
        </div>

  );
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = event => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange: handleChange
    };
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

function useFormCheckbox(initialChecked) {
    const [state, setState] = useState(initialChecked);

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return {
        state,
        handleChange
    };
}*/