
import Navbar from './components/Navbar';
import './globals.css'; // Include your global styles
import { Playfair_Display } from '@next/font/google';

// Load the Playfair Display font
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and Bold weights
  variable: '--font-playfair', // Optional: CSS variable
});

export const metadata = {
  title: 'My Next.js App',
  description: 'An example Next.js layout with Playfair Display font',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfairDisplay.variable}>
      <body>
       <Navbar/>
        <main className="p-4">{children}</main>
        
      </body>
    </html>
  );
}

