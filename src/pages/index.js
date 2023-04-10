```diff
diff --git a/src/pages/index.js b/src/pages/index.js
index cde7205..56998bc 100644
--- a/src/pages/index.js
+++ b/src/pages/index.js
@@ -16,6 +16,14 @@
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
+         <nav className={styles.nav}>
+           <a href="/docs">Docs</a>
+           <a href="/learn">Learn</a>
+           <a href="/templates">Templates</a>
+           <a href="/deploy">Deploy</a>
+         </nav>
          <div className={styles.description}>
            <p>
              Get started by editing&nbsp;
```