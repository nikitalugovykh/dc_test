import { RgbaColor } from 'react-colorful';


export const convertRgba = (color: RgbaColor): string => {
    return `rgba(${color.r},${color.g},${color.b},${color.a})`
}