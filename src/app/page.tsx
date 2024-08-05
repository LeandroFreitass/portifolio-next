import Timeline from "src/components/Timeline";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img
            src="https://pbs.twimg.com/media/Fsb264UWwAEfDid.png"
            alt="Minha Foto"
            className="profile-photo"
          />
          <div className="header-text">
            <h1>Portfólio - Linha do Tempo</h1>
            <p>
              Olá, meu nome é Leandro. Sou um desenvolvedor front-end com
              experiência em React, TypeScript, Next.js e Node.js. Aqui você
              encontrará alguns dos projetos que realizei durante meus estudos.
              Sinta-se à vontade para explorar!
            </p>
          </div>
        </div>
      </header>
      <Timeline />
    </div>
  );
}
