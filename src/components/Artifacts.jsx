import ArtifactCard from './ArtifactCard.jsx';
import artifacts from '../data/artifacts.js';

function Artifacts() {
  return (
    <section id="artifacts" className="section">
      <h2>Artifacts</h2>
      <div className="artifact-grid">
        {artifacts.map((artifact, index) => (
          <ArtifactCard key={index} artifact={artifact} />
        ))}
      </div>
    </section>
  );
}

export default Artifacts;
