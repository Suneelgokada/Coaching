import "./globals.css";

export const metadata = {
  title: "Coding Roots - Your Trusted Tech Partner",
  description: "Coding Roots is a leading technology solutions provider specializing in web and mobile application development, delivering innovative and customized software solutions to businesses worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Force Poppins loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}