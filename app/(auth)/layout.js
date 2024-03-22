import { Inter } from "next/font/google";
import '../globals.css'
import ToasterContest from '@components/ToasterContest'
import Provider from "@components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth Chat",
  description: "Authentication Layout for Chat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-1`}>
        <Provider>
          <ToasterContest />
          {children}
        </Provider>
        </body>
    </html>
  );
}
