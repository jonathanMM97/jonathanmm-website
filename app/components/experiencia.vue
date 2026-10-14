<template>
  <h2>3 años como Frontend Developer en Empathy.co</h2>
  <span>Desempeñé el puesto de Frontend Developer en Empathy.co, participando de forma simultánea en más de cuatro proyectos. Entre mis responsabilidades se encontraban el mantenimiento y la mejora de las páginas web corporativas, la gestión y evolución de la plataforma de personalización del producto para clientes, así como el desarrollo e implementación de nuevas funcionalidades para el producto principal de la empresa.

Durante gran parte de mi trayectoria, trabajé siguiendo metodologías ágiles, colaborando con distintos equipos para planificar y desarrollar soluciones de manera iterativa. Posteriormente, la dinámica de trabajo evolucionó hacia un modelo basado en la demanda directa de los clientes, priorizando sus necesidades y adaptando el desarrollo a los requisitos específicos de cada proyecto.
  </span>
  <div class="flex">
    <Image v-for="logo in logos" class="size-[30px]" :image-url="`media/${logo}.webp`"/>
  </div>

  <span>IA

    Utilizo herramientas de IA para redactar y mejorar textos, resumir documentos, analizar datos y automatizar tareas repetitivas.
Las aplico para generar ideas, resolver dudas y optimizar procesos, adaptando los resultados a las necesidades de cada proyecto.
Verifico la información obtenida y reviso los resultados para garantizar su precisión, calidad y uso responsable.
  </span>
</template>


<script setup lang="ts">
  const logos = ['vue-logo', 'nuxt-logo', 'jekyll-logo', 'tailwind-logo', 'javascript-logo', 'typescript-logo', 'cloudflare-logo', 'aws-logo'];
</script>