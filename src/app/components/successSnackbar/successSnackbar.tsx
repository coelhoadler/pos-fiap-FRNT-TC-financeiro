import React, { useEffect, useState } from 'react';
import { Snackbar, Box, Typography, LinearProgress, Paper } from '@mui/material';

interface SuccessSnackbarProps {
  open: boolean;
  onClose: () => void;
  duration?: number;
  message?: string;
}

const SuccessSnackbar: React.FC<SuccessSnackbarProps> = ({
  open,
  onClose,
  duration = 3000,
  message = 'Registro salvo com sucesso!',
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!open) return;

    setProgress(0);
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const next = oldProgress + increment;
        if (next >= 100) {
          clearInterval(timer);
          onClose();
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [open, duration, onClose]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{ zIndex: 1500 }}
    >
      <Paper
        sx={{
          p: 2,
          backgroundColor: '#f0f4f8',
          boxShadow: 3,
          borderRadius: 2,
          minWidth: 300,
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
          {message}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          color="success"
          sx={{ height: 6, borderRadius: 3 }}
        />
      </Paper>
    </Snackbar>
  );
};

export default SuccessSnackbar;
