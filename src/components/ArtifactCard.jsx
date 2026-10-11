function ArtifactCard({ artifact }) {
  return (
    <article className="artifact-card">
      <h3>{artifact.title}</h3>
      <p className="artifact-description">{artifact.description}</p>
      <p className="artifact-status">{artifact.status}</p>
      <p className="artifact-reflection">{artifact.reflection}</p>
      {artifact.link && artifact.link !== '#' && (
        <a href={artifact.link} target="_blank" rel="noreferrer">Link</a>
      )}
      {artifact.links && artifact.links.length > 0 && (
        <div className="artifact-links">
          {artifact.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </div>
      )}
    </article>
  );
}

export default ArtifactCard;
