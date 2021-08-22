import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { brown } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const PurpleSwitch = withStyles({
  switchBase: {
    color: brown[400],
    '&$checked': {
      color: brown[700],
    },
    '&$checked + $track': {
      backgroundColor: brown[400],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
      />
    </FormGroup>
  );
}
