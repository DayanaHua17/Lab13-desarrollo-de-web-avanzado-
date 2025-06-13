'use client'

import { useRouter } from 'next/navigation'
import { SignOutButton, useUser } from '@clerk/nextjs'

export default function DashboardPage() {
  const router = useRouter()
  const { user } = useUser()

  const stats = [
    { label: 'Proyectos Activos', value: 7 },
    { label: 'Tareas Pendientes', value: 12 },
    { label: 'Miembros del Equipo', value: 4 },
  ];

  const recentActivity = [
    { id: 1, text: 'Completaste la tarea "Diseño de UI"', date: 'Hace 2 horas' },
    { id: 2, text: 'Nuevo proyecto "Marketing Digital" creado', date: 'Ayer' },
    { id: 3, text: 'Actualizaste tu perfil', date: 'Hace 3 días' },
  ];

  return (
    <div style={dashboardStyles.container}>
      <header style={dashboardStyles.header}>
        <h1 style={dashboardStyles.title}>
          Bienvenido, {user?.firstName || "usuario"} 👋
        </h1>
        <p style={dashboardStyles.subtitle}>
          Este es tu panel de control central.
        </p>
        {/* Botón de Cerrar Sesión en la esquina superior derecha */}
        <div style={dashboardStyles.signOutButtonContainer}>
          <SignOutButton signOutCallback={() => router.push("/")}>
            <button style={dashboardStyles.button}>Cerrar sesión</button>
          </SignOutButton>
        </div>
      </header>

      <section style={dashboardStyles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={dashboardStyles.statCard}>
            <p style={dashboardStyles.statLabel}>{stat.label}</p>
            <h2 style={dashboardStyles.statValue}>{stat.value}</h2>
          </div>
        ))}
      </section>

      <section style={dashboardStyles.section}>
        <h3 style={dashboardStyles.sectionTitle}>Actividad Reciente</h3>
        <ul style={dashboardStyles.activityList}>
          {recentActivity.map((activity) => (
            <li key={activity.id} style={dashboardStyles.activityItem}>
              <span style={dashboardStyles.activityText}>{activity.text}</span>
              <span style={dashboardStyles.activityDate}>{activity.date}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* El footer se elimina o se deja vacío si el botón está en el header */}
      {/* <footer style={dashboardStyles.footer}></footer> */}
    </div>
  );
}

const professionalColors = {
  darkBlue: '#2C3E50',
  mediumGray: '#7F8C8D',
  lightGray: '#ECF0F1',
  accentBlue: '#3498DB',
  softWhite: '#FDFEFE',
  borderGray: '#BDC3C7',
};

const dashboardStyles = {
  container: {
    backgroundColor: professionalColors.lightGray,
    padding: '40px 20px',
    minHeight: '100vh',
    fontFamily: 'Roboto, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: professionalColors.darkBlue,
    position: 'relative', // Necesario para posicionar el botón absolutamente
  },
  header: {
    marginBottom: '40px',
    textAlign: 'center',
    width: '100%',
    position: 'relative', // Contenedor para el título y el botón
  },
  signOutButtonContainer: {
    position: 'absolute',
    top: '-10px',  // Ajusta según sea necesario
    right: '1px', // Ajusta según sea necesario
  },
  title: {
    color: professionalColors.darkBlue,
    fontSize: '3rem',
    marginBottom: '0.5rem',
    fontWeight: '700',
  },
  subtitle: {
    color: professionalColors.mediumGray,
    fontSize: '1.2rem',
    fontWeight: '400',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '900px',
    marginBottom: '40px',
  },
  statCard: {
    backgroundColor: professionalColors.softWhite,
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
  },
  statLabel: {
    color: professionalColors.mediumGray,
    fontSize: '1rem',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  statValue: {
    color: professionalColors.accentBlue,
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: professionalColors.softWhite,
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    width: '100%',
    maxWidth: '900px',
    marginBottom: '40px',
  },
  sectionTitle: {
    color: professionalColors.darkBlue,
    fontSize: '1.8rem',
    marginBottom: '20px',
    fontWeight: '600',
    borderBottom: `1px solid ${professionalColors.borderGray}`,
    paddingBottom: '10px',
  },
  activityList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  activityItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: `1px dashed ${professionalColors.lightGray}`,
  },
  activityText: {
    color: professionalColors.darkBlue,
    fontSize: '1.1rem',
  },
  activityDate: {
    color: professionalColors.mediumGray,
    fontSize: '0.9rem',
  },
  // Ya no es necesario el footer si el botón está en el header
  // footer: {
  //   marginTop: 'auto',
  //   paddingTop: '20px',
  // },
  button: {
    backgroundColor: professionalColors.accentBlue,
    color: professionalColors.softWhite,
    border: 'none',
    padding: '12px 25px',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
  },
};