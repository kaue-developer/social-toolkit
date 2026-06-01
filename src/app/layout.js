import './globals.css';
import { Open_Sans } from 'next/font/google';

const opensans = Open_Sans({
    weight: ["600", "700"]
});

//Layout persistente
export default function RootLayout({ children }) {
    return(
        <html lang="pt-BR" className={opensans.className}>
            <body>
                {children}
            </body>
        </html>
    );
}