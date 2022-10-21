import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import {useThemeContext} from "../context/theme";

export default function Layout({ children }) {
  const [settings, setSettings] = useThemeContext()

  return (
    <>
      <Header settings={settings} />
        <main>{children}</main>
      <Footer settings={settings} />
    </>
  )
}
