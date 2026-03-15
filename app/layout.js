import '../styles/globals.css';

export const metadata = {
  title: 'The Power Gym - Sandeep Joshi',
  description: 'Where champions are forged. Premium fitness facility redefining what it means to train hard.',
  keywords: `
  The Power Gym Govindpuri,
  Power Gym Govindpuri Delhi,
  Best gym in Govindpuri,
  Gym in Govindpuri Delhi,
  Best gym in Kalkaji,
  Gym near Kalkaji Delhi,
  Gym near Govindpuri Metro Station,
  Sandeep Joshi gym,
  Sandeep Joshi Power Gym,
  Bodybuilding gym in Govindpuri,
  Fitness training Govindpuri Delhi,
  Personal training Govindpuri,
  Strength training gym Govindpuri,
  Premium gym in South Delhi,
  Sandeep Fitness gym , 
  Sandeep gym in govindpuri
  `,
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
