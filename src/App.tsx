const LINKEDIN_URL = 'https://www.linkedin.com/in/ren-menon-13299418'
const GITHUB_URL = 'https://github.com/renjanmenon'

function App() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16 sm:py-24">
      <h1 className="text-2xl font-semibold">Ren Menon</h1>

      <p className="mt-6 leading-relaxed text-neutral-700">
        I'm a senior software engineer.
      </p>

      <ul className="mt-8 flex gap-6">
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
        <li>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-neutral-500"
          >
            GitHub
          </a>
        </li>
      </ul>
    </main>
  )
}

export default App
