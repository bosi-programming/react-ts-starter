import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const baseClasses = [
  'text-center',
  'w-6/12',
  'rounded',
  'border',
  'px-4',
  'py-2',
  'font-mono',
  'font-bold',
  'text-slate-900',
];

const darkClasses = ['dark:text-white'];

export function Button({
  onClick,
  disabled,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={classNames(className, [...baseClasses, ...darkClasses])}
      role="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
