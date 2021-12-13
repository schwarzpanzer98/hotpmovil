import React, { useState, useEffect } from 'react';
import styles from '../../styles/Label.module.css';

const Label = ({ name, active, updateList }) => {
  const [on, setOn] = useState(active);

  useEffect(() => {
    updateList(on, name);
  }, [on, name]);

  if (on)
    return (
      <span className={styles.onLabel}
        onClick={() => {
          setOn(!on);
        }}
      >
        {name}
      </span>
    );

  return (
    <span className={styles.offLabel}
      onClick={() => {
        setOn(!on);
      }}
    >
      {name}
    </span>
  );
};

export default Label;