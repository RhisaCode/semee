import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
import NewsBanner from './components/NewsBanner';
import Footer from './components/Footer';
import PageQuemSomos from './components/PageQuemSomos';
import PageSecretaria from './components/PageSecretaria';
import PageServicos from './components/PageServicos';
import PageNoticias from './components/PageNoticias';
import PageContrataBC from './components/PageContrataBC';
import PageSime from './components/PageSime';
import PageContato from './components/PageContato';
import { useReveal } from './hooks/useReveal';

export type TabId = 'quemsomos' | 'secretaria' | 'servicos' | 'noticias' | 'contratabc' | 'sime' | 'contato';

/** Lê o slug de notícia do hash (#/noticia/<id>), se houver. */
function noticiaDoHash(): string | null {
  const m = window.location.hash.match(/^#\/noticia\/([a-z0-9-]+)$/);
  return m ? m[1] : null;
}

export default function App() {
  const inicial = noticiaDoHash();
  const [activeTab, setActiveTab] = useState<TabId>(inicial ? 'noticias' : 'quemsomos');
  const [noticiaFoco, setNoticiaFoco] = useState<string | null>(inicial);

  useReveal(activeTab);

  // Link direto de notícia: quem chega (ou navega) com #/noticia/<id> cai na
  // aba Notícias com a matéria em destaque.
  useEffect(() => {
    const aoMudarHash = () => {
      const id = noticiaDoHash();
      if (id) {
        setActiveTab('noticias');
        setNoticiaFoco(id);
      }
    };
    window.addEventListener('hashchange', aoMudarHash);
    return () => window.removeEventListener('hashchange', aoMudarHash);
  }, []);

  function navigate(id: TabId) {
    setActiveTab(id);
    setNoticiaFoco(null);
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
  }

  function abrirNoticia(id: string) {
    if (noticiaDoHash() === id) {
      // mesmo link: o hashchange não dispara, então força o foco de novo
      setActiveTab('noticias');
      setNoticiaFoco(id);
      return;
    }
    window.location.hash = `/noticia/${id}`;
  }

  return (
    <>
      <Navbar activeTab={activeTab} onNavigate={navigate} />
      <NewsTicker onNavigate={navigate} />
      {activeTab === 'quemsomos' && (
        <>
          <NewsBanner onAbrir={abrirNoticia} />
          <PageQuemSomos onNavigate={navigate} />
        </>
      )}
      {activeTab === 'secretaria' && <PageSecretaria />}
      {activeTab === 'servicos' && <PageServicos onNavigate={navigate} />}
      {activeTab === 'noticias' && <PageNoticias focusId={noticiaFoco} />}
      {activeTab === 'contratabc' && <PageContrataBC onNavigate={navigate} />}
      {activeTab === 'sime' && <PageSime onNavigate={navigate} />}
      {activeTab === 'contato' && <PageContato />}
      <Footer />
    </>
  );
}
