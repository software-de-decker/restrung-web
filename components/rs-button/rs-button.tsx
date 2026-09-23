import './rs-button.scss';

interface RsButtonProps {
    type: 'primary' | 'secondary' | 'cancel';
    text: string;
    outlined?: boolean;
    disabled?: boolean;
}

export default function RsButton({
    type,
    text,
    outlined = false,
    disabled = false,
}: RsButtonProps) {
    return (
        <button disabled={disabled} className={`btn ${outlined ? `${type}-outlined` : type}`}>
            {text}
        </button>
    );
}
