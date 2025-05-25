export function classNames(flags: { [className: string]: boolean; }) {
  return Object.entries(flags)
    .filter(([_, value]) => !!value)
    .map(([key, _]) => key)
    .join(" ");
}