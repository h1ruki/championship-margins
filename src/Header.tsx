export function Header({ first, last }: { first: number; last: number }) {
  return (
    <header>
      <h1>Championship Margins</h1>
      <p className="subtitle">How dominant was each Formula 1™ champion?</p>
      <p className="meta">{`Drivers' titles · ${first}–${last}`}</p>
    </header>
  );
}
