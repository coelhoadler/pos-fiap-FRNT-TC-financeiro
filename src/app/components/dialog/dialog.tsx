import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const AlertDialog = ({
  type,
  open,
  setOpen,
  handleConfirmSubmit,
}: {
  type?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  handleConfirmSubmit: (event?: object) => void;
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const getDialogMessage = () => {
    switch (type) {
      case 'Delete':
        return 'Tem certeza de que deseja excluir este registro?';
      case 'Edit':
        return 'Você deseja realmente atualizar este registro?';
      case 'Confirm':
        return 'Você está prestes a concluir esta transação. Deseja continuar?';
      default:
        return '';
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          p: 3,
          borderRadius: '12px',
          minWidth: '320px',
          maxWidth: '90%',
          textAlign: 'center',
          backgroundColor: '#fff',
          boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.25)',
          fontFamily: 'inherit',
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: '1rem',
          fontWeight: 500,
          color: '#333',
        }}
      >
        {getDialogMessage()}
      </DialogTitle>

      <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            backgroundColor: '#dee9ea',
            color: '#004d61',
            textTransform: 'none',
            fontWeight: 500,
            borderRadius: '8px',
            height: '48px',
            minWidth: '250px',
            fontSize: '16px',
            '&:hover': {
             backgroundColor: '#ff5031',
             color: 'white',
              fontWeight: 400,
            },
          }}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleConfirmSubmit}
          autoFocus
          variant="contained"
          sx={{
            backgroundColor: '#dee9ea',
            color: '#004d61',
            textTransform: 'none',
            fontWeight: 500,
            borderRadius: '8px',
            height: '48px',
            minWidth: '250px',
            fontSize: '16px',
            '&:hover': {
              backgroundColor: '#026179',
              color: 'white',
              fontWeight: 400,
            },
          }}
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
