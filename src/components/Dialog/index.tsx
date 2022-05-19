import { FC,ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

type DialogProps = {
  open: boolean;
  handleClose: () => void;
  title: string,
  children: ReactNode
};

export const DialogContainer: FC<DialogProps> = ({ open, handleClose,title,children }) => {
  if(!open) return null;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ borderBottom: "1px solid #999" }}>
        <Typography
          fontWeight={600}
          display="flex"
          alignItems="center"
        > 
          <Close
            onClick={handleClose}
            sx={{ marginRight: "10px", cursor: "pointer", fontWeight: "600" }}
          />
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ margin: "10px" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
