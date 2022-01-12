import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';

const ResetPasswordOtp = props => {
  const { handleClose, setScreenName, open } = props;
  const [value, setValue] = useState('');
  const [optError, setOtpError] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '3px solid #fff',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style} className="admin-model-box">
          <Typography
            id="transition-modal-title"
            className="text-align-center"
            variant="h6"
            component="h2"
          >
            Enter OTP
          </Typography>
          <form
            className="forgot-otp-box"
            noValidate
            onSubmit={e => {
              e.preventDefault();
              if (value.length === 4) {
                console.log('success', value);
                handleClose();
                setScreenName('RESET_PASSWORD');
              } else {
                setOtpError(true);
              }
            }}
          >
            <OtpInput
              value={value}
              onChange={e => {
                setValue(e);
                setOtpError(false);
              }}
              numInputs={4}
              hasErrored={optError}
              inputStyle={{
                padding: 10,
                marginRight: 10,
                border: '2px solid #0000ff',
                borderRadius: 15,
                width: 45,
                height: 45,
              }}
              errorStyle={{
                borderColor: '#c52626',
              }}
              shouldAutoFocus
              isInputNum
            />
            <button type="submit" name="submit" className="submit-btn">
              Verify
            </button>
          </form>
          {optError && (
            <div className="form-error text-align-center w-100">
              <div className="error-message">Wrong OTP</div>
            </div>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ResetPasswordOtp;
