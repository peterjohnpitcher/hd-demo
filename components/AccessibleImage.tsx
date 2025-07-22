import Image from 'next/image';

interface AccessibleImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
  longDescription?: string;
  caption?: string;
}

export default function AccessibleImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  decorative = false,
  longDescription,
  caption,
}: AccessibleImageProps) {
  // If the image is decorative, use empty alt text
  const imageAlt = decorative ? '' : alt;
  
  // Generate a unique ID for aria-describedby if needed
  const descriptionId = longDescription ? `img-desc-${Math.random().toString(36).substr(2, 9)}` : undefined;

  return (
    <figure className={className}>
      {width && height ? (
        <Image
          src={src}
          alt={imageAlt}
          width={width}
          height={height}
          priority={priority}
          aria-describedby={descriptionId}
          role={decorative ? 'presentation' : undefined}
        />
      ) : (
        <img
          src={src}
          alt={imageAlt}
          className="img-responsive"
          aria-describedby={descriptionId}
          role={decorative ? 'presentation' : undefined}
        />
      )}
      
      {longDescription && (
        <div id={descriptionId} className="sr-only">
          {longDescription}
        </div>
      )}
      
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}