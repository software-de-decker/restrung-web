interface RsInputProps {
    inputName: string;
    inputType: 'text' | 'password';
    labelText: string;
    onChange: () => void;
}

export default function RsInput({ inputName, inputType, labelText, onChange }: RsInputProps) {
    return (
        <div className="input-container">
            <label className="input-label" htmlFor={inputName}>
                {labelText}
            </label>
            <input
                className="input-field"
                id={inputName}
                name={inputName}
                type={inputType}
                onChange={onChange}
            />
        </div>
    );
}
