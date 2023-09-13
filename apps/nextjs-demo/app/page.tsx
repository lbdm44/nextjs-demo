import { Card } from "ui";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Card title="Next.js Demo">
        <p>This is only a test!</p>
      </Card>
    </main>
  );
}
