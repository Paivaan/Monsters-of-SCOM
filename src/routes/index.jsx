import React, { useContext } from "react";

import AuthRotas from "./auth.routes";
import Rotas from "./app.routes";

import { SignedConxtext } from "../contexts/SignedContext";
import { SelfDestructionContext } from "../contexts/SelfDestructionContext";

const AllRotas = () => {
   const { signed } = useContext(SignedConxtext)
   const { delet } = useContext(SelfDestructionContext)

   return (
      delet ? null :
         signed ? (
            <Rotas />
         ) :
            <AuthRotas />
   )
}
export default AllRotas;