function ArtifactCard({ artifact }) {
  const links = [
    ...(artifact.link && artifact.link !== '#' ? [{ label: 'Link', url: artifact.link }] : []),
    ...(artifact.links || []),
  ];

  return (
    <article className="artifact-card">
      <h3>{artifact.title}</h3>
      <p className="artifact-description">{artifact.description}</p>
      <p className="artifact-status">{artifact.status}</p>
      <p className="artifact-reflection">{artifact.reflection}</p>
      {links.length > 0 && (
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
