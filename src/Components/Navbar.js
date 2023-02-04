import React, { useContext } from "react";
import { Button, Box, Container } from "@mui/material";

import { AppContext } from "../utils";

const Navbar = () => {
  const { account, connect, disconnect } = useContext(AppContext);

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" padding="2rem">
        <Button variant="contained">Home</Button>

        <Box mb={1}>
          {account ? (
            <Box
              width="200px"
              height="42px"
              bgcolor="#098CDC"
              borderRadius="8px"
              sx={{ cursor: "pointer" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#ffffff"
              fontWeight="500"
              fontSize="16px"
              onClick={() => disconnect()}
              style={{ zIndex: 1 }}
            >
              {account.slice(0, 4) + "..." + account.slice(-4)}
            </Box>
          ) : (
            <Box
              zIndex={1}
              style={{
                cursor: "pointer",
              }}
              bgcolor="#098CDC"
              width="200px"
              height="42px"
              fontWeight="500"
              borderRadius="8px"
              fontSize="20px"
              color="#ffffff"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => connect()}
            >
              Connect
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
