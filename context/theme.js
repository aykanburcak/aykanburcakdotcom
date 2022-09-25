import {createContext, useContext, useEffect, useState} from "react";
import {fetchApi} from "../services";

const Context = createContext();


export function ThemeProvider({children}) {
  const [settings, setSettings] = useState([])

  useEffect(() => {
    fetchApi('site-setting?populate=*')
      .then((res)=> {
        setSettings(res.attributes)
      })
  }, [])

  return (
    <Context.Provider value={[settings, setSettings]}>{children}</Context.Provider>
  );
}

export function useThemeContext() {
  return useContext(Context);
}
