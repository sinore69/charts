import React from 'react';

export function Card({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white shadow-md ${className}`}
      {...props}
    />
  );
}

export function CardContent({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`p-6 ${className}`}
      {...props}
    />
  );
}

