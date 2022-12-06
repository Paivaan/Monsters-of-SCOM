import React, {useContext} from "react";

import AuthRotas from "./auth.routes";
import Rotas from "./app.routes";

import { SignedConxtext } from "../contexts/SignedContext";

const AllRotas = () => {
   const { signed } = useContext(SignedConxtext);

   return signed ? (
      <Rotas />
   ) : 
   <AuthRotas />;
}
export default AllRotas;