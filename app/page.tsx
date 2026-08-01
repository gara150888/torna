import { Typewriter, Reveal } from "./components";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <section className="relative border-b border-text-secondary/15">
          <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:py-40">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                A journal for the unhurried
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 font-display text-4xl font-medium leading-[1.15] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                <Typewriter text="Write to understand." />
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-text-secondary">
                Torna is a quiet space to think in writing. No prompts, no
                templates — just you and the page.
              </p>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-background transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Start your first entry
                </a>
                <a
                  href="#practice"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-text-secondary/25 px-7 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  How it works
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-text-secondary/15">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="grid gap-10 sm:grid-cols-3">
              <Reveal delay={0}>
                <div className="flex flex-col">
                  <h3 className="font-display text-xl font-medium text-text-primary">
                    Write freely
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    No templates or prompts. Let the page stay blank until you
                    fill it.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="flex flex-col">
                  <h3 className="font-display text-xl font-medium text-text-primary">
                    Notice patterns
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    Gentle insights surface from your own reflections, not from
                    algorithms.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-col">
                  <h3 className="font-display text-xl font-medium text-text-primary">
                    Return daily
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    A calm, consistent ritual that grows with you over time.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="practice" className="border-b border-text-secondary/15">
          <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
            <Reveal>
              <div className="flex flex-col gap-12 sm:flex-row sm:gap-16">
                <div className="sm:w-1/3">
                  <h2 className="font-display text-2xl font-medium text-text-primary sm:text-3xl">
                    A simple practice
                  </h2>
                </div>
                <div className="flex-1 space-y-10">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      One
                    </p>
                    <p className="mt-2 font-display text-xl font-medium text-text-primary">
                      Open the page
                    </p>
                    <p className="mt-2 text-sm text-text-secondary">
                      No inbox to clear. No feed to scroll. Just a blank page,
                      waiting.
                    </p>
                  </div>
                  <hr className="border-text-secondary/15" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      Two
                    </p>
                    <p className="mt-2 font-display text-xl font-medium text-text-primary">
                      Write what you feel
                    </p>
                    <p className="mt-2 text-sm text-text-secondary">
                      One thought, one memory, one question. Whatever is present
                      for you right now.
                    </p>
                  </div>
                  <hr className="border-text-secondary/15" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      Three
                    </p>
                    <p className="mt-2 font-display text-xl font-medium text-text-primary">
                      Come back tomorrow
                    </p>
                    <p className="mt-2 text-sm text-text-secondary">
                      Small returns compound. Over weeks, you will see what you
                      could not see alone.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-text-secondary/15">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
            <Reveal>
              <h2 className="font-display text-3xl font-medium text-text-primary sm:text-4xl">
                Start your return.
              </h2>
              <p className="mt-4 text-text-secondary">
                The first entry is the hardest part. Make it easy.
              </p>
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-9 text-base font-medium text-background transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Begin returning
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-sm text-text-secondary">
          Torna. Return to what matters.
        </div>
      </footer>
    </>
  );
}
