---
title: Página Principal
menus: institute
---
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inicio - ITESMARENA</title>
  <style>
    /* Fondo principal */
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: #003366;; /* Azul oscuro */
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      text-align: center;
    }
    /* Contenedor central */
    .container {
      max-width: 900px;
      padding: 20px;
    }
    /* Aviso destacado */
    .highlight {
      background: #e63946; /* Rojo llamativo */
      padding: 25px 20px;
      border-radius: 12px;
      margin-bottom: 40px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.4);
      animation: fadeIn 1.2s ease-in-out;
    }
    .highlight h1 {
      font-size: 2rem;
      margin-bottom: 15px;
      color: #ffffff;
    }
    .highlight p {
      font-size: 1.2rem;
      color: #ffeaea;
      margin-bottom: 20px;
    }
    /* Títulos */
    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: normal;
      margin-bottom: 40px;
      color: #d0e7ff; /* Azul claro */
    }
    /* Botones */
    .btn {
      display: inline-block;
      margin: 10px;
      padding: 14px 30px;
      font-size: 1.1rem;
      font-weight: bold;
      text-decoration: none;
      border-radius: 8px;
      transition: 0.3s ease;
    }
    .btn-primary {
      background: #e63946; /* Rojo */
      color: #ffffff;
    }
    .btn-primary:hover {
      background: #bf2b36;
    }
    .btn-secondary {
      background: #1d71b8; /* Azul intermedio */
      color: #ffffff;
    }
    .btn-secondary:hover {
      background: #14518a;
    }
    /* Animación */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    /* Responsivo */
    @media (max-width: 600px) {
      .highlight h1 {
        font-size: 1.6rem;
      }
      .highlight p {
        font-size: 1rem;
      }
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.2rem;
      }
      .btn {
        padding: 12px 20px;
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Texto destacado -->
    <div class="highlight">
      <h1>¡Ya pasamos la Segunda Etapa de Entrevista!</h1>
      <p>Ahora pasamos a la <strong>Semana de Convivencia</strong>. Conoce los Bachilleres que avanzan a esta fase.</p>
      <a href="https://itesmarena.edu.do/convivencia2025/" class="btn btn-primary">Más información sobre la Semana de Convivencia</a>
    </div>
    <!-- Contenido principal -->
    <h1>Bienvenidos a ITESMARENA</h1>
    <h2>Llamado de Admisión 2025</h2>
    <a href="https://itesmarena.edu.do/indexxx/" class="btn btn-primary">Ir a página principal</a>
    <a href="https://itesmarena.edu.do/admision2025/" class="btn btn-secondary">Admisión 2025</a>
  </div>
</body>
</html>







