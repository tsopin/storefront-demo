const SingleSpace = 8;

const spacing = (space: number) => {
  return space * SingleSpace;
};

export type BorderWidth = 'thin' | 'standard' | 'thick';
const borderWidths = {
  thin: 1,
  standard: 2,
  thick: 3,
};

export function borderWidth(size: BorderWidth = 'standard'): number {
  return borderWidths[size];
}

export const InsetValues: Record<Inset, number> = {
  none: 0,
  small: spacing(2),
  large: spacing(4),
};

export type Inset = 'small' | 'large' | 'none';

export const CornerRadius = {
  small: spacing(1),
  medium: spacing(2),
  large: spacing(4),
};

export const Spacing = {
  HalfPoint: spacing(0.5),
  XSmall: spacing(1),
  Small: spacing(2),
  Medium: spacing(3),
  Large: spacing(4),
  XLarge: spacing(8),
  XXLarge: spacing(10),
};
