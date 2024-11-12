import * as React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface DropDownMenuItemProps {
  title: string;
  route: string;
}

interface Props {
  data: DropDownMenuItemProps[];
  className?: string;
}

const DropDownMenuItem: React.FC<DropDownMenuItemProps> = ({
  title,
  route,
}) => {
  return (
    <div className={styles.menu_item_container}>
      <Link href={route} className={styles.item_title}>
        {title}
      </Link>
    </div>
  );
};

export const DropDownMenu: React.FC<Props> = ({ data, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn(styles.container, className)}>
      <button onClick={handleOpen}>
        <Image
          src={"/assets/icons/ui/menu.svg"}
          alt={"menu_icon"}
          priority={true}
          width={20}
          height={12}
        />
      </button>
      {isOpen ? (
        <div className={styles.menu_container}>
          {data.map((item, index) => (
            <DropDownMenuItem
              title={item.title}
              route={item.route}
              key={index}
            />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
