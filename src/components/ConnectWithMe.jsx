import { useState } from 'react';

function ConnectWithMe() {
  const [copied, setCopied] = useState(false);

  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText('danyo.');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy Discord tag', err);
    }
  }

  return (
    <section id="connect" className="section">
      <h2>Connect with Me</h2>
      <p>
        I'm always around. You can find me on GitHub or Steam. Click the Discord button to copy my tag.
      </p>
      <div className="connect-buttons">
        <a className="connect-btn" href="https://github.com/DanTheDev-zsh" target="_blank" rel="noreferrer">
          GitHub (DanTheDev-zsh)
        </a>
        <a className="connect-btn" href="https://github.com/dxu13UW" target="_blank" rel="noreferrer">
          GitHub (dxu13UW)
        </a>
        <a className="connect-btn" href="https://steamcommunity.com/profiles/76561198342365656/" target="_blank" rel="noreferrer">
          Steam Profile
        </a>
        <button className="connect-btn" onClick={copyDiscord}>
          {copied ? 'Copied!' : 'Copy Discord Tag'}
        </button>
      </div>
    </section>
  );
}

export default ConnectWithMe;
