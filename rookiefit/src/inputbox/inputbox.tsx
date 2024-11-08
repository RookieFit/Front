import { ChangeEvent, forwardRef, KeyboardEvent } from 'react';
import './style.css';

interface Props {
    title?: string;
    placeholder: string;
    type: 'text' | 'password';
    value: string;
    message?: string;
    isErrorMessage?: boolean;
    buttonTitle?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeydown: (event: KeyboardEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void;
}

const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    const {
        title,
        placeholder,
        type,
        value,
        message,
        isErrorMessage = false,
        buttonTitle,
        onChange,
        onKeydown,
        onButtonClick,
    } = props;

    // 버튼 스타일 및 메시지 스타일 클래스명 설정
    const buttonClassName = value === '' ? 'input-box-button-disable' : 'input-box-button';
    const messageClassName = isErrorMessage ? 'input-box-message-error' : 'input-box-message';
    
    return (
        <div className="input-box full-width">
            {title && <div className="input-box-title">{title}</div>}
            <div className="input-box-content">
                <div className="input-box-body">
                    <input
                        ref={ref}
                        className="input-box-input"
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        onKeyDown={onKeydown}
                    />
                    {buttonTitle && onButtonClick && (
                        <button className={buttonClassName} onClick={onButtonClick}>
                            {buttonTitle}
                        </button>
                    )}
                </div>
                {message && <div className={messageClassName}>{message}</div>}
            </div>
        </div>
    );
});

export default InputBox;