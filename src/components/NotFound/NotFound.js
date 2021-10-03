import { Typography } from "@mui/material";

import React from "react";

const NotFound = () => {
  return (
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        404 not Found
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </div>
  );
};

export default NotFound;
