import styles from "./Layout.module.css";
import Link from "next/link";
import { Container } from "react-bootstrap";

interface Props {
  children: React.ReactNode;
}

const _Layout = ({ children }: Props) => {
  return (
    <>
      <header className={styles.Header}>
        <nav className={styles.Nav}>
          <Container className={styles.Contenedor}>
            <Link href="/">HOME</Link>
            <Link href="/login">ACCEDER</Link>
          </Container>
        </nav>
      </header>

      <main className={styles.Main}>{children}</main>
    </>
  );
};

export default _Layout;