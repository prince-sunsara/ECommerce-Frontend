import { useState } from "react";
import Sells from "./Sells";
import SellerLanding from "./SellerLanding";

const Seller = () => {
  const [sellerLogin, setSellerLogin] = useState(true);
  return <>{sellerLogin ? <Sells /> : <SellerLanding />}</>;
};

export default Seller;
