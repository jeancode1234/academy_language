<template>
  <div>

    <div class="relative">
      <div class="w-full hidden xl:flex h-32"></div>
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(card, index) in cards" :key="index" class="w-full shrink-0">
            <div class="relative h-[90vh] lg:h-screen overflow-hidden flex items-center justify-center">
              <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
              <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
              <div
                class="absolute top-0 w-full xl:w-5/6 mx-auto space-y-4 h-full flex flex-col xl:py-44 justify-center items-center sm:p-6">
                <p class="text-sm sm:text-lg md:text-xl text-white uppercase text-center font-Merriweather"
                  data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                  Formation disponible partout en europe
                </p>
                <h3 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-2 text-white"
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                  {{ card.title }}
                </h3>
                <div class="w-full lg:w-4/6 mx-auto py-4 space-y-6">
                  <p class="text-sm md:text-md text-center text-white" data-aos="fade-up" data-aos-duration="1000"
                    data-aos-delay="300" data-aos-once="true">
                    {{ card.description }}
                  </p>
                  <div class="flex justify-center">
                    <a href="#"
                      class="px-6 py-5 rounded-full bg-[#073183] hover:bg-[#E02454] hover:border-2 hover:border-[#073183] text-white font-bold text-md">Commencez
                      Maintenant</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute bottom-1/3 w-16 h-16 rounded-full bg-[#073183] bg-opacity-40 hover:bg-opacity-70 flex items-center justify-center -translate-y-1/2 left-4 cursor-pointer"
        @click="prevCard">
        <svg class="w-8 h-8 text-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </div>
      <div
        class="absolute bottom-1/3 w-16 h-16 rounded-full bg-[#073183] bg-opacity-40 hover:bg-opacity-70 flex items-center justify-center -translate-y-1/2 right-4 cursor-pointer"
        @click="nextCard">
        <svg class="w-8 h-8 text-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </div>
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <div v-for="(card, index) in cards" :key="index" :class="[
          'w-3 h-3 rounded-full cursor-pointer transition-colors',
          index === currentIndex
            ? 'bg-[#2f67d6]'
            : 'bg-gray-300 hover:bg-[#203a6e]',
        ]" @click="currentIndex = index"></div>
      </div>
    </div>
    <div class="w-full p-4 sm:p-12 md:p-24">
  <div class="grid grid-cols-4 xl:grid-cols-8 grid-flow-row gap-8">
    <div
      class="col-span-4 xl:col-span-3 h-[430px] sm:h-[640px] xl:h-[480px] rounded-t-2xl bg-slate-100 flex relative justify-center overflow-hidden"
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="false">
      <img src="../assets/img/11.jpg" class="w-[100%] h-5 h-56 bg-cover sm:h-[300px] xl:h-64" alt="about-png" />
      <div
        class="w-full h-[230px] sm:h-[350px] xl:h-[230px] absolute pb-2 bg-blue-950 overflow-hidden rounded-bl-none rounded-br-none rounded-t-full bottom-0">
        <img src="../assets/img/10.jpg" class="w-full h-full" alt="about3-png" />
      </div>
    </div>
    <div class="col-span-4 xl:col-span-5">
      <div class="w-full space-y-4">
        <div class="w-full flex space-x-1 sm:space-x-4 items-center" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="300" data-aos-once="false">
          <h1 class="text-xl uppercase font-bold lg:text-2xl text-[#073183]">
            À PROPOS DE NOTRE formation
          </h1>
          <div class="space-y-2">
            <div class="w-14 h-[2px] bg-[#073183]"></div>
            <div class="w-32 h-[2px] bg-red-600"></div>
          </div>
        </div>
        <h2 class="text-4xl lg:text-6xl font-extrabold text-[#073183]" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="400" data-aos-once="false">
          Formation  de Langue de Confiance en disponible.
        </h2>
        <div class="lg:py-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="false">
          <p class="text-lg lg:text-xl text-slate-500 font-sans">
            Nous offrons des formations en langue française adaptées à tous les niveaux. Découvrez une méthode
            d'apprentissage innovante qui allie théorie et pratique. Rejoignez-nous pour maîtriser le français
            et ouvrir de nouvelles portes vers le monde francophone !
          </p>
        </div>
        <div class="space-x-8 flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
          data-aos-once="false">
          <div class="flex space-x-2 items-center">
            <img src="../assets/icon/map.png" width="50" height="50" alt="map_png" />
            <p class="text-lg text-gray-800">
              Meilleures Ressources <br class="hidden md:flex" />
              pour l'Immersion
            </p>
          </div>
          <div class="flex space-x-2 items-center">
            <img src="../assets/icon/passport.png" width="50" height="50" alt="passport_png" />
            <p class="text-lg text-gray-800">
              Cours Disponibles <br class="hidden lg:flex"> pour Tous les Niveaux
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="w-full p-4 sm:p-12 md:p-24 flex items-center justify-center" id="breach">
  <div
    class="grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12 grid-flow-row gap-14 xl:gap-8 items-center justify-center w-full">
    <div class="col-span-4 xl:col-span-3 group relative bg-white h-80 rounded-lg" data-aos-once="false"
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
      <div class="absolute w-full h-full p-8 flex flex-col items-center justify-center">
        <img src="../assets/icon/passport.png" alt="" />
        <div class="w-full py-4 space-y-2 flex justify-center items-center flex-col">
          <h3 class="text-2xl text-gray-700 duration-300 group-hover:text-white">
            Cours de Langue
          </h3>
          <p class="text-sm text-center p-1 text-gray-700 duration-300 group-hover:text-white">
            Découvrez notre large gamme de cours de français adaptés à tous les niveaux.
          </p>
        </div>
      </div>
      <div class="w-full h-0 duration-500 group-hover:h-full group-hover:bg-[#073183] group-hover:bg-opacity-60">
      </div>
    </div>
    <div class="col-span-4 xl:col-span-3 group relative bg-white h-80 rounded-lg" data-aos-once="false"
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
      <div class="absolute w-full h-full py-8 flex flex-col items-center justify-center">
        <img src="../assets/icon/peoples.png" alt="" />
        <div class="w-full py-4 space-y-2 flex justify-center items-center flex-col">
          <h3 class="text-2xl text-gray-700 duration-300 group-hover:text-white">
            Équipe d'Expert
          </h3>
          <p class="text-sm text-center p-1 text-gray-700 duration-300 group-hover:text-white">
            Notre équipe expérimentée vous accompagne tout au long de votre apprentissage.
          </p>
        </div>
      </div>
      <div class="w-full h-0 duration-500 group-hover:h-full group-hover:bg-[#073183] group-hover:bg-opacity-60">
      </div>
    </div>
    <div class="col-span-4 xl:col-span-3 group relative bg-white h-80 rounded-lg" data-aos-once="false"
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
      <div class="absolute w-full h-full py-8 flex flex-col items-center justify-center">
        <img src="../assets/icon/check.png" alt="" />
        <div class="w-full py-4 space-y-2 flex justify-center items-center flex-col">
          <h3 class="text-2xl text-gray-700 duration-300 group-hover:text-white">
            Méthodes Innovantes
          </h3>
          <p class="text-sm text-center p-1 text-gray-700 duration-300 group-hover:text-white">
            Apprenez avec des méthodes interactives qui rendent l'apprentissage agréable.
          </p>
        </div>
      </div>
      <div class="w-full h-0 duration-500 group-hover:h-full group-hover:bg-[#073183] group-hover:bg-opacity-60">
      </div>
    </div>
    <div class="col-span-4 xl:col-span-3 group relative bg-white h-80 rounded-lg" data-aos-once="false"
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
      <div class="absolute w-full h-full py-8 flex flex-col items-center justify-center">
        <img src="../assets/icon/handshake.png" alt="" />
        <div class="w-full py-4 space-y-2 flex justify-center items-center flex-col">
          <h3 class="text-2xl text-gray-700 duration-300 group-hover:text-white">
            Taux de Réussite
          </h3>
          <p class="text-sm text-center p-1 text-gray-700 duration-300 group-hover:text-white">
            Rejoignez nos nombreux étudiants qui ont réussi grâce à notre soutien.
          </p>
        </div>
      </div>
      <div class="w-full h-0 duration-500 group-hover:h-full group-hover:bg-[#073183] group-hover:bg-opacity-60">
      </div>
    </div>
  </div>
