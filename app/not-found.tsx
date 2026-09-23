import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section notFound">
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1>That page is not here.</h1>
        <p>The link may have changed or the project may not exist.</p>
        <Link className="button" href="/">Return home</Link>
      </div>
    </section>
  );
}
