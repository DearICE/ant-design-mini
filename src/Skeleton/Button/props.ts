import { ISkeletonBaseProps } from '../props';

export interface SkeletonButtonProps extends ISkeletonBaseProps {
  size?: 'small' | 'medium' | 'large';
}

export const SkeletonButtonDefaultProps: Partial<SkeletonButtonProps> = {
  loading: true,
  size: 'medium',
};
