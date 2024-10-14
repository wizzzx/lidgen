import styles from './index.module.scss'
import {PropsWithChildren} from "react";

export default function ContainerLayout({ children }: PropsWithChildren) {
    return <div className={styles.main_container}>{children}</div>
}