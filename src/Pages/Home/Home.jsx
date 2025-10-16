import React from "react";
import { Hero } from "./Hero/Hero";
import { Servicios } from "./Servicios/Servicios";
import { Turnos } from "./Turnos/Turnos";
import { About } from "./About/About";
import { Contacto } from "./Contacto/Contacto";

export const Home = () => {
  return (
    <>
      <Hero />
      <Servicios />
      <Turnos />
      <About />
      <Contacto />
    </>
  );
};
