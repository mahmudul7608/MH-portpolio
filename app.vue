<template>
  <div
    class="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
  >
    <!-- Header Navbar -->
    <template>
      <header
        class="fixed top-0 left-0 w-full z-50 px-6 sm:px-10 py-6 sm:py-8 bg-transparent"
      >
        <!-- Mobile Navbar -->
        <div class="sm:hidden flex justify-between items-center">
          <h1 class="text-xl font-bold text-white">Mahmudul</h1>
          <button
            @click="isMobileNavOpen = !isMobileNavOpen"
            class="focus:outline-none z-50"
          >
            <svg
              v-if="!isMobileNavOpen"
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <transition name="fade">
          <div
            v-if="isMobileNavOpen"
            class="sm:hidden fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 text-white uppercase text-lg font-medium"
          >
            <a @click="closeMenu" href="#intro" class="hover:text-[#18ffb0]"
              >Home</a
            >
            <a @click="closeMenu" href="#skills" class="hover:text-[#18ffb0]"
              >Skills</a
            >
            <a
              @click="closeMenu"
              href="#tools-i-use"
              class="hover:text-[#18ffb0]"
              >Tools</a
            >
            <a
              @click="closeMenu"
              href="#my-recent-project"
              class="hover:text-[#18ffb0]"
              >Projects</a
            >
            <a
              @click="closeMenu"
              href="#contact-me"
              class="hover:text-[#18ffb0]"
              >Contact</a
            >
          </div>
        </transition>

        <!-- Desktop Navbar -->
        <nav class="hidden sm:flex justify-center relative z-50">
          <div
            class="fixed top-6 sm:top-8 left-1/2 -translate-x-1/2 border border-[rgba(255,255,255,.1)] bg-[rgba(4,19,14,0.5)] backdrop-blur-xl rounded-full flex items-center py-3 px-4 space-x-2 sm:space-x-4 text-sm font-medium uppercase tracking-wide text-white"
          >
            <a
              href="#intro"
              class="px-4 border-r border-[rgba(255,255,255,0.1)] hover:text-[#18ffb0] transition-all"
              >Home</a
            >
            <a
              href="#skills"
              class="px-4 border-r border-[rgba(255,255,255,0.1)] hover:text-[#18ffb0] transition-all"
              >Skills</a
            >
            <a
              href="#tools-i-use"
              class="px-4 border-r border-[rgba(255,255,255,0.1)] hover:text-[#18ffb0] transition-all"
              >Tools</a
            >
            <a
              href="#my-recent-project"
              class="px-4 border-r border-[rgba(255,255,255,0.1)] hover:text-[#18ffb0] transition-all"
              >Projects</a
            >
            <a
              href="#contact-me"
              class="px-4 hover:text-[#18ffb0] transition-all"
              >Contact</a
            >
          </div>
        </nav>
      </header>
    </template>

    <!-- Hero Section -->
    <section
      class="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 pt-20 pb-20 max-w-screen-xl mx-auto"
    >
      <!-- Text Content -->
      <div class="max-w-xl text-center md:text-left">
        <h2 class="leading-tight font-extrabold text-center md:text-left">
          <span
            class="text-6xl sm:text-7xl md:text-8xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text block"
          >
            FRONTEND
          </span>
          <span
            class="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text block mt-2"
          >
            DEVELOPER
          </span>
        </h2>

        <p
          class="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
        >
          I'm
          <span class="font-semibold text-black dark:text-white">Mahmudul</span>
          — a
          <span class="text-sky-600 font-semibold">Frontend Developer</span>
          passionate about turning ideas into modern, responsive, and
          user-friendly web experiences. With strong skills in
          <span class="font-medium">Vue.js, Nuxt, Tailwind CSS</span>, and more,
          I bring beautiful interfaces to life with clean, maintainable code.
        </p>

        <a
          href="#portfolio"
          class="inline-block mt-8 px-6 py-3 rounded-lg border border-pink-500 bg-gradient-to-r from-sky-400 to-pink-500 text-black font-semibold hover:scale-105 transition shadow-xl"
        >
          download resume
        </a>
      </div>

      <!-- Image -->
      <div class="w-full md:w-[45%] mb-10 md:mb-0">
        <img
          src="/image/HM-image-1.png"
          alt="Mahmudul Hasan"
          class="rounded-xl shadow-lg mx-auto max-w-full"
        />
      </div>
    </section>

    <!-- Scroll Down Hint -->
    <div class="flex flex-col items-center space-y-2 mb-2">
      <span class="text-white text-xs sm:text-lg font-medium"
        >Scroll to explore</span
      >
      <div
        class="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center p-1 bg-black/20 backdrop-blur-sm"
      >
        <div
          class="w-1 h-1.5 sm:w-1 sm:h-2 bg-white rounded-full animate-bounce"
        ></div>
      </div>
    </div>
    <!-- Skill and technology section -->
    <section id="skills" class="py-20 bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white">Frontend Tech Stack</h2>
          <p class="text-lg text-gray-300 mt-2">
            Modern Frontend Development Technologies & Tools
          </p>
        </div>

        <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <!-- Core Frontend -->
          <div
            class="relative group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#18ffb033] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            ></div>

            <div class="relative z-10">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#61dafb] to-[#21d4fd] text-2xl mr-3"
                >
                  ⚛️
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">
                    Core Frontend
                  </h3>
                  <p class="text-sm uppercase text-gray-400">
                    Languages & Frameworks
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="tech-badge">HTML5</span>
                <span class="tech-badge">CSS3</span>
                <span class="tech-badge">JavaScript</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">React</span>
                <span class="tech-badge">Vue</span>
                <span class="tech-badge">Angular</span>
                <span class="tech-badge">Next.js</span>
                <span class="tech-badge">Nuxt.js</span>
              </div>
            </div>
          </div>

          <!-- Styling & UI -->
          <div
            class="relative group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#18ffb033] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            ></div>

            <div class="relative z-10">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#ab47bc] to-[#8e24aa] text-2xl mr-3"
                >
                  🎨
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">Styling & UI</h3>
                  <p class="text-sm uppercase text-gray-400">
                    Design & Animation
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="tech-badge">Tailwind CSS</span>
                <span class="tech-badge">Sass/SCSS</span>
                <span class="tech-badge">Styled Components</span>
                <span class="tech-badge">Material-UI</span>
                <span class="tech-badge">Ant Design</span>
                <span class="tech-badge">Framer Motion</span>
                <span class="tech-badge">CSS Modules</span>
                <span class="tech-badge">Bootstrap</span>
              </div>
            </div>
          </div>

          <!-- Dev Tools -->
          <div
            class="relative group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#18ffb033] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            ></div>

            <div class="relative z-10">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#66bb6a] to-[#43a047] text-2xl mr-3"
                >
                  🛠️
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">
                    Development Tools
                  </h3>
                  <p class="text-sm uppercase text-gray-400">
                    Build & Workflow
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="tech-badge">Vite</span>
                <span class="tech-badge">Webpack</span>
                <span class="tech-badge">Parcel</span>
                <span class="tech-badge">ESLint</span>
                <span class="tech-badge">Prettier</span>
                <span class="tech-badge">Git</span>
                <span class="tech-badge">GitHub</span>
                <span class="tech-badge">VS Code</span>
                <span class="tech-badge">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- skill section end -->
    <!-- another section start -->
    <section class="py-24 bg-black/50">
      <div class="container mx-auto px-4 max-w-7xl relative">
        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-16 text-white/90 z-10"
        >
          A True Builder
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="rounded-lg border text-card-foreground shadow-sm bg-black/20 backdrop-blur-md border-primary/20 hover:bg-black/30 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
          >
            <div class="p-6 pt-8 relative">
              <div class="flex flex-col items-center text-center">
                <div class="relative">
                  <div
                    class="absolute -inset-1 bg-blue-400/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"
                  ></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-brain w-12 h-12 mb-6 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
                    ></path>
                    <path
                      d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
                    ></path>
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                  </svg>
                </div>
                <h3
                  class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent"
                >
                  Engineering
                </h3>
                <p class="text-white/70">
                  Software engineering with expertise in Web and AI
                  Technologies.
                </p>
              </div>
            </div>
          </div>
          <div
            class="rounded-lg border text-card-foreground shadow-sm bg-black/20 backdrop-blur-md border-primary/20 hover:bg-black/30 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
          >
            <div class="p-6 pt-8 relative">
              <div class="flex flex-col items-center text-center">
                <div class="relative">
                  <div
                    class="absolute -inset-1 bg-purple-400/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"
                  ></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-rocket w-12 h-12 mb-6 text-purple-400 relative z-10 group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                    ></path>
                    <path
                      d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                    ></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                </div>
                <h3
                  class="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent"
                >
                  Design
                </h3>
                <p class="text-white/70">
                  Creating intuitive user experiences and visually appealing
                  interfaces.
                </p>
              </div>
            </div>
          </div>
          <div
            class="rounded-lg border text-card-foreground shadow-sm bg-black/20 backdrop-blur-md border-primary/20 hover:bg-black/30 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-500/10 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
          >
            <div class="p-6 pt-8 relative">
              <div class="flex flex-col items-center text-center">
                <div class="relative">
                  <div
                    class="absolute -inset-1 bg-green-400/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"
                  ></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-target w-12 h-12 mb-6 text-green-400 relative z-10 group-hover:scale-110 transition-transform duration-300"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3
                  class="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent"
                >
                  Marketing
                </h3>
                <p class="text-white/70">
                  Building and growing products with effective marketing
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- another setion end -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Reactive state for dark mode
const isDark = ref(false);

// Toggle dark mode and update the HTML root class
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
};

// On mount, set theme based on system preference
onMounted(() => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  isDark.value = prefersDark;
  document.documentElement.classList.toggle("dark", isDark.value);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* skill section */
.tech-badge {
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
}
.tech-badge:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
</style>
