export const HUNK_DIFF_THEME_NAMES = ["graphite", "midnight", "paper", "ember", "gruvbox"] as const;

export type HunkDiffThemeName = (typeof HUNK_DIFF_THEME_NAMES)[number];
