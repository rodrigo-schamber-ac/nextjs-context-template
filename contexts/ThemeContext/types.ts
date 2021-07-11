export enum Theme {
    Dark = 'Dark',
    Light = 'Light',
}

export type ThemeContextState = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
};