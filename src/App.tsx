const LINKEDIN_URL = 'https://www.linkedin.com/in/ren-menon-13299418'

function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Ren Menon</h1>
      <p className="mt-4 text-neutral-600">
        I'm a software engineer. This site is where I'm learning TypeScript,
        React, and deployment in public.
      </p>
      <ul className="mt-8 space-y-2">
        <li>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-neutral-500"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </main>
  )
}

export default App
