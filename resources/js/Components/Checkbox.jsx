export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-pearlbush text-tahitigold shadow-sm focus:ring-tahitigold ' +
                className
            }
        />
    );
}
