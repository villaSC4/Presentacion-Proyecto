import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  Instagram, 
  MessageCircle, 
  ChevronDown, 
  CheckCircle2 
} from 'lucide-react';
import PageHero from '../components/PageHero';

const faqs = [
  {
    q: '¿Con qué marcas de Ajinomoto trabaja Lovemark Publicidad?',
    a: 'Gestionamos de forma integral todas las marcas del portafolio: AJI-NO-MOTO®, Aji-no-men®, Doña Gusta®, Deli Arroz®, AJI-NO-SILLAO®, Miski Simi®, Sazón Sabor®, Aji-no-mix® y nuevos lanzamientos.'
  },
  {
    q: '¿Cómo funciona la App de Control de Asistencia en las activaciones?',
    a: 'Cada promotor y chef asignado a un mercado o supermercado debe marcar entrada georreferenciada con GPS en su teléfono móvil y subir una foto del stand montado. El supervisor central y la marca pueden ver el estado en tiempo real.'
  },
  {
    q: '¿Lovemark cuenta con chefs profesionales para demostraciones?',
    a: 'Sí, disponemos de una plantilla permanente de chefs demostradores con carnet de sanidad vigente, indumentaria profesional y capacitados en nuestro propio Lovemark Kitchen Lab.'
  },
  {
    q: '¿Tienen cobertura fuera de Lima?',
    a: 'Sí, ejecutamos campañas en las principales ciudades y mercados mayoristas del país (Arequipa, Trujillo, Chiclayo, Huancayo, Piura, Cusco, entre otros).'
  }
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="contacto-page">
      <PageHero 
        badge="Canal Directo"
        title="Contáctate con"
        highlight="Lovemark Publicidad"
        description="Estamos listos para diseñar y ejecutar tu próxima activación de alto impacto. Escríbenos y coordinemos una reunión inmediata."
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', marginBottom: '80px' }}>
            
            {/* Info Column */}
            <div>
              <span className="section-badge">Atención Ejecutiva</span>
              <h2 className="section-title">Hablemos de <span className="highlight">Tu Proyecto</span></h2>
              <p className="section-desc" style={{ marginBottom: '32px' }}>
                Ya sea para una activación masiva en mercados, producción de food styling o implementación de control de asistencia, nuestro equipo está a tu disposición.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Sede Operativa</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Lima, Perú — Cobertura a nivel nacional en mercados y canal moderno.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Correo Electrónico</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>contacto@lovemarkpublicidad.com<br/>operaciones@lovemarkpublicidad.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>WhatsApp Directo</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>+51 999 999 999 (Respuesta inmediata 24/7)</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Horario de Atención de Mercado</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Lunes a Sábado: 07:00 AM – 07:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ background: 'var(--color-bg-light)', padding: '24px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '14px' }}>Síguenos en Nuestras Redes Oficiales:</h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a 
                    href="https://www.tiktok.com/@lovemarkpublicidad?_r=1&_t=ZS-99GgOCVgIdj" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-dark btn-sm"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.18 1.19 2.12 2.37 2.34.62.13 1.27.09 1.87-.1 1.05-.33 1.86-1.19 2.16-2.23.19-.62.24-1.27.24-1.91V.02h-3.23z"/></svg>
                    TikTok @lovemarkpublicidad
                  </a>
                  <a 
                    href="https://www.instagram.com/lovemarkpublicidad?igsi=MTNoOTFpNWdqNjZqYQ==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btn-sm"
                    style={{ background: 'linear-gradient(45deg, #e6683c 0%, #dc2743 50%, #cc2366 100%)' }}
                  >
                    <Instagram size={15} style={{ marginRight: '6px' }} />
                    Instagram
                  </a>
                </div>
              </div>

            </div>

            {/* Form Column */}
            <div style={{
              background: '#fff',
              padding: '40px',
              borderRadius: '28px',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                    Gracias por ponerte en contacto con Lovemark Publicidad. Uno de nuestros directores de cuenta se comunicará contigo en los próximos minutos.
                  </p>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar Otro Mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px' }}>
                    Envíanos los Detalles de tu Requerimiento
                  </h3>

                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
                      Nombre Completo / Empresa *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Ej. Juan Pérez - Ajinomoto" 
                      style={{ width: '100%', padding: '13px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', background: 'var(--color-bg-light)', fontSize: '0.95rem' }} 
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
                        Correo Electrónico *
                      </label>
                      <input 
                        type="email" 
                        required 
                        placeholder="tu@correo.com" 
                        style={{ width: '100%', padding: '13px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', background: 'var(--color-bg-light)', fontSize: '0.95rem' }} 
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
                        Teléfono / WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+51 987 654 321" 
                        style={{ width: '100%', padding: '13px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', background: 'var(--color-bg-light)', fontSize: '0.95rem' }} 
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
                      Tipo de Servicio Requerido
                    </label>
                    <select 
                      style={{ width: '100%', padding: '13px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', background: 'var(--color-bg-light)', fontSize: '0.95rem' }}
                    >
                      <option>Activación BTL en Mercados de Abasto</option>
                      <option>Producción Audiovisual & Food Styling</option>
                      <option>Estrategia de Contenido TikTok & Redes</option>
                      <option>Implementación de App de Asistencia</option>
                      <option>Campaña Integral 360°</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
                      Mensaje o Descripción de la Campaña *
                    </label>
                    <textarea 
                      required 
                      rows="4" 
                      placeholder="Cuéntanos fechas estimadas, marcas a impulsar o zonas donde deseas activar..." 
                      style={{ width: '100%', padding: '13px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', background: 'var(--color-bg-light)', fontSize: '0.95rem', resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn btn-primary btn-lg" 
                    style={{ width: '100%' }}
                  >
                    <Send size={18} /> Enviar Mensaje a Lovemark
                  </motion.button>
                </form>
              )}
            </div>

          </div>

          {/* FAQ Accordion */}
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="section-header">
              <span className="section-badge">Preguntas Frecuentes</span>
              <h2 className="section-title">Respuestas Rápidas</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    style={{ background: '#fff', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden' }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', cursor: 'pointer', textAlign: 'left' }}
                    >
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-dark)' }}>
                        {faq.q}
                      </span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown size={20} color="var(--color-primary)" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{ padding: '0 24px 20px', color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.65, borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '14px' }}>
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
