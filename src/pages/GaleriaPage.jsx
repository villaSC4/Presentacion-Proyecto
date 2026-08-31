import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import LightboxModal from '../components/LightboxModal';

const galleryItems = [
  {
    id: 1,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6087.jpg',
    category: 'btl',
    categoryName: 'Activación BTL',
    title: 'Chef Lovemark - AJI-NO-SILLAO & Deli Arroz',
    desc: 'Demostración de cocina y recetario en mano para las caseras en mercado de abastos.'
  },
  {
    id: 2,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6262.jpg',
    category: 'food',
    categoryName: 'Food Styling',
    title: 'Sopa Aji-no-men Carne con Verduras',
    desc: 'Fotografía gastronómica en alta definición para campaña publicitaria y recetarios.'
  },
  {
    id: 3,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6176.jpg',
    category: 'degustacion',
    categoryName: 'Degustaciones',
    title: 'Degustación Caliente en Puesto de Abarrotes',
    desc: 'Entrega directa de caldo Doña Gusta con bandeja térmica Lovemark.'
  },
  {
    id: 4,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_0797.jpg',
    category: 'btl',
    categoryName: 'Activación BTL',
    title: 'Muestreo Móvil con Mochila Miski Simi',
    desc: 'Promotora móvil repartiendo vasitos de chocolatada en pasillos de mercado.'
  },
  {
    id: 5,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6334.jpg',
    category: 'bts',
    categoryName: 'Detrás de Cámaras',
    title: 'Testing de Recetas en Kitchen Lab',
    desc: 'Equipo de Lovemark probando sabores y consistencias antes del rodaje de contenido.'
  },
  {
    id: 6,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6016.jpg',
    category: 'btl',
    categoryName: 'Activación BTL',
    title: 'Branding & Merchandising Ajinomoto',
    desc: 'Puesto de mercado completamente vestido con tiras y recetarios oficiales.'
  },
  {
    id: 7,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6270.jpg',
    category: 'food',
    categoryName: 'Food Styling',
    title: 'Primer Plano Textura de Fideos',
    desc: 'Detalle de fideos ondulados, zanahorias y carne en caldo humeante.'
  },
  {
    id: 8,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6362.jpg',
    category: 'bts',
    categoryName: 'Detrás de Cámaras',
    title: 'Montaje de Set Fotográfico',
    desc: 'Preparación milimétrica de elementos antes de la captura publicitaria.'
  },
  {
    id: 9,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6168.jpg',
    category: 'degustacion',
    categoryName: 'Degustaciones',
    title: 'Sonrisas y Fidelidad en el Mercado',
    desc: 'Interacción genuina y positiva con las amas de casa al probar el sazón.'
  },
  {
    id: 10,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6093.jpg',
    category: 'btl',
    categoryName: 'Activación BTL',
    title: 'Exhibición de Recetarios Prácticos',
    desc: 'Entrega de recetarios de platos criollos rápidos para la cocina diaria.'
  },
  {
    id: 11,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6279.jpg',
    category: 'food',
    categoryName: 'Food Styling',
    title: 'Composición Culinaria Aji-no-men',
    desc: 'Styling con fondo rústico de cocina peruana y vegetales frescos.'
  },
  {
    id: 12,
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6388.jpg',
    category: 'bts',
    categoryName: 'Detrás de Cámaras',
    title: 'Equipo Creativo Lovemark en Acción',
    desc: 'Coordinación del personal de producción y chefs durante jornada de grabación.'
  }
];

const categories = [
  { id: 'all', name: 'Todos los Registros' },
  { id: 'btl', name: 'Activaciones en Mercados' },
  { id: 'food', name: 'Food Styling & Fotos' },
  { id: 'degustacion', name: 'Degustaciones & Sampling' },
  { id: 'bts', name: 'Detrás de Cámaras (BTS)' }
];

export default function GaleriaPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalData, setModalData] = useState({ isOpen: false, item: null });

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="galeria-page">
      <PageHero 
        badge="Evidencia Visual Real"
        title="Galería de Activaciones"
        highlight="& Producciones"
        description="Explora el archivo fotográfico de nuestras campañas en mercados, degustaciones de campo y sesiones de food styling."
      />

      <section className="section">
        <div className="container">
          
          {/* Filter Tabs */}
          <motion.div 
            className="gallery-tab-filters"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`gallery-tab-btn ${activeFilter === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          {/* Grid without weird layout morphing - Clean fade & slide transitions */}
          <div className="gallery-cards-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="gallery-card-item"
                  onClick={() => setModalData({ isOpen: true, item })}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-card-overlay">
                    <span className="section-badge" style={{ fontSize: '0.7rem', padding: '2px 10px', marginBottom: '6px' }}>
                      {item.categoryName}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '4px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)' }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal 
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ isOpen: false, item: null })}
        image={modalData.item?.image}
        title={modalData.item?.title}
        category={modalData.item?.categoryName}
        description={modalData.item?.desc}
      />
    </div>
  );
}
