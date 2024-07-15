'use client'
import React from 'react';
import { useQRCode } from 'next-qrcode';

export default function WaQr() {
    const { Canvas } = useQRCode();

    return (
        <Canvas
            text={'https://wa.me/qr/5TJMIFC46AWBA1'}
            options={{
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                    dark: '#010599FF',
                    light: '#FFBF60FF',
                },
            }}
        />
    );
}