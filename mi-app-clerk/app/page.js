'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Mi Plataforma Personal</h1>
        <nav style={styles.nav}>
          <SignedOut>
            <Link href="/sign-in" style={styles.navLink}>Iniciar sesión</Link>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard" style={styles.navLinkAlt}>Dashboard</Link>
          </SignedIn>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <h2 style={styles.heroTitle}>Organiza tu día con eficiencia</h2>
          <p style={styles.heroSubtitle}>
            Tareas, proyectos y recordatorios en un solo lugar para una vida más enfocada.
          </p>
          <div style={styles.ctaButtons}>
            <SignedOut>
              <Link href="/sign-in" style={styles.buttonStart}>Comenzar</Link>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard" style={styles.buttonGo}>Ir al Panel</Link>
            </SignedIn>
          </div>
        </div>
        <div style={styles.heroRight}>
          <img
            src="https://www.shutterstock.com/image-photo/diverse-team-project-managers-enjoying-260nw-2532428491.jpg"
            alt="Organiza tu día"
            style={styles.heroImage}
          />
        </div>
      </section>

      <section style={styles.featuresSection}>
        <h3 style={styles.sectionTitle}>Características Principales</h3>
        <div style={styles.featuresGrid}>
          <div style={{ ...styles.card, backgroundColor: '#F4F6F8' }}>
            <h4 style={styles.cardTitle}>🗂️ Gestión de Tareas</h4>
            <p style={styles.cardText}>Crea listas, establece prioridades y cumple tus objetivos.</p>
          </div>
          <div style={{ ...styles.card, backgroundColor: '#E9EDF0' }}>
            <h4 style={styles.cardTitle}>📆 Calendario Integrado</h4>
            <p style={styles.cardText}>Visualiza tus actividades en un calendario claro y limpio.</p>
          </div>
          <div style={{ ...styles.card, backgroundColor: '#DCEEF2' }}>
            <h4 style={styles.cardTitle}>🔔 Recordatorios</h4>
            <p style={styles.cardText}>Configura alertas para no olvidar nada importante.</p>
          </div>
        </div>
      </section>

      <section style={styles.howItWorks}>
        <div style={styles.stepsLeft}>
          <h3 style={styles.sectionTitle}>¿Cómo Funciona?</h3>
          <ol style={styles.stepsList}>
            <li><strong>1.</strong> Crea tu cuenta en segundos.</li>
            <li><strong>2.</strong> Añade tus tareas y metas.</li>
            <li><strong>3.</strong> Visualízalas desde el panel.</li>
            <li><strong>4.</strong> Cumple tu día con éxito.</li>
          </ol>
        </div>
        <div style={styles.stepsRight}>
          <img
            src="https://via.placeholder.com/400x250/F1F3F5/000?text=Dashboard"
            alt="Dashboard"
            style={styles.heroImage}
          />
        </div>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Mi Plataforma Personal — Desarrollado con enfoque y pasión
      </footer>
    </main>
  );
}
const styles = {
  main: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#ffffff',
    color: '#1F2937',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#0EA5E9', // celeste fuerte
    color: '#fff',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    backgroundColor: '#38BDF8', // celeste intermedio
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
  },
  navLinkAlt: {
    backgroundColor: '#22D3EE', // celeste turquesa
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
  },
  hero: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '60px 40px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroLeft: {
    flex: 1,
    minWidth: '300px',
  },
  heroRight: {
    flex: 1,
    minWidth: '300px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  heroSubtitle: {
    fontSize: '18px',
    marginBottom: '24px',
    color: '#4B5563',
  },
  ctaButtons: {
    display: 'flex',
    gap: '12px',
  },
  buttonStart: {
    backgroundColor: '#38BDF8', // celeste botón
    color: '#fff',
    padding: '12px 24px',
    textDecoration: 'none',
    borderRadius: '6px',
  },
  buttonGo: {
    backgroundColor: '#22D3EE', // celeste más claro
    color: '#fff',
    padding: '12px 24px',
    textDecoration: 'none',
    borderRadius: '6px',
  },
  heroImage: {
    maxWidth: '100%',
    borderRadius: '8px',
  },
  featuresSection: {
    padding: '60px 40px',
    backgroundColor: '#F0FDFF',
  },
  sectionTitle: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#111827',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  cardTitle: {
    fontSize: '18px',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#374151',
  },
  howItWorks: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '60px 40px',
    gap: '40px',
    backgroundColor: '#ffffff',
  },
  stepsLeft: {
    flex: 1,
    minWidth: '300px',
  },
  stepsRight: {
    flex: 1,
    minWidth: '300px',
    textAlign: 'center',
  },
  stepsList: {
    fontSize: '16px',
    color: '#374151',
    lineHeight: '2',
    paddingLeft: '20px',
  },
  footer: {
    marginTop: 'auto',
    padding: '20px',
    textAlign: 'center',
    fontSize: '14px',
    backgroundColor: '#0EA5E9', // celeste fuerte
    color: '#fff',
  },
};
