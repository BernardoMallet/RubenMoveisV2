export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer'

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-900 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:opacity-50',
    ghost: 'text-primary-600 hover:underline active:text-primary-700 disabled:opacity-50'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg'
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
