import React from "react";
import CartWidget from "./CartWidget";

function NavBar(prop) {

    let msjBienvenida = "Bienvenidx al " + prop.msj  
  return (
    <nav id="main-header">
      <h1>GC BIKINIS</h1>
      <p>{msjBienvenida}! Estas listx?</p>
      <a href="#">HOME</a>
      <a href="#">SHOP</a>
      <a href="#">LOCALES</a>
      <CartWidget />
    </nav>
  );
}

export default NavBar;