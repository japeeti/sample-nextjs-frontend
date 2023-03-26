import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="light-mode">
      <Component {...pageProps} />
    </div>
  )
}