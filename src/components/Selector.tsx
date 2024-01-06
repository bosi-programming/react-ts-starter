import classNames from 'classnames';

export interface SelectorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelChildren?: React.ReactNode;
  options: { id: string | number; label: React.ReactNode }[];
}

export function Selector({ labelChildren, options, ...rest }: SelectorProps) {
  return (
    <select
      aria-label={labelChildren as string}
      {...rest}
      className={classNames(
        `bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-green
          dark:border-emerald dark:placeholder-emerald dark:text-peach dark:focus:ring-emerald
          outline-none
          dark:focus:border-emerald`,
        rest.className,
      )}
    >
      <option value="default" disabled>
        {labelChildren}
      </option>
      {options.map(({ id, label }) => {
        if (id === 'default') return null;
        return (
          <option key={id} value={id}>
            {label}
          </option>
        );
      })}
    </select>
  );
}
