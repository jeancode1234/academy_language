<template>
  <div class="w-full h-screen flex justify-center lg:justify-end items-center relative">
    <div class="hidden lg:flex w-full h-full bg-[#073183] bg-opacity-60 absolute"></div>
    <div class="hidden lg:flex w-full h-full overflow-hidden">
      <img src="../../assets/img/logo_register.jpg" class="w-full h-full object-cover object-center" alt="img_font" />
    </div>

    <div
      class="w-full md:w-[600px] flex flex-col justify-center items-center h-full bg-white absolute z-20 px-4 lg:px-8">
      <div class="w-full flex flex-col items-center space-y-2">
        <img src="../../assets/img/logo.png" width="100" height="100" alt="Logo" />
      </div>

      <form @submit.prevent="sendWhatsApp" class="w-full space-y-4 mt-6">
        <div v-if="errors.length" class="space-y-2">
          <p v-for="(error, index) in errors" :key="index"
            class="bg-red-600 w-full text-center text-white rounded px-2 py-1">
            {{ error }}
          </p>
        </div>
        <p class="bg-green-700 w-full text-center text-white rounded px-2 py-1" v-if="successMessage">{{ successMessage
          }}</p>
        <div class="relative">
          <img src="../../assets/icon/account.png" class="absolute right-4 w-6 h-6" alt="Account" />
          <input required type="text" v-model="form.name"
            class="w-full border focus:ring-2 text-lg focus:ring-[#073183] outline-none h-14 px-4 rounded-full placeholder:text-[#7c7d7e]"
            placeholder="Votre nom et votre prenom" />
        </div>

        <div class="relative">
          <img src="../../assets/icon/address.png" class="absolute right-4 w-6 h-6" alt="Email" />
          <input required type="email" v-model="form.email"
            class="w-full border focus:ring-2 text-lg focus:ring-[#073183] outline-none h-14 px-4 rounded-full placeholder:text-[#7c7d7e]"
            placeholder="Email" />
        </div>

        <div class="relative">
          <img src="../../assets/icon/number.png" class="absolute right-4 w-6 h-6" alt="telephone" />
          <input required type="tel" v-model="form.telephone"
            class="w-full border focus:ring-2 text-lg focus:ring-[#073183] outline-none h-14 px-4 rounded-full placeholder:text-[#7c7d7e]"
            placeholder="entrez votre numero de telephone" />
        </div>


        <div class="relative">
          <select
            class="w-full border focus:ring-2 text-lg focus:ring-[#073183] outline-none h-14 px-4 rounded-full placeholder:text-[#7c7d7e]"
            name="langue" id="langue" v-model="form.langue">
            <option value="choisir votre langue" disabled>choisir votre langue</option>
            <option value="francais">francais</option>
            <option value="allemand">allemand</option>
          </select>
        </div>


        <div class="relative">
          <select
            class="w-full border focus:ring-2 text-lg focus:ring-[#073183] outline-none h-14 px-4 rounded-full placeholder:text-[#7c7d7e]"
            name="langue" id="langue" v-model="form.niveau">
            <option value="choisir votre langue" disabled>Quel niveau estimez-vous avoir aujourd'hui ?</option>
            <option value="Débutant complet">Débutant complet</option>
            <option value="Faux-débutant">Faux-débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>
        </div>

        <div class="relative">
          <select
            class="w-full border focus:ring-2 text-lg focus:ring-[#073183] outline-none h-14 px-4 rounded-full placeholder:text-[#7c7d7e]"
            name="langue" id="langue" v-model="form.diplome">
            <option value="choisir votre langue" disabled>Si oui, quel niveau avez-vous validé ? </option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
          </select>
        </div>


        <div class="relative">
          <select
            class="w-full border focus:ring-2 text-lg focus:ring-[#073183] outline-none h-14 px-4 rounded-full placeholder:text-[#7c7d7e]"
            name="langue" id="langue" v-model="form.competence">
            <option value="choisir votre langue" disabled>Quelles compétences souhaiteriez-vous particulièrement
              améliorer ? </option>
            <option value="Expression orale">Expression orale </option>
            <option value="Compréhension orale">Compréhension orale</option>
            <option value="Expression écrite">Expression écrite</option>
            <option value="Compréhension écrite">Compréhension écrite</option>
          </select>
        </div>


        <button type="submit"
          class="w-full rounded-full h-14 bg-[#073183] hover:bg-[#182a50] duration-300 flex items-center justify-center text-xl text-white">
          inscrivez-vous
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        telephone: "",
        diplome: "",
        niveau: "",
        competence: "",
        langue: ""
      },
      errors: [],
      successMessage: ''
    };
  },
  methods: {
    sendWhatsApp() {
      const message = `Nom: ${this.form.name}\n\nE-mail: ${this.form.email}\n\nTelephoneWhatsapp: ${this.form.telephone} \n\nDiplome: ${this.form.diplome} \n\nNiveau: ${this.form.niveau} \n\nCompetence: ${this.form.competence} \n\nLangue: ${this.form.langue}`;
      const phoneNumber = '15165532855';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      // Ouvre le lien WhatsApp dans un nouvel onglet ou fenêtre
      window.open(url, '_blank');

      this.successMessage = "Vos informations ont été envoyées!";
      this.resetForm();
    },
    resetForm() {
      this.form.name = ""
      this.form.email = ""
      this.form.telephone = ""
      this.form.diplome = ""
      this.form.niveau = ""
      this.form.competence = ""
      this.form.langue = ""
      this.successMessage = ""
    }
  }
}
</script>