import classNames from 'classnames';

export interface TitleProps {
  className?: string;
  children?: React.ReactNode;
}

export function Title({ className, children }: TitleProps) {
  return (
    <h1
      className={classNames(
        'text-3xl',
        'font-bold',
        'font-mono',
        'underline',
        'text-slate-900',
        'dark:text-pink',
        className,
      )}
    >
      {children}
    </h1>
  );
}
