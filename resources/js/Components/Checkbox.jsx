export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray text-chaugreen shadow-sm focus:ring-chaugreen ' +
                className
            }
        />
    );
}
