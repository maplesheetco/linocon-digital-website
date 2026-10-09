import { useMemo } from 'react'
import { transform, useTransform } from 'framer-motion'

// Maps scroll progress onto a style value, clamped to the output range.
// Equivalent to useTransform(progress, input, output), but going through a
// plain function keeps framer-motion from handing opacity to a native scroll
// timeline, which ignores the input range in Chrome and fades things back in.
export function useScrollRange(progress, input, output) {
  const map = useMemo(() => transform(input, output), [...input, ...output])
  return useTransform(progress, map)
}
