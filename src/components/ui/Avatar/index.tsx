'use client';

import {
  type AvatarFallbackProps,
  type AvatarImageProps,
  type AvatarProps,
  Fallback,
  Image,
  Root,
} from '@radix-ui/react-avatar';
import { mergeClass } from '@/utils';

function Avatar({ className, ...props }: AvatarProps) {
  return (
    <Root
      className={mergeClass(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className
      )}
      data-slot="avatar"
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <Image
      className={mergeClass('aspect-square size-full', className)}
      data-slot="avatar-image"
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <Fallback
      className={mergeClass(
        'flex size-full items-center justify-center rounded-full bg-muted',
        className
      )}
      data-slot="avatar-fallback"
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
