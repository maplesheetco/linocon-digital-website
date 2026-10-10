// Service illustrations for the homepage: pre-rendered
// WebP images in public/images, with a smaller copy for phones.

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

export function ServiceImage({ name, alt }) {
  return (
    <img
      src={img(`${name}-900.webp`)}
      srcSet={`${img(`${name}-600.webp`)} 600w, ${img(`${name}-900.webp`)} 900w`}
      sizes="(min-width: 768px) 480px, 100vw"
      width="900"
      height="675"
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full max-w-lg h-auto"
    />
  )
}
