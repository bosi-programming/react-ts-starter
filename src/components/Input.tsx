import classNames from 'classnames';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelChildren?: React.ReactNode;
}

export function Input({ labelChildren, ...rest }: InputProps) {
  return (
    <input
      aria-label={labelChildren as string}
      placeholder={labelChildren as string}
      type="text"
      {...rest}
      className={classNames(
        `bg-gray-50 border border-gray-300 text-gray-900
          mb-6 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 p-2.5 dark:bg-green dark:border-emerald
          outline-none
          dark:placeholder-peach dark:text-peach 
          dark:focus:ring-emerald
          dark:focus:border-emerald`,
        rest.className,
      )}
    />
  );
}