</div>

<div class="w-full px-4 sm:p-12 md:p-24 flex flex-col items-center justify-center">
  <div class="w-full md:w-5/6 lg:mx-auto p-3 sm:p-6 flex justify-center relative">
    <h4 class="text-xl font-bold text-[#073183] uppercase px-6 py-1 z-10 -translate-y-2 bg-white absolute"
      data-aos-once="true" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
      Catégories de competences
    </h4>
    <div class="space-y-2 sm:space-y-3 translate-y-2 w-full flex justify-center items-center flex-col">
      <div class="w-[280px] lg:w-[360px] h-[2px] bg-[#073183]"></div>
      <div class="w-[320px] lg:w-[400px] h-[2px] bg-red-600"></div>
    </div>
  </div>
  <h1 class="text-4xl lg:text-5xl font-bold text-[#073183] text-center py-4" data-aos-once="true" data-aos="fade-up"
    data-aos-duration="1000" data-aos-delay="500">
    Faciliter votre progression <br class="hidden md:flex" />
    vers succès
  </h1>
  <div class="w-full lg:w-5/6 lg:mx-auto lg:py-5">
    <p class="text-center font-normal text-lg lg:text-xl text-gray-600" data-aos-once="true" data-aos="fade-up"
      data-aos-duration="1000" data-aos-delay="500">
      Notre formation en langue vous propose des cours adaptés pour maîtriser le français, essentiel pour
      votre parcours. Rejoignez-nous pour une expérience d'apprentissage enrichissante et
      personnalisée.
    </p>
  </div>
  <div
    class="grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12 grid-flow-row gap-14 xl:gap-8 items-center justify-center py-8 w-full">
    <div class="col-span-4 xl:col-span-4 cursor-pointer group relative overflow-hidden bg-white h-80 rounded-lg"
      data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
      <div
        class="absolute w-full p-4 group-hover:duration-500 z-10 group-hover:h-full bg-transparent flex flex-col justify-between group-hover:bg-[#3d3d3d] group-hover:bg-opacity-60">
        <div class="w-full space-y-4 flex flex-col items-center">
          <h4 class="text-transparent group-hover:text-white text-2xl lg:text-3xl uppercase">
            Developpement
          </h4>
          <p class="text-transparent group-hover:text-white text-sm text-center">
            Obtenez votre competence et commencez votre parcours d'apprentissage en langue.
          </p>
        </div>
        <div class="w-full justify-center flex">
          <a href="#"
            class="w-3/5 text-center mx-auto py-3 text-transparent group-hover:hover:duration-300 group-hover:hover:bg-blue-800 group-hover:hover:text-white group-hover:bg-white rounded group-hover:text-gray-800">Explorer
            Plus</a>
        </div>
      </div>

      <div class="w-full h-full">
        <img src="../assets/img/13.jpg" class="w-full h-full group-hover:scale-150 group-hover:duration-500"
          alt="services_img" />
      </div>
    </div>
    <div class="col-span-4 xl:col-span-4 cursor-pointer group relative overflow-hidden bg-white h-80 rounded-lg"
      data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
      <div
        class="absolute w-full p-4 group-hover:duration-500 z-10 group-hover:h-full bg-transparent flex flex-col justify-between group-hover:bg-[#3d3d3d] group-hover:bg-opacity-60">
        <div class="w-full space-y-4 flex flex-col items-center">
          <h4 class="text-transparent group-hover:text-white text-2xl lg:text-3xl uppercase">
           Cultivez votre langage
          </h4>
          <p class="text-transparent group-hover:text-white text-sm text-center">
            Découvrez comment obtenir un vise dans apprentissage pour mieux vivre.
          </p>
        </div>
        <div class="w-full justify-center flex">
          <a href="#"
            class="w-3/5 text-center mx-auto py-3 text-transparent group-hover:hover:duration-300 group-hover:hover:bg-blue-800 group-hover:hover:text-white group-hover:bg-white rounded group-hover:text-gray-800">Explorer
            +</a>
        </div>
      </div>

      <div class="w-full h-full">
        <img src="../assets/img/10.jpg" class="w-full h-full group-hover:scale-150 group-hover:duration-500"
          alt="services_img" />
      </div>
    </div>
    <div class="col-span-4 xl:col-span-4 cursor-pointer group relative overflow-hidden bg-white h-80 rounded-lg"
      data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
      <div
        class="absolute w-full p-4 group-hover:duration-500 z-10 group-hover:h-full bg-transparent flex flex-col justify-between group-hover:bg-[#3d3d3d] group-hover:bg-opacity-60">
        <div class="w-full space-y-4 flex flex-col items-center">
          <h4 class="text-transparent group-hover:text-white text-2xl lg:text-3xl uppercase">
           Booster votre savoir
          </h4>
          <p class="text-transparent group-hover:text-white text-sm text-center">
            Obtenez votre competences pour découvrir la culture de la langue française.
          </p>
        </div>
        <div class="w-full justify-center flex">
          <a href="#"
            class="w-3/5 text-center mx-auto py-3 text-transparent group-hover:hover:duration-300 group-hover:hover:bg-blue-800 group-hover:hover:text-white group-hover:bg-white rounded group-hover:text-gray-800">Explorer
            +</a>
        </div>
      </div>

      <div class="w-full h-full">
        <img src="../assets/img/6.jpg" class="w-full h-full group-hover:scale-150 group-hover:duration-500"
          alt="services_img" />
      </div>
    </div>
    <div class="col-span-4 xl:col-span-4 cursor-pointer group relative overflow-hidden bg-white h-80 rounded-lg"
      data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
      <div
        class="absolute w-full p-4 group-hover:duration-500 z-10 group-hover:h-full bg-transparent flex flex-col justify-between group-hover:bg-[#3d3d3d] group-hover:bg-opacity-60">
        <div class="w-full space-y-4 flex flex-col items-center">
          <h4 class="text-transparent group-hover:text-white text-2xl lg:text-3xl uppercase">
           etablir votre plan
          </h4>
          <p class="text-transparent group-hover:text-white text-sm text-center">
            Apprenez pour développer votre carrière.
          </p>
        </div>
        <div class="w-full justify-center flex">
          <a href="#"
            class="w-3/5 text-center mx-auto py-3 text-transparent group-hover:hover:duration-300 group-hover:hover:bg-blue-800 group-hover:hover:text-white group-hover:bg-white rounded group-hover:text-gray-800">Explorer
            +</a>
        </div>
      </div>

      <div class="w-full h-full">
        <img src="../assets/img/3.jpg" class="w-full h-full group-hover:scale-150 group-hover:duration-500"
          alt="services_img" />
      </div>
    </div>
    <div class="col-span-4 xl:col-span-4 cursor-pointer group relative overflow-hidden bg-white h-80 rounded-lg"
      data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
      <div
        class="absolute w-full p-4 group-hover:duration-500 z-10 group-hover:h-full bg-transparent flex flex-col justify-between group-hover:bg-[#3d3d3d] group-hover:bg-opacity-60">
        <div class="w-full space-y-4 flex flex-col items-center">
          <h4 class="text-transparent group-hover:text-white text-2xl lg:text-3xl uppercase">
             Exploration
          </h4>
          <p class="text-transparent group-hover:text-white text-sm text-center">
            Explorez les opportunités d'affaires avec le langage francais approprié.
          </p>
        </div>
        <div class="w-full justify-center flex">
          <a href="#"
            class="w-3/5 text-center mx-auto py-3 text-transparent group-hover:hover:duration-300 group-hover:hover:bg-blue-800 group-hover:hover:text-white group-hover:bg-white rounded group-hover:text-gray-800">Explorer
            +</a>
        </div>
      </div>

      <div class="w-full h-full">
        <img src="../assets/img/5.jpg" class="w-full h-full group-hover:scale-150 group-hover:duration-500"
          alt="services_img" />
      </div>
    </div>
    <div class="col-span-4 xl:col-span-4 cursor-pointer group relative overflow-hidden bg-white h-80 rounded-lg"
      data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
      <div
        class="absolute w-full p-4 group-hover:duration-500 z-10 group-hover:h-full bg-transparent flex flex-col justify-between group-hover:bg-[#3d3d3d] group-hover:bg-opacity-60">
        <div class="w-full space-y-4 flex flex-col items-center">
          <h4 class="text-transparent group-hover:text-white text-2xl lg:text-3xl uppercase">
           Exigences
          </h4>
          <p class="text-transparent group-hover:text-white text-sm text-center">
            Découvrez et Explorez vos exigences.
          </p>
        </div>
        <div class="w-full justify-center flex">
          <a href="#"
            class="w-3/5 text-center mx-auto py-3 text-transparent group-hover:hover:duration-300 group-hover:hover:bg-blue-800 group-hover:hover:text-white group-hover:bg-white rounded group-hover:text-gray-800">Explorer
            +</a>
        </div>
      </div>

      <div class="w-full h-full">
        <img src="../assets/img/2.jpg" class="w-full h-full group-hover:scale-150 group-hover:duration-500"
          alt="services_img" />
      </div>
    </div>
  </div>
