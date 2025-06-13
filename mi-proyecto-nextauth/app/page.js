function HomePage() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', lineHeight: '1.6', padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      {/* Encabezado */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '10px' }}>Soluciones Digitales a Tu Medida</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Desarrollo de software moderno, eficiente y escalable para potenciar tu negocio.
        </p>
      </header>

      {/* Sección: Servicios */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Nuestros Servicios</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>✔ Desarrollo de aplicaciones web personalizadas</li>
          <li>✔ Creación de aplicaciones móviles Android y iOS</li>
          <li>✔ Integración de APIs y servicios en la nube</li>
          <li>✔ Consultoría tecnológica y arquitectura de software</li>
          <li>✔ Mantenimiento y mejora de sistemas existentes</li>
        </ul>
      </section>

      {/* Sección: Por qué elegirnos */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>¿Por qué elegirnos?</h2>
        <p>
          Nuestro equipo combina experiencia técnica con pasión por la innovación. Nos enfocamos en comprender tus necesidades para
          entregarte soluciones de calidad, con tiempos de entrega reales y soporte constante.
        </p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
          <li>✅ Atención personalizada</li>
          <li>✅ Tecnología de punta</li>
          <li>✅ Procesos ágiles y transparentes</li>
          <li>✅ Enfoque en resultados reales</li>
        </ul>
      </section>

      {/* Sección: Llamado a la acción */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>¿Listo para transformar tu idea en realidad?</h3>
        <p>Contáctanos hoy y da el primer paso hacia tu próxima solución digital.</p>
        <button style={{ marginTop: '15px', padding: '12px 24px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Solicitar una Cotización
        </button>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #ccc', paddingTop: '20px', textAlign: 'center', color: '#777' }}>
        <p>&copy; 2025 DevSolutions. Todos los derechos reservados.</p>
        <p>Contacto: contacto@devsolutions.com</p>
      </footer>
    </div>
  );
}

export default HomePage;
