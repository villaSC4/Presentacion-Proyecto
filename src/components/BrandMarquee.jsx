import React from 'react';

const brands = [
  'AJI-NO-MOTO®',
  'AJI-NO-MEN®',
  'DOÑA GUSTA®',
  'DELI ARROZ®',
  'AJI-NO-SILLAO®',
  'MISKI SIMI®',
  'SAZÓN SABOR®',
  'AJI-NO-MIX®',
];

export default function BrandMarquee() {
  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {brands.concat(brands).concat(brands).map((brand, idx) => (
          <div key={idx} className="marquee-item">
            <span className="marquee-star">★</span>
            <span>{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
