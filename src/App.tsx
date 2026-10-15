const LINKEDIN_URL = 'https://www.linkedin.com/in/ren-menon-13299418'
const GITHUB_URL = 'https://github.com/renjanmenon'

function App() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16 sm:py-24">
      <h1 className="text-2xl font-semibold">Ren Menon</h1>

      <div className="mt-6 space-y-4 leading-relaxed text-neutral-700">
        <p>
          I'm a software engineer. Most of my work has been on enterprise
          teams, often as a contractor, building the systems large companies
          run on.
        </p>
        <p>
          This site is where I learn in public. I build small projects, compare
          tools and languages, and write about what I find. Topics include
          goroutines vs Rust vs Java, and how a senior engineer keeps learning
          in the age of AI.
        </p>
        <p>Writing and projects are coming soon.</p>
      </div>

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
