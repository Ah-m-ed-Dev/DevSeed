export const metadata = {
  title: "DevSeed",
  description: "start your online presence ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
