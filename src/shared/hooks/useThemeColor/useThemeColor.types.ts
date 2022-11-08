import type { Colors } from '../../constants'

export type useThemeColorInput = {
    colorScheme: {
        dark?: string
        light?: string
    }
    /*
     * Name of the component surface the theme will be applied to
     */
    surfaceName: keyof typeof Colors.dark & keyof typeof Colors.light
}

