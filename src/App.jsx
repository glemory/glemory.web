import React from "react";

export default function App() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border header-fixed">
        <div className="container-minimal flex items-center justify-between px-4 py-2">
          <a href="/" className="text-xl font-medium text-white no-underline">Nexus Ferraro</a>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#services" className="text-sm text-white no-underline">Serviços</a>
            <a href="#work" className="text-sm text-white no-underline">Nosso trabalho</a>
            <a href="#contact" className="text-sm text-white no-underline">Contato</a>
            <a href="#quote" className="minimal-button-filled text-sm ml-4">Solicite um orçamento</a>
          </nav>

          <div className="md:hidden">
            {/* botão simples para mobile — você pode trocar por um menu real */}
            <button className="minimal-button px-3 py-1">Menu</button>
          </div>
        </div>
      </header>

      <main className="main-with-header">
        {/* Hero */}
        <section className="section-minimal container-minimal flex flex-col items-start gap-6 px-4 py-12">
          <h1 className="text-4xl sm:text-5xl font-light leading-tight">
            Soluções tecnológicas personalizadas para inovação e crescimento
          </h1>
          <p className="text-minimal-muted max-w-2xl">
            Somos uma assistência técnica comprometida a oferecer manutenção de qualidade com transparência, ética, respeito,
            agilidade, eficiência e preço justo.
          </p>

          <div className="flex gap-3 mt-4">
            <a href="#work" className="minimal-button-filled px-4 py-2">Nosso trabalho</a>
            <a href="#contact" className="minimal-button px-4 py-2">Entre em contato</a>
          </div>
        </section>

        {/* Serviços */}
        <section id="services" className="section-minimal container-minimal bg-black/0 px-4 py-12">
          <h2 className="text-2xl mb-4">Nossos Serviços</h2>
          <p className="card-description mb-6">Oferecemos soluções completas para os seus instrumentos médicos!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="minimal-card p-6">
              <h3 className="card-title">Equipamentos de Diagnóstico</h3>
              <p className="card-description mt-2">
                Manutenção corretiva e preventiva de equipamentos de diagnóstico por imagem, como ultrassons, eletrocardiógrafos,
                monitores multiparamétricos, entre outros.
              </p>
            </div>

            <div className="minimal-card p-6">
              <h3 className="card-title">Instrumentos Cirúrgicos</h3>
              <p className="card-description mt-2">
                Reparo e manutenção de instrumentos cirúrgicos oftalmológicos, odontológicos, ortopédicos, entre outros.
              </p>
            </div>
          </div>
        </section>

        {/* Nosso trabalho (ancora) */}
        <section id="work" className="section-minimal container-minimal px-4 py-12">
          <h2 className="text-2xl mb-4">Nosso trabalho</h2>
          <p className="card-description">Exemplos do trabalho realizado.</p>
        </section>

        {/* Contato */}
        <section id="contact" className="section-minimal container-minimal px-4 py-12">
          <h2 className="text-2xl mb-4">Contato</h2>
          <p className="card-description">Formas de contato e formulário.</p>
        </section>

        <footer className="border-t border-border py-8">
          <div className="container-minimal px-4">
            <p className="text-minimal-muted">© {new Date().getFullYear()} Nexus Ferraro</p>
          </div>
        </footer>
      </main>
    </>
  );
}
