export function Button({ children, ...props }) {
  return <button {...props} className='p-2 rounded'>{children}</button>;
}