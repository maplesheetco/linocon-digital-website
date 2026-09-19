import { motion } from 'framer-motion'

export default function Reveal({
  children,
  as: Component = motion.div,
  delay = 0,
  y = 28,
  className = '',
  ...rest
}) {
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}
