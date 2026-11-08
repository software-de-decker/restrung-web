'use client';

import RsButton from '@/components/rs-button/rs-button';
import { useState } from 'react';

export default function Home() {
    const [disabled, setDisabled] = useState<boolean>(false);

    const onDisabledHandler = () => setDisabled(!disabled);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                gap: '8px',
            }}
        >
            <button onClick={onDisabledHandler}>enable / disable</button>
            <RsButton disabled={disabled} type="primary" text="Primary button" />
            <RsButton
                disabled={disabled}
                type="primary"
                text="Primary outlined button"
                outlined={true}
            />
            <RsButton disabled={disabled} type="secondary" text="Secondary button" />
            <RsButton
                disabled={disabled}
                type="secondary"
                text="Secondary outlined button"
                outlined={true}
            />
            <RsButton disabled={disabled} type="cancel" text="Cancel button" />
            <RsButton
                disabled={disabled}
                type="cancel"
                text="Cancel outlined button"
                outlined={true}
            />
        </div>
    );
}
