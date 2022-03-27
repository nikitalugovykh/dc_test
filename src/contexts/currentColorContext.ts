import React from "react"

/**
 * @CurrentColorContext контекст для работы с активным цветом в palette, через контекст пробрасывается id активного цвета, у cb для его изменения
 */

export const CurrentColorContext = React.createContext<[number, React.Dispatch<React.SetStateAction<number>>]>([0 , ()=> {}])