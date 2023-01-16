import { ReactNode } from "react";

export type DialogProps = {
  open: boolean;
  handleClose: () => void;
  title: string,
  children: ReactNode
};
