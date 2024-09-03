<template>
  <div>
    <div class="w-full flex items-center z-50 justify-between px-2 sm:px-8 py-6 xl:hidden shadow">
      <div class="items-center">
        <img src="../assets/icon/logo_mfl.png" class="" width="200" height="200" alt="logo_png" />
      </div>
      <div class="flex space-x-4 items-center">
        <div @click="dropDown" class="cursor-pointer flex space-x-2 items-center justify-center relative">
          <div class="w-12 h-12 rounded-full overflow-hidden">
            <img v-if="auth" src="../assets/icon/person.jpg" class="w-full h-full object-cover object-center"
              alt="avatar_img" />
          </div>
          <img src="../assets/icon/drop.png" class="w-8 h-8" alt="arrow_drop_png" />
          <div :class="{ block: isDrop, hidden: !isDrop }"
            class="w-44 p-3 overflow-hidden duration-300 flex-col items-start justify-center absolute z-50 bg-white shadow-xl mx-auto translate-y-14 top-0 right-2">
            <div class="w-full border-b border-[#073183] flex justify-between items-center py-2">
              <a href="#" class="text-sm text-[#073183] font-semibold">Mon profil</a>
              <img src="../assets/icon/account.png" class="w-5 h-5" alt="profil_icon" />
            </div>
            <div class="w-full py-2 flex justify-between">
              <button class="outline-none text-[#073183] font-semibold text-sm">
                Deconnexion
              </button>
              <img src="../assets/icon/deconnect.png" class="w-5 h-5" alt="lougout_png" />
            </div>
          </div>
        </div>
        <button v-if="!isMenuOpen" @click="toggleMenu" class="xl:hidden space-y-1">
          <div class="w-8 h-1 bg-[#073183]"></div>
          <div class="w-8 h-1 bg-[#073183]"></div>
          <div class="w-8 h-1 bg-[#073183]"></div>
        </button>
        <button v-if="isMenuOpen" @click="toggleMenu" class="cursor-pointer relative">
          <div class="absolute transform rotate-45 w-8 h-1 bg-[#073183] translate-y-1"></div>
          <div class="absolute transform -rotate-45 w-8 h-1 bg-[#073183]"></div>
        </button>
      </div>
    </div>
    <div class="xl:fixed z-50 w-full">
      <div class="block w-full xl:flex items-center justify-between px-8 py-3 bg-[#203da4]">
        <div class="flex space-x-4">
          <div class="flex space-x-2 items-center text-white">
            <img src="../assets/icon/schedule_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png" class="w-6 h-6" alt="time_png" />
            <div class="space-y-1">
              <p class="text-xs">
                Nous contacter <br />
                <span>24h/24h</span>
              </p>
            </div>
          </div>
          <div class="flex space-x-2 items-center text-white">
            <img src="../assets/icon/mail_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png" class="w-6 h-6" alt="mail_png" />
            <div class="space-y-1">
              <p class="text-xs">
                Adresse : <br />
                <a href="mailto:le.francais-m@yahoo.com?subject=En%20quoi%20pouvons-nous%20aider&body=Bonjour, %0A%0A"
                  rel="noopener noreferrer" class="text-blue-500 hover:underline">
                  le.francais-m@yahoo.com
                </a>
              </p>
            </div>

            <div class="flex space-x-2 items-center text-white">
              <img src="../assets/icon/phone_in_talk_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png" class="w-6 h-6"
                alt="Icône de téléphone" />
              <div class="space-y-1">
                <p class="text-xs">
                  Téléphone : <br />
                  <a href="https://wa.me/15165532855" target="_blank" rel="noopener noreferrer"
                    class="text-blue-500 hover:underline">
                    +15165532855
                  </a>
                </p>
              </div>
            </div>

            <div class="flex space-x-2 items-center text-white">
              <img src="../assets/icon/youtube.png" class="w-6 h-6" alt="Icône de téléphone" />
              <div class="space-y-1">
                <p class="text-xs">
                  YouTube : <br />
                  <a :href="LinkYouTube" target="_blank" rel="noopener noreferrer"
                    class="text-blue-500 hover:underline">
                    http://www.youtube.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex space-x-2">
          <img src="../assets/icon/notifications.png" class="w-6 h-6" alt="notify-icon" />
        </div>
      </div>
      <nav :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
        class="xl:flex w-full bg-white xl:justify-between py-8 xl:py-0 z-20 xl:relative xl:px-8 xl:h-24 shadow-xl xl:items-center xl:space-x-4">
        <div class="hidden xl:flex">
          <img src="../assets/img/logo.png" class="cursor-pointer" width="200" height="200" alt="logo_png" />
        </div>
        <ul
          class="flex flex-col xl:flex-row space-y-6 xl:space-y-0 px-4 xl:px-0 xl:space-x-8 justify-center xl:items-center">
          <li>
            <a href="#" class="block text-[#073183] py-3 duration-300 hover:text-[#000] text-lg">Accueil</a>
          </li>
          <li>
            <a href="#" class="block text-[#073183] py-3 duration-300 hover:text-[#000] text-lg">A propos
            </a>
          </li>
          <li>
            <a href="#" class="block text-[#073183] py-3 duration-300 hover:text-[#000] text-lg">Services</a>
          </li>

          <li v-if="!isConnected">
            <router-link to="/register"
              class="px-6 py-3 rounded border border-[#073183] bg-white hover:bg-[#000] duration-300 text-black hover:text-white font-semibold">Contactez-nous</router-link>
          </li>
          <div v-if="isConnected" @click="dropDown"
            class="cursor-pointer hidden xl:flex space-x-2 items-center justify-center relative">
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <img :src="chemin + user.avatar" class="w-full h-full object-cover object-center" alt="avatar_img" />
            </div>
            <img src="../assets/icon/drop.png" class="w-8 h-8" alt="arrow_drop_png" />
            <div :class="{ block: isDrop, hidden: !isDrop }"
              class="w-44 p-3 overflow-hidden duration-300 flex-col items-start justify-center bg-white shadow-xl mx-auto absolute translate-y-14 top-0 right-8">
              <div class="w-full border-b border-[#073183] hidden xl:flex justify-between items-center py-2">
                <router-link class="text-sm text-[#073183] font-semibold">Mon profil</router-link>
                <img src="../assets/icon/account.png" class="w-5 h-5" alt="profil_icon" />
              </div>
              <div class="w-full py-2 flex justify-between">
                <button class="outline-none text-[#073183] font-semibold text-sm">
                  Deconnexion
                </button>
                <img src="../assets/icon/deconnect.png" class="w-5 h-5" alt="lougout_png" />
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
    <router-view name="one"></router-view>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      isConnected: false,
      open: ref(false),
      isMenuOpen: false,
      isDrop: false,
      LinkYouTube: "http://www.youtube.com/@lesastronautes-astronauten2324"
    };
  },
  mounted() {
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    dropDown() {
      this.isDrop = !this.isDrop;
    },
  },
};
</script>