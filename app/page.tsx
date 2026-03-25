import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-shell">
      <section className="hero-card">
        <p className="eyebrow">AstrologyToday.ca</p>
        <h1>Love Computer</h1>
        <p className="hero-copy">
          Build relationship charts from two birth-sign sets, then turn each planetary
          connection into a readable report instead of a manual Pages document.
        </p>

        <div className="hero-actions">
          <Link href="/love-computer" className="primary-link">
            Open Love Computer
          </Link>
        </div>
      </section>
    </main>
  );
}
