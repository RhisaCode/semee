import { useState } from 'react';
import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
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

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('quemsomos');

  useReveal(activeTab);

  function navigate(id: TabId) {
    setActiveTab(id);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Navbar activeTab={activeTab} onNavigate={navigate} />
      <NewsTicker onNavigate={navigate} />
      {activeTab === 'quemsomos' && <PageQuemSomos onNavigate={navigate} />}
      {activeTab === 'secretaria' && <PageSecretaria />}
      {activeTab === 'servicos' && <PageServicos onNavigate={navigate} />}
      {activeTab === 'noticias' && <PageNoticias />}
      {activeTab === 'contratabc' && <PageContrataBC onNavigate={navigate} />}
      {activeTab === 'sime' && <PageSime onNavigate={navigate} />}
      {activeTab === 'contato' && <PageContato />}
      <Footer />
    </>
  );
}
