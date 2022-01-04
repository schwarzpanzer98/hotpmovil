import React, { useState } from "react";
import Toggle from "../Toggle";
import styles from "../../styles/BoxToggle.module.css";
import InfoIcon from "../../assets/Icons/InfoIcon";

function BoxToggle({}) {
  const [toggleValue, setToggleValue] = useState(false);

  const handleChange = () => {
    setToggleValue(!toggleValue);
  };
  return (
    <div className={styles.container}>
      <Toggle toggle={toggleValue} onChange={handleChange} />
      <div /* className={styles.title} */>
        <p>
          <strong>Recuperar automaticamente vendas </strong>de cartões com
          limite insuficiente
        </p>
      </div>
      <p className={styles.text}>
        <strong>
          Em uma compra parcelada, se um cartão é negado por saldo insuficiente,
        </strong>{" "}
        cobramos as parcelas em formato de recorrência para tentar evitar que
        você perca a venda
      </p>

      {toggleValue ? (
        <div className={styles.cardContainer}>
          <InfoIcon width={16} height={16} fill={"#355cc0"} />
          <div><p>Como funciona?</p></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BoxToggle;
