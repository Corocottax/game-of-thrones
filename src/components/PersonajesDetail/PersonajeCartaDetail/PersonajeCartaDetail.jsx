import React from "react";
import "./PersonajeCartaDetail.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "simplebar-react/dist/simplebar.min.css";
import { FormattedMessage } from "react-intl";

const PersonajeCartaDetail = ({ character, casas }) => {
  let encontrada = false;

  return (
    <div>
      <div className="cabecera">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
      </div>

      <div className="info">
        <div className="infoDetalle">
          <FormattedMessage id="house" defaultMessage="CASA" />
          {casas &&
            casas.map((casa, index) => {
              if (casa.name === character.house) {
                encontrada = true;

                if (!casa.logoURL) {
                  console.log("no tiene escudo");
                  return (
                    <img
                      key={index}
                      className="escudo"
                      src="/got-house.png"
                      alt={character.house}
                    />
                  );
                } else {
                  console.log("tiene escudo");
                  return (
                    <img
                      key={index}
                      className="escudo"
                      src={casa.logoURL}
                      alt={character.house}
                    />
                  );
                }
              } else {
                return null;
              }
            })}

          {!encontrada && (
            <img
              className="escudo"
              src="/got-house.png"
              alt={character.house}
            />
          )}
        </div>
        <div className="infoDetalle">
          <FormattedMessage id="Ali" defaultMessage="ALIANZAS" />
          <SimpleBar className="barra" style={{ maxHeight: 200 }}>
            <ul className="ul">
              {character && character.allegiances.length > 0
                ? character.allegiances.map((alianza, index) => {
                    return (
                      <li className="li" key={index}>
                        {alianza}
                      </li>
                    );
                  })
                : null}
            </ul>
          </SimpleBar>
        </div>
        <div className="infoDetalle">
          <FormattedMessage id="apariciones" defaultMessage="APARICIONES" />
          <SimpleBar className="barra" style={{ maxHeight: 200 }}>
            <ul className="ul">
              {character && character.appearances.length > 0
                ? character.appearances.map((aparicion, index) => {
                    return (
                      <li className="li" key={index}>
                        {aparicion}
                      </li>
                    );
                  })
                : null}
            </ul>
          </SimpleBar>
        </div>
        <div className="infoDetalle">
          <FormattedMessage id="padre" defaultMessage="PADRE" />
          {character.father ? (
            <p className="li">{character.father}</p>
          ) : (
            <p className="li">He went for cigarretes</p>
          )}
        </div>
        <div className="infoDetalle">
          <FormattedMessage
            id="descendientes"
            defaultMessage="DESCENDIENTES"
          />
          <SimpleBar className="barra" style={{ maxHeight: 200 }}>
            <ul className="ul">
              {character && character.siblings.length > 0 ? (
                character.siblings.map((descendiente, index) => {
                  return (
                    <li className="li" key={index}>
                      {descendiente}
                    </li>
                  );
                })
              ) : (
                <p className="li">No tiene descendientes</p>
              )}
            </ul>
          </SimpleBar>
        </div>
        <div className="infoDetalle">
          <FormattedMessage id="titulos" defaultMessage="TITULOS" />
          <SimpleBar className="barra" style={{ maxHeight: 200 }}>
            <ul className="ul">
              {character && character.titles.length > 0 ? (
                character.titles.map((title, index) => {
                  return (
                    <li className="li" key={index}>
                      {title}
                    </li>
                  );
                })
              ) : (
                <p className="li">No tiene títulos</p>
              )}
            </ul>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};

export default PersonajeCartaDetail;
