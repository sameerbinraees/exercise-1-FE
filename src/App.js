import React, { useState } from 'react';
import './App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputLabel } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: '#318bfe',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#318bfe',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      flexGrow: 1,
    },
  },
  field: {
    width: '100%',
    color: 'white',
  },
  circlew: {
    height: 20,
    width: 20,
    borderStyle: 'solid',
    borderWidth: 'thin',
    borderColor: 'white',
    borderRadius: '50%',
  },
  circleg: {
    height: 20,
    width: 20,
    borderStyle: 'solid',
    borderWidth: 'thin',
    borderColor: 'grey',
    borderRadius: '50%',
  },

  button: {
    width: '30%',
    float: 'right',
  },
  input: {
    textAlign: 'left',
    color: 'grey',
    marginBottom: 10,
  },
  foc: {
    color: 'grey',
  },
  focW: {
    color: 'white',
  },
}));

function App() {
  const classes = useStyles();

  const [examination, setExamination] = useState('');
  const [clinicalHistory, setClinicalHistory] = useState('');
  const [technique, setTechnique] = useState('');
  const [impressions, setImpressions] = useState('');

  const [focusExamination, setFocusExamination] = useState(false);
  const [focusClinicalHistory, setFocusClinicalHistory] = useState(false);
  const [focusTechnique, setFocusTechnique] = useState(false);
  const [focusImpressions, setFocusImpressions] = useState(false);

  const displayInfo = () => {
    console.log('Examination: ', examination);
    console.log('Clinical History: ', clinicalHistory);
    console.log('Technique: ', technique);
    console.log('Impressions: ', impressions);
    ToastsStore.success('Your report has been successfully submitted');
  };

  return (
    <div className="App">
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Grid container spacing={3}>
            <Grid item>
              <Box
                borderRadius="50%"
                className={`${
                  examination
                    ? 't'
                    : focusExamination || examination
                    ? classes.circlew
                    : classes.circleg
                }`}
              >
                &#10003;
              </Box>
            </Grid>
            <Grid item xs={11}>
              <InputLabel
                className={classNames(
                  classes.input,
                  `${focusExamination ? classes.focW : classes.foc}`,
                )}
              >
                Examination
              </InputLabel>
              <CssTextField
                className={classes.field}
                classes={{ focused: classes.foc }}
                InputProps={{
                  className: classes.field,
                }}
                variant="outlined"
                id="custom-css-outlined-input"
                value={examination}
                multiline
                onChange={(e) => setExamination(e.target.value)}
                onFocus={() => {
                  setFocusExamination(true);
                }}
                onBlur={() => {
                  setFocusExamination(false);
                }}
              />
            </Grid>
          </Grid>
        </div>

        <div>
          <Grid container spacing={3}>
            <Grid item>
              <Box
                borderRadius="50%"
                className={`${
                  clinicalHistory
                    ? 't'
                    : focusClinicalHistory || clinicalHistory
                    ? classes.circlew
                    : classes.circleg
                }`}
              >
                &#10003;
              </Box>
            </Grid>
            <Grid item xs={11}>
              <InputLabel
                className={classNames(
                  classes.input,
                  `${focusClinicalHistory ? classes.focW : classes.foc}`,
                )}
              >
                Clinical History
              </InputLabel>
              <CssTextField
                className={classes.field}
                classes={{ focused: classes.foc }}
                InputProps={{
                  className: classes.field,
                }}
                variant="outlined"
                id="custom-css-outlined-input"
                value={clinicalHistory}
                multiline
                onChange={(e) => setClinicalHistory(e.target.value)}
                onFocus={() => {
                  setFocusClinicalHistory(true);
                }}
                onBlur={() => {
                  setFocusClinicalHistory(false);
                }}
              />
            </Grid>
          </Grid>
        </div>

        <div>
          <Grid container spacing={3}>
            <Grid item>
              <Box
                borderRadius="50%"
                className={`${
                  technique ? 't' : focusTechnique || technique ? classes.circlew : classes.circleg
                }`}
              >
                &#10003;
              </Box>
            </Grid>
            <Grid item xs={11}>
              <InputLabel
                className={classNames(
                  classes.input,
                  `${focusTechnique ? classes.focW : classes.foc}`,
                )}
              >
                Technique
              </InputLabel>
              <CssTextField
                className={classes.field}
                classes={{ focused: classes.foc }}
                InputProps={{
                  className: classes.field,
                }}
                variant="outlined"
                id="custom-css-outlined-input"
                value={technique}
                multiline
                onChange={(e) => setTechnique(e.target.value)}
                onFocus={() => {
                  setFocusTechnique(true);
                }}
                onBlur={() => {
                  setFocusTechnique(false);
                }}
              />
            </Grid>
          </Grid>
        </div>

        <div>
          <Grid container spacing={3}>
            <Grid item>
              <Box
                borderRadius="50%"
                className={`${
                  impressions
                    ? 't'
                    : focusImpressions || impressions
                    ? classes.circlew
                    : classes.circleg
                }`}
              >
                &#10003;
              </Box>
            </Grid>
            <Grid item xs={11}>
              <InputLabel
                className={classNames(
                  classes.input,
                  `${focusImpressions ? classes.focW : classes.foc}`,
                )}
              >
                Impressions
              </InputLabel>
              <CssTextField
                className={classes.field}
                classes={{ focused: classes.foc }}
                InputProps={{
                  className: classes.field,
                }}
                variant="outlined"
                id="custom-css-outlined-input"
                value={impressions}
                multiline
                onChange={(e) => setImpressions(e.target.value)}
                onFocus={() => {
                  setFocusImpressions(true);
                }}
                onBlur={() => {
                  setFocusImpressions(false);
                }}
              />
            </Grid>
          </Grid>
        </div>
        <br />
        <div style={{ width: '94%' }}>
          <Button
            className={classes.button}
            variant="contained"
            style={{ backgroundColor: '#318bfe', color: 'white' }}
            onClick={displayInfo}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
