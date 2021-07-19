export enum Theme {
  Portuguese = 'Portuguese',
  English = 'English'
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
};
