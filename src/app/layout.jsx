import { Poppins } from "next/font/google"
import "../styles/globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] })

export const metadata = {
  title: "Movie details",
  description:
    "App shows movies details such as rating, genre, release date, runtime",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
