import '../index.css';

export const metadata = {
    title: 'IIBS ERP Portal',
    description: 'International Institute of Business Studies ERP',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
