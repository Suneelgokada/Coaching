import "./globals.css";

export const metadata = {
  title: "VTC Corporation - Building Materials Supplier",
  description: "Quality building materials at best prices",
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