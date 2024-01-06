import classNames from 'classnames';

export interface ParagraphProps {
  className?: string;
  children?: React.ReactNode;
}

export function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={classNames(
        'text-base',
        'lg:text-lg',
        'pt-2',
        'pb-2',
        'font-mono',
        'text-slate-900',
        'dark:text-peach',
        'leading-relaxed',
        className,
      )}
    >
      {children}
    </p>
  );
}
