import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function SimpleSnackbar({open ,Message, color}) {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  return (
    <div>
      <Snackbar open={open}>
        <Alert severity={color} sx={{ width: '100%',}}  style={{ direction: "rtl" }} >
          {Message}
        </Alert>
      </Snackbar>
    </div>
  );
}
