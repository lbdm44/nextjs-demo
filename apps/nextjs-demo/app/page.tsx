import { Card } from "ui";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Card href="https://nextjs.org/" title="Next.js">
        <p>
          Edit <code>app/page.tsx</code> and save to test HMR
        </p>
      </Card>
    </main>
  );
}
