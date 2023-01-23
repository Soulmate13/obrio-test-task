import { ImageProps } from 'next/dist/client/image';
import Image from 'next/image';
import { useState } from 'react';

interface IProps extends ImageProps {
  src: string;
  fallback?: string;
}

function ImageWithFallback({ src, alt, fallback = './no-photo-placeholder.jpg', ...rest }: IProps) {
  const [errorSrc, setErrorSrc] = useState<string>('');

  const imageSrc = !!errorSrc ? errorSrc : !!src ? `${src}` : `${fallback}`;

  const onError = () => setErrorSrc(fallback);

  return (
    <Image
      src={imageSrc}
      onError={onError}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAoElEQVR42u3RAQ0AMAgAoJvhNjGg1a3hHFQg8lc/1gghQhAiBCFCECIEIUKECEGIEIQIQYgQhAhBCEKEIEQIQoQgRAhCECIEIUIQIgQhQhCCECEIEYIQIQgRghCECEGIEIQIQYgQhCBECEKEIEQIQoQgBCFCECIEIUIQIgQhCBGCECEIEYIQIQhBiBCECEGIEIQIQYgQIUIQIgQhQhBy3QA3K1UpQ1+KlAAAAABJRU5ErkJggg=="
      alt={alt}
      {...rest}
    />
  );
};

export default ImageWithFallback;
