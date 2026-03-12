import '../styles/globals.css';

export const metadata = {
  title: 'IRONFORGE — Premium Fitness',
  description: 'Where champions are forged. Premium fitness facility redefining what it means to train hard.',
  keywords: 'gym, fitness, premium, training, ironforge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
