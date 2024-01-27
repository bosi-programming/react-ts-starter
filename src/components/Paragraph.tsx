import classNames from 'classnames';

export interface ParagraphProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function Paragraph({ className, onClick, children }: ParagraphProps) {
  return (
    <p
      onClick={onClick}
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
