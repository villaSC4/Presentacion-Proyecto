export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    author: 'Valeria Mendoza',
    role: 'Paciente Frecuente',
    treatment: 'Detox Muscular Superior (V-Conic)',
    rating: 5,
    comment: 'Llegué con un dolor de cuello insoportable por trabajar 10 horas frente a la computadora. El masaje detox con la tecnología V-conic fue increíble: cero dolor intenso pero salí como nueva. ¡Totalmente recomendado!',
    date: 'Hace 3 días',
    location: 'Sede Surco Chacarilla'
  },
  {
    id: '2',
    author: 'Carlos Alberto Ríos',
    role: 'Deportista & Ingeniero',
    treatment: 'Quiropráctica + Terapias Combinadas',
    rating: 5,
    comment: 'Llevo años atendiéndome en Qmedic. La combinación de quiropráctica con la tracción lumbar me devolvió la libertad de hacer deporte sin molestias en la espalda baja. El respaldo médico de 27 años marca la diferencia.',
    date: 'Hace 1 semana',
    location: 'Sede Surco Chacarilla'
  },
  {
    id: '3',
    author: 'María Fernanda Thorne',
    role: 'Diseñadora Editorial',
    treatment: 'Dream Relax con Aceite de Almendras',
    rating: 5,
    comment: 'La atmósfera del centro es de otro mundo. Te reciben con una calidez hermosa, los aromas orgánicos y la sesión Dream Relax de 80 minutos fueron exactamente lo que necesitaba para desconectar.',
    date: 'Hace 2 semanas',
    location: 'Sede Surco Chacarilla'
  },
  {
    id: '4',
    author: 'Diego Sotomayor',
    role: 'Ejecutivo de Ventas',
    treatment: 'Total Reset (Reflexología Podal)',
    rating: 5,
    comment: 'Excepcional atención desde la reserva por WhatsApp hasta la salida. La sesión Total Reset alivió mi pesadez en las piernas por los viajes constantes. Definitivamente regreso cada mes.',
    date: 'Hace 3 semanas',
    location: 'Sede Surco Chacarilla'
  }
];
