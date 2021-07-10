import React, { useState, useEffect } from "react";
import axios from "axios";

const Partidos = () => {
  const [partidosBoca, guardarPartidosBoca] = useState();

  useEffect(() => {
    traerPartidosDeBoca();
  }, []);

  const traerPartidosDeBoca = async () => {
    const respuesta = await axios.get(
      "https://v3.football.api-sports.io/fixtures?team=451&next=5&timezone=America/Argentina/Buenos_Aires",
      {
        headers: {
          "x-apisports-key": "c8016f67da915288809080bcdc006220",
        },
      }
    );
    
    guardarPartidosBoca(respuesta.data.response);
  };

  return (
    <div>
      <h3>Partidos de boca</h3>
      {partidosBoca
        ? partidosBoca.map((partido) => (
            <div className="contenedorPartido">
              <h6>{partido.league.name}</h6>
              <div className="contenedorInformacion">
                <div>
                  <img
                    src={partido.teams.home.logo}
                    style={{ width: "50px" }}
                  />
                  <h6>{partido.teams.home.name}</h6>
                </div>
                <div>Este martes </div>
                <div>
                  <img
                    src={partido.teams.away.logo}
                    style={{ width: "50px" }}
                  />
                   <h6>{partido.teams.away.name}</h6>
                </div>
              </div>
            </div>
          ))
        : <h1>Cargando...</h1>}
    </div>
  );
};

export default Partidos;