</div>
    <div class="w-full p-4 sm:p-12 md:p-24 flex flex-col items-center justify-center bg-[#ffff]">
      <div class="w-full md:w-5/6 lg:mx-auto p-3 sm:p-6 flex justify-center relative">
        <h4 class="text-xl font-bold text-[#073183] uppercase px-6 py-1 z-10 -translate-y-2 bg-[#ffff] absolute"
          data-aos-once="true" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
          disponible en Europe
        </h4>
        <div class="space-y-2 sm:space-y-3 w-full translate-y-2 flex justify-center items-center flex-col">
          <div class="w-[280px] lg:w-[360px] h-[2px] bg-[#073183]"></div>
          <div class="w-[320px] lg:w-[400px] h-[2px] bg-red-600"></div>
        </div>
      </div>
      <h1 class="text-4xl lg:text-5xl font-bold text-[#073183] text-center py-4" data-aos-once="true" data-aos="fade-up"
        data-aos-duration="1000" data-aos-delay="500">
        formation disponible <br class="hidden md:flex" />
        partout en Europe 
      </h1>
      <div
        class="grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12 grid-flow-row gap-14 xl:gap-8 items-center justify-center w-full py-12">
        <div class="col-span-4 xl:col-span-3 relative flex  justify-center shadow-2xl shadow-gray-400 bg-white "
          data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <div
            class="w-24 h-24 z-10 overflow-hidden rounded-full border-4 border-white absolute top-0 -translate-y-8 lg:-translate-y-12">
            <img src="../assets/img/belgique.jpeg" class="w-full h-full object-cover object-center" alt="" />
          </div>
          <div class="w-full h-[320px] group rounded-lg overflow-hidden relative">
            <div
              class="w-full h-0 group-hover:duration-500 absolute group-hover:h-full group-hover:bg-[#073183] group-hover:bg-opacity-60 flex items-center justify-center">
              <p class="text-lg text-transparent group-hover:text-white uppercase">belgique</p>
            </div>
            <img src="../assets/img/img_belgique.jpeg" alt="img_belgique_jpeg"
              class="w-full h-full object-cover object-center" />
          </div>
        </div>
        <div class="col-span-4 xl:col-span-3 relative flex  justify-center shadow-2xl shadow-gray-400 bg-white "
          data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <div
            class="w-24 h-24 z-10 overflow-hidden rounded-full border-4 border-white absolute top-0 -translate-y-8 lg:-translate-y-12">
            <img src="../assets/img/luxembourg.jpeg" class="w-full h-full object-cover object-center" alt="irlande_jpg" />
          </div>
          <div class="w-full h-[320px] group rounded-lg overflow-hidden relative">
            <div
              class="w-full h-0 group-hover:duration-500 absolute group-hover:h-full group-hover:bg-[#073183] group-hover:bg-opacity-60 flex items-center justify-center">
              <p class="text-lg text-transparent group-hover:text-white uppercase">luxembourg</p>
            </div>
            <img src="../assets/img/luxembourg_img.jpeg" alt="drapeau_irlande_jpeg"
              class="w-full h-full object-cover object-center" />
          </div>
        </div>
        <div class="col-span-4 xl:col-span-3 relative flex  justify-center shadow-2xl shadow-gray-400 bg-white "
          data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <div
            class="w-24 h-24 z-10 overflow-hidden rounded-full border-4 border-white absolute top-0 -translate-y-8 lg:-translate-y-12">
            <img src="../assets/img/monaco.jpeg" class="w-full h-full object-cover object-center"
              alt="australia_jpg" />
          </div>
          <div class="w-full h-[320px] group rounded-lg overflow-hidden relative">
            <div
              class="w-full h-0 group-hover:duration-500 absolute group-hover:h-full group-hover:bg-[#073183] group-hover:bg-opacity-60 flex items-center justify-center">
              <p class="text-lg text-transparent group-hover:text-white uppercase">monaco</p>
            </div>
            <img src="../assets/img/monaco_image.jpeg" alt="img_australia_jpeg"
              class="w-full h-full object-cover object-center" />
          </div>
        </div>
        <div class="col-span-4 xl:col-span-3 relative flex  justify-center shadow-2xl shadow-gray-400 bg-white "
          data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <div
            class="w-24 h-24 z-10 overflow-hidden rounded-full border-4 border-white absolute top-0 -translate-y-8 lg:-translate-y-12">
            <img src="../assets/img/usa.jpg" class="w-full h-full object-cover object-center"
              alt="singapour_jpg" />
          </div>
          <div class="w-full h-[320px] group rounded-lg overflow-hidden relative">
            <div
              class="w-full h-0 group-hover:duration-500 absolute group-hover:h-full group-hover:bg-[#073183] group-hover:bg-opacity-60 flex items-center justify-center">
              <p class="text-lg text-transparent group-hover:text-white uppercase">usa</p>
            </div>
            <img src="../assets/icon/img-singapour.webp" alt="img_singapour_webp"
              class="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center ">
        <a href="#" class="px-12 duration-300 text-lg py-4 rounded-full bg-[#073183] hover:bg-black text-white">
          dans tout l'Europe</a>
      </div>
    </div>
    <!----------------------------------------------what customers say-->
   
    
    <FooterComponent class="shadow-xl shadow-blue-500"/>
  </div>
