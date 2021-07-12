export enum Theme {
    Portuguese = 'Portuguese',
    English = 'English',
}

export type ThemeContextState = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
};