import '@/styles/globals.css'
import Link from 'next/link'

function TopNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/docs">
            <a>Docs</a>
          </Link>
        </li>
        <li>
          <Link href="/learn">
            <a>Learn</a>
          </Link>
        </li>
        <li>
          <Link href="/templates">
            <a>Templates</a>
          </Link>
        </li>
        <li>
          <Link href="/deploy">
            <a>Deploy</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopNavbar />
      <Component {...pageProps} />
    </>
  )
}
