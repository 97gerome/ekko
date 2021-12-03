
interface ButtonProps {
    label: string;
    onClick: Function;
}

const Button = (props: ButtonProps) => {

    const { label, onClick } = props;

    return (
        <button onClick={() => onClick()}>
            {label}
        </button>
    );
}

export default Button;