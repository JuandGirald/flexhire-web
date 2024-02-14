import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import useAuthService from "services/auth";

type ApiKeyDialogProps = {
  open: boolean;
  closeable: boolean;
  handleClose?: () => void;
};

function ApiKeyDialog({ open, closeable, handleClose }: ApiKeyDialogProps) {
  const service = useAuthService();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const apiKey = formJson.apiKey;
          service.setApiKey(apiKey);
          handleClose && handleClose();
        },
      }}
    >
      <DialogTitle>Authorize</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To continue accessing our website and its features, please provide
          your Flexhire API key in the field below. This key ensures secure and
          authorized access to our services.
        </DialogContentText>
        <br />
        <TextField
          autoFocus
          required
          variant="outlined"
          margin="dense"
          id="apiKey"
          name="apiKey"
          label="Flexhire API Key"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        {closeable && <Button onClick={handleClose}>Cancel</Button>}
        <Button type="submit">Authorize</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ApiKeyDialog;
