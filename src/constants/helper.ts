import { RgbaColor } from 'react-colorful';

/**
 * @convertRgba функция преобразует цвет из формата RgbaColor в формат читаемый CSS
 * @returns строка цвета в rgba
 */

export const convertRgba = (color: RgbaColor): string => {
    return `rgba(${color.r},${color.g},${color.b},${color.a})`
}