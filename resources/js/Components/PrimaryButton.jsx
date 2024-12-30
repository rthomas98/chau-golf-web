export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-full border-2 border-chaugreen bg-chaugreen px-6 py-2 text-sm font-medium text-white transition-all duration-150 ease-in-out hover:bg-transparent hover:text-chaugreen focus:outline-none focus:ring-2 focus:ring-chaugreen focus:ring-offset-2 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
