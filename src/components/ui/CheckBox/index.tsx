import React from "react";
import cn from "classnames";
import styles from "./index.module.scss";

interface Props {
  className?: string;
  label: string;
  span?: string;
}

export const CheckBox: React.FC<Props> = ({ className, label, span }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={cn(styles.container, className)}>
      <input
        type="checkbox"
        id={"custom_checkbox"}
        checked={checked}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <label htmlFor={"custom_checkbox"} className={styles.label}>
        <span className={styles.span}>{span}</span>
        {label}
      </label>
    </div>
  );
};