</template>

<script>
import image1 from "../assets/img/3.jpg";
import image2 from "../assets/img/12.jpg";
import image3 from "../assets/img/10.jpg";
import image4 from "../assets/img/5.jpg";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
      // store: store(),
      cards: [
        {
          image: image1,
          title: "L'Immersion Linguistique, Votre Avenir ",
          description:
            "Ouvrez les portes de la francophonie.",
        },
        {
          image: image2,
          title: "Apprenez le Français, Élargissez Vos Horizons !",
          description:
            "Une langue, mille opportunités.",
        },
        {
          image: image3,
          title: "Votre Voyage Linguistique Commence Ici !",
          description:
            "Des cours dynamiques pour tous les âges.",
        },
        {
          image: image4,
          title: "Un Monde de Langue à Portée de Main !",
          description:
            "Rejoignez-nous pour une aventure linguistique enrichissante.",
        },
      ],
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  components: {
    FooterComponent
  },
  methods: {
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextCard();
      }, 5000); // Délai de 5 secondes
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    },

    prevCard() {
      this.currentIndex =
        (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    },
    nextCard() {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    },
  },
};
</script>

<style>
* {
  font-family: "Merriweather-bold";
}

.card-slide {
  flex: 0 0 100%;
}

#breach {
  background-image: linear-gradient(rgba(245, 244, 244, 0.6),
      rgba(206, 203, 203, 0.8)),
    url("../assets/img/breadcrumb.png");
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>