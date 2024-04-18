import { DarkMode, Gradient, LightMode } from '../Icon'

export function CursorIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 12 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 16 7)"
        />
      </defs>
      <LightMode>
        <circle cx={12} cy={12} r={12} fill={`url(#${id}-gradient)`} />
        <path
          d="m4 4 7.07 17 2.51-7.39L21 11.07z"
          fillOpacity={0.5}
        //   className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          className="lucide lucide-mouse-pointer-2"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </LightMode>
      <DarkMode>
        <path
          d="m4 4 7.07 17 2.51-7.39L21 11.07z"
          fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </DarkMode>
    </>
  )
}
