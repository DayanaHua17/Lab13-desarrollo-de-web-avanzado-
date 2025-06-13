"use client";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession(); // Obtiene los datos de la sesión

  return (
    <nav className="bg-slate-900 flex items-center py-3 justify-between px-24 text-white">
      <Link href="/">
        <h1 className="text-xl font-bold">NextGoogle</h1>
      </Link>

      {session?.user ? ( // Si hay una sesión de usuario activa
        <div className="flex gap-x-2 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <p>
            ({session.user.name}) ({session.user.email})
          </p>
          <button
            className="bg-sky-400 px-3 py-2 rounded"
            onClick={async () => {
              await signOut({ callbackUrl: "/" }); // Botón para cerrar sesión
            }}
          >
            Logout
            </button>
        </div>
      ) : (
        // Si no hay sesión, muestra el botón de iniciar sesión
        <button
          className="bg-sky-400 py-2 px-3 rounded"
          onClick={() => signIn("google")} // Botón para iniciar sesión con Google
        >
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navbar;