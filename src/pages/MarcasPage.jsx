import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Flame, 
  Utensils, 
  Users, 
  Store, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2,
  Calculator
} from 'lucide-react';
import PageHero from '../components/PageHero';

const brandsData = [
  {
    id: 'ajinomoto',
    name: 'AJI-NO-MOTO®',
    category: 'Sazonador Umami Universal',
    slogan: 'El secreto que transforma y resalta el sabor de la comida peruana',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6016.jpg',
    description: 'Activaciones de alto impacto en mercados mayoristas y paradas populares. Implementamos módulos dinámicos en los puestos de verduras, abarrotes y carnes, enseñando a las amas de casa cómo potenciar sus guisos con el toque exacto de umami.',
    tactics: [
      'Demostraciones culinarias con chefs y degustación de aderezos',
      'Ambientación de puestos con cenefas, banderines y recetarios',
      'Dinámicas con ruleta de premios por compra del sobre económico'
    ],
    kpis: [
      { label: 'Degustaciones Entregadas', val: '+150,000' },
      { label: 'Puestos de Mercado Activados', val: '+450 PDV' },
      { label: 'Aumento en Sell-Out', val: '+38%' }
    ]
  },
  {
    id: 'ajinomen',
    name: 'Aji-no-men®',
    category: 'Sopas Instantáneas Líderes',
    slogan: 'Sabor casero, rápido y caliente en cualquier momento',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6262.jpg',
    description: 'Estrategias juveniles y de conveniencia. Realizamos degustaciones de sopa humeante en galerías comerciales, centros de estudio y terminales, acompañadas de producción audiovisual y food styling apetitoso para redes sociales.',
    tactics: [
      'Degustaciones en caliente al paso (sabores Carne, Gallina y Pollo)',
      'Food styling y sesiones fotográficas macro para material POP',
      'Desafíos y recetas virales de fideos instantáneos en TikTok'
    ],
    kpis: [
      { label: 'Impactos Directos', val: '+120,000' },
      { label: 'Videos y Trends Generados', val: '+85 clips' },
      { label: 'Conversión Inmediata', val: '+48%' }
    ]
  },
  {
    id: 'donagusta',
    name: 'Doña Gusta®',
    category: 'Caldos Concentrados',
    slogan: 'El sabor a hogar y concentración que rinde en toda la olla',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6176.jpg',
    description: 'Campañas enfocadas en la casera tradicional. Nuestras promotoras recorren los pasillos de abarrotes con bandejas térmicas ofreciendo caldo caliente y recetarios de sopas criollas rendidoras.',
    tactics: [
      'Bandejas de muestreo directo al público en horario matutino',
      'Recetarios impresos con platos económicos familiares',
      'Canje de utensilios de cocina Lovemark por tiras de Doña Gusta'
    ],
    kpis: [
      { label: 'Hogares Contactados', val: '+95,000' },
      { label: 'Recetarios Entregados', val: '+60,000' },
      { label: 'Fidelidad en PDV', val: '92%' }
    ]
  },
  {
    id: 'ajinosillao',
    name: 'AJI-NO-SILLAO® & Deli Arroz®',
    category: 'Sillao Premium & Sazonador de Arroz',
    slogan: 'Color, brillo y el arroz chaufa perfecto en minutos',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6087.jpg',
    description: 'Despliegue de chefs con mandil y gorro profesional en puestos de mercado. Se prepara arroz chaufa en vivo demostrando cómo AJI-NO-SILLAO otorga el color justo y Deli Arroz asegura el grano graneado con sabor.',
    tactics: [
      'Masterclasses rápidas de 5 minutos en el mercado',
      'Muestreo de vasitos de arroz chaufa recién preparado',
      'Promociones cruzadas de botella de sillao + sobre de Deli Arroz'
    ],
    kpis: [
      { label: 'Porciones Degustadas', val: '+80,000' },
      { label: 'Puntos con Chef en Vivo', val: '+220 Mercados' },
      { label: 'Tasa de Compra Cruzada', val: '+52%' }
    ]
  },
  {
    id: 'miskisimi',
    name: 'Miski Simi®',
    category: 'Bebidas & Chocolatada',
    slogan: 'Energía deliciosa y cremosa al paso',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_0797.jpg',
    description: 'Sampling dinámico itinerante. Promotores equipados con mochilas térmicas de Lovemark recorren mercados, colegios y paraderos repartiendo chocolatada caliente en vasitos de degustación.',
    tactics: [
      'Mochilas dispensadoras térmicas con autonomía de 4 horas',
      'Cuadrillas de promotores móviles con bioseguridad completa',
      'Activación en horas punta de frío y mañanas de compra'
    ],
    kpis: [
      { label: 'Muestras Repartidas', val: '+65,000' },
      { label: 'Rutas de Cobertura', val: '18 Distritos' },
      { label: 'Satisfacción de Muestra', val: '98.5%' }
    ]
  }
];

export default function MarcasPage() {
  const [selectedBrand, setSelectedBrand] = useState(brandsData[0]);

  return (
    <div className="marcas-page">
      <PageHero 
        badge="Portafolio Integral"
        title="Universo de Marcas"
        highlight="Ajinomoto"
        description="Conoce las estrategias, activaciones BTL y resultados que desarrollamos para cada producto emblemático de Ajinomoto del Perú."
      />

      <section className="section">
        <div className="container">
          
          {/* Brand Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '50px' }}>
            {brandsData.map((brand) => {
              const isSelected = selectedBrand.id === brand.id;
              return (
                <button
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                  className={`gallery-tab-btn ${isSelected ? 'active' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Flame size={15} />
                  <span>{brand.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Brand Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBrand.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              style={{
                background: '#fff',
                borderRadius: '28px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '40px' }}>
                
                {/* Brand Info Left */}
                <div style={{ padding: '44px' }}>
                  <span className="section-badge" style={{ marginBottom: '12px' }}>{selectedBrand.category}</span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 900, marginBottom: '8px', color: 'var(--color-dark)' }}>
                    {selectedBrand.name}
                  </h2>
                  <p style={{ fontStyle: 'italic', color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.05rem', marginBottom: '20px' }}>
                    "{selectedBrand.slogan}"
                  </p>

                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
                    {selectedBrand.description}
                  </p>

                  {/* Tactics */}
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '14px' }}>
                    Tácticas de Campo Lovemark:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                    {selectedBrand.tactics.map((tactic, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--color-text-main)' }}>
                        <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{tactic}</span>
                      </div>
                    ))}
                  </div>

                  {/* KPIs */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--color-border)', marginBottom: '32px' }}>
                    {selectedBrand.kpis.map((kpi, idx) => (
                      <div key={idx}>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-primary)' }}>
                          {kpi.val}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                          {kpi.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to="/cotizador">
                    <button className="btn btn-primary btn-lg">
                      <Calculator size={18} /> Cotizar Campaña para {selectedBrand.name}
                    </button>
                  </Link>
                </div>

                {/* Brand Image Right */}
                <div style={{ position: 'relative', minHeight: '440px' }}>
                  <img 
                    src={selectedBrand.image} 
                    alt={selectedBrand.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    padding: '16px 20px',
                    borderRadius: '16px'
                  }}>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-primary-light)', fontWeight: 700 }}>
                      Registro de Campo Lovemark
                    </span>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>Activación en Mercado Tradicional</div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </div>
  );
}
