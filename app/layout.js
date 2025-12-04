export const metadata = {
  title: 'Apprendre le Turc',
  description: 'Application interactive pour apprendre le turc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
