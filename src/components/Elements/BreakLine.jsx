

export default function BreakLine({ className = "", ...others }) {
  return (
    <div
      className={`border-t-2 border-gray-300 dark:border-neutral-700 my-4 ${className}`}
      data-testid="breakline"
      {...others}
    ></div>
  );
}
