import React from "react"

export const CurrentColorContext = React.createContext<[number, React.Dispatch<React.SetStateAction<number>>]>([0 , ()=> {}])