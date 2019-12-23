import React, { useState, useEffect } from 'react';
import Header from './Header';
import List from './List';
import axios from 'axios';


export default function Container() {
    const [task, setTask] = useState("");
    const [items, setItems] = useState([]);
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    
    const handleChangeTask = (event) => {
        setTask(event.target.value);
    };
    useEffect(() => {
        axios.get(`${axios.defaults.baseURL}`)
        .then(response => {
            setItems(response.data);
        });
    }, [])

    const handleClickAdd = (value) => {
        if (value === "")
            return;

        axios.post(`${axios.defaults.baseURL}`, { 
                value: value, 
                checked: false 
            })
            .then(response => {
                setItems(items.concat(response.data));
            });  

        setTask("");
    };

    const handleKeyPressEnter = (event) => {
        if (event.key === "Enter")
            handleClickAdd(event.target.value);
    };

    const handleChangeChecked = (event) => {
        setItems(items.map((item, index) => {
            if (index == event.target.name) {
                axios.patch(`${axios.defaults.baseURL}/${(item.id)}`, { checked: event.target.checked });
            }
            item.checked = (index == event.target.name) ? event.target.checked : item.checked;
            return item;
        }));
    };

    const handleChangeItems = (event) => {
        setItems(items.map((item, index) => {
            if (index == event.target.name)
                axios.patch(`${axios.defaults.baseURL}/${(item.id)}`, { value: event.target.value });
            item.value = (index == event.target.name) ? event.target.value : item.value;
            return item;
        }));
    };

    const handleClickRemove = (index) => {
        setItems(items.filter((item, ind) => { 
            return !(ind == index && axios.delete(`${axios.defaults.baseURL}/${(item.id)}`));
        }));
    };

    return (
        <div>
            <Header 
                task={task} 
                onChange={handleChangeTask} 
                onClick={handleClickAdd} 
                onKeyPress={handleKeyPressEnter} 
                autoFocus={true} 
            />
            <List 
                items={items} 
                onChange={{Checked: handleChangeChecked, Items: handleChangeItems}} 
                onClick={handleClickRemove} 
            />
        </div>
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