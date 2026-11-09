function ArtifactCard({ artifact }) {
  const links = [
    ...(artifact.link && artifact.link !== '#' ? [{ label: 'Link', url: artifact.link }] : []),
    ...(artifact.links || []),
  ];
  // `links` is either a flat list (one wrapping line) or a list of rows, shown as a grid so
  // the columns line up.
  const rows = links.length > 0 && links.every(Array.isArray) ? links : null;
  const columns = rows ? Math.max(...rows.map((row) => row.length)) : 0;

  return (
    <article className="artifact-card">
      <h3>{artifact.title}</h3>
      <p className="artifact-description">{artifact.description}</p>
      <p className="artifact-status">{artifact.status}</p>
      <p className="artifact-reflection">{artifact.reflection}</p>
      {rows && (
        <div className="artifact-links artifact-links-grid" style={{ gridTemplateColumns: `repeat(${columns}, auto)` }}>
          {rows.flatMap((row, r) =>
            row.map((link, i) => (
              <a key={`${r}-${i}`} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
            ))
          )}
        </div>
      )}
      {!rows && links.length > 0 && (
        <div className="artifact-links">
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </div>
      )}
    </article>
  );
}

export default ArtifactCard;
