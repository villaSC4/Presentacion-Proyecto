import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  MessageCircle, 
  CheckCircle2, 
  Users, 
  Calendar, 
  Store, 
  Flame, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';
import PageHero from '../components/PageHero';

const brands = [
  'AJI-NO-MOTO®',
  'Aji-no-men®',
  'Doña Gusta®',
  'AJI-NO-SILLAO®',
  'Deli Arroz®',
  'Miski Simi®'
];

const channels = [
  { id: 'mercados', name: 'Mercados Mayoristas & Paradas', desc: 'Canal tradicional de alto volumen de amas de casa' },
  { id: 'supermercados', name: 'Supermercados Modernos', desc: 'Cabeceras de góndola y degustación en pasillo' },
  { id: 'sampling', name: 'Sampling Móvil con Mochilas', desc: 'Rutas dinámicas en zonas comerciales y transporte' },
  { id: 'ferias', name: 'Ferias Gastronómicas & Eventos', desc: 'Stands interactivos y cocina abierta en vivo' }
];

export default function CotizadorPage() {
  const [selectedBrand, setSelectedBrand] = useState('AJI-NO-MOTO®');
  const [selectedChannel, setSelectedChannel] = useState(channels[0]);
  const [days, setDays] = useState(3);
  const [promoters, setPromoters] = useState(4);

  // Calculations
  const impactsPerPersonPerDay = 135;
  const totalImpacts = days * promoters * impactsPerPersonPerDay;
  const baseRatePerDay = 180; // S/ per promoter/day inclusive of logistics
  const supervisionFee = 450;
  const materialsFee = days * 250;
  const totalEst = (days * promoters * baseRatePerDay) + supervisionFee + materialsFee;

  const handleSendQuote = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });

    const msg = encodeURIComponent(
      `¡Hola Lovemark Publicidad! Deseo cotizar una campaña formal para *${selectedBrand}*:\n` +
      `• Canal: *${selectedChannel.name}*\n` +
      `• Duración: *${days} días*\n` +
      `• Personal: *${promoters} promotores / chefs*\n` +
      `• Impactos estimados: *~${totalImpacts.toLocaleString('es-PE')} personas*\n` +
      `• Presupuesto referencial: *S/ ${totalEst.toLocaleString('es-PE')}*\n\n` +
      `¿Podemos coordinar una llamada para la propuesta técnica?`
    );

    window.open(`https://wa.me/51999999999?text=${msg}`, '_blank');
  };

  return (
    <div className="cotizador-page">
      <PageHero 
        badge="Presupuesto Inmediato"
        title="Cotizador de"
        highlight="Campañas BTL"
        description="Configura los parámetros de tu activación para obtener una estimación de impacto y costos al instante."
      />

      <section className="section">
        <div className="container">
          <div style={{
            background: '#fff',
            borderRadius: '28px',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-lg)',
            padding: '40px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }}>
              
              {/* Controls Column */}
              <div>
                {/* Step 1: Brand */}
                <div style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'block', fontWeight: 800, fontSize: '1rem', marginBottom: '12px', color: 'var(--color-dark)' }}>
                    1. Selecciona la Marca de Ajinomoto:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    {brands.map((b) => (
                      <button
                        key={b}
                        onClick={() => setSelectedBrand(b)}
                        className={`calc-option-btn ${selectedBrand === b ? 'selected' : ''}`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Channel */}
                <div style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'block', fontWeight: 800, fontSize: '1rem', marginBottom: '12px', color: 'var(--color-dark)' }}>
                    2. Canal o Modalidad de Activación:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    {channels.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedChannel(c)}
                        className={`calc-option-btn ${selectedChannel.id === c.id ? 'selected' : ''}`}
                        style={{ textAlign: 'left', padding: '14px' }}
                      >
                        <div style={{ fontWeight: 800 }}>{c.name}</div>
                        <div style={{ fontSize: '0.72rem', opacity: 0.8, marginTop: '2px' }}>{c.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Days */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-dark)' }}>
                      3. Días de Activación:
                    </label>
                    <span style={{ fontWeight: 900, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>
                      {days} días
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="15" 
                    value={days} 
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="calc-range-slider"
                    style={{ width: '100%' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    <span>1 día (Campaña Flash)</span>
                    <span>15 días (Cobertura Mensual)</span>
                  </div>
                </div>

                {/* Step 4: Promoters */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-dark)' }}>
                      4. Cuadrilla (Chefs / Promotoras):
                    </label>
                    <span style={{ fontWeight: 900, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>
                      {promoters} personas
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="2" 
                    max="20" 
                    value={promoters} 
                    onChange={(e) => setPromoters(Number(e.target.value))}
                    className="calc-range-slider"
                    style={{ width: '100%' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    <span>2 personas (1 stand)</span>
                    <span>20 personas (Mega activación multizona)</span>
                  </div>
                </div>

              </div>

              {/* Summary Box */}
              <div className="calc-summary-box">
                <div>
                  <h3 className="calc-summary-title">Resumen de Propuesta</h3>

                  <div className="calc-summary-rows">
                    <div className="calc-row">
                      <span>Marca:</span>
                      <span className="calc-row-val">{selectedBrand}</span>
                    </div>
                    <div className="calc-row">
                      <span>Canal:</span>
                      <span className="calc-row-val">{selectedChannel.name}</span>
                    </div>
                    <div className="calc-row">
                      <span>Duración:</span>
                      <span className="calc-row-val">{days} días</span>
                    </div>
                    <div className="calc-row">
                      <span>Personal:</span>
                      <span className="calc-row-val">{promoters} promotores / chefs</span>
                    </div>
                    <div className="calc-row">
                      <span>Impactos Directos:</span>
                      <span className="calc-row-val" style={{ color: 'var(--color-primary-light)' }}>
                        ~{totalImpacts.toLocaleString('es-PE')} personas
                      </span>
                    </div>
                    <div className="calc-row">
                      <span>Supervisión App GPS:</span>
                      <span className="calc-row-val" style={{ color: 'var(--color-success)' }}>
                        Incluida en Tiempo Real
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="calc-total-box">
                    <div className="calc-total-lbl">Inversión Referencial Estimada</div>
                    <div className="calc-total-amount">S/ {totalEst.toLocaleString('es-PE')}</div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSendQuote}
                    className="btn btn-primary btn-lg" 
                    style={{ width: '100%' }}
                  >
                    <MessageCircle size={20} /> Solicitar Propuesta por WhatsApp
                  </motion.button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
