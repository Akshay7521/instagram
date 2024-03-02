import React from "react";
import { Inter } from "next/font/google";
import {Container, Typography} from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <Container maxWidth={'xl'}>
     <Typography variant="h6" > Instagram</Typography>
   </Container>
  );
}
