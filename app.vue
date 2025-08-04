<template>
  <div
    class="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
  >
    <!-- Header Navbar -->
    <header class="bg-black/50 backdrop-blur-lg fixed top-0 left-0 w-full z-50 px-4">
    <nav class="relative text-white font-light uppercase tracking-wide z-50">
      <!-- Desktop Navbar -->
      <div
        class="hidden md:flex fixed top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-[80px] backdrop-blur-xl bg-[rgba(37,74,61,0.5)] items-center py-6 z-50"
      >
        <a class="px-6 text-[18px] tracking-widest border-r border-white/10 transition-all hover:text-[#c9f721]" href="#intro">Home</a>
        <a class="px-6 text-[18px] tracking-widest border-r border-white/10 transition-all hover:text-[#c9f721]" href="#about">About</a>
        <a class="px-6 text-[18px] tracking-widest border-r border-white/10 transition-all hover:text-[#c9f721]" href="#skills">Skills</a>
        <a class="px-6 text-[18px] tracking-widest border-r border-white/10 transition-all hover:text-[#c9f721]" href="#tools-i-use">Tools</a>
        <a class="px-6 text-[18px] tracking-widest border-r border-white/10 transition-all hover:text-[#c9f721]" href="#my-recent-project">Projects</a>
        <a class="px-6 text-[18px] tracking-widest transition-all hover:text-[#c9f721]" href="#contact-me">Contact</a>
      </div>

      <!-- Mobile Top Bar -->
      <div class="md:hidden flex justify-between items-center py-4">
        <h1 class="text-white text-lg font-semibold">Menu</h1>
        <button @click="toggleMenu" class="text-white text-3xl focus:outline-none">
          <span v-if="!isOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="md:hidden mt-4 flex flex-col bg-[rgba(37,74,61,0.95)] backdrop-blur-xl rounded-xl py-6 px-6 space-y-5 border border-white/10"
      >
        <a class="text-white font-medium text-lg uppercase tracking-wide transition hover:text-[#f73a21]" href="#intro" @click="toggleMenu">Home</a>
        <a class="text-white font-medium text-lg uppercase tracking-wide transition hover:text-[#f73a21]" href="#about" @click="toggleMenu">About</a>
        <a class="text-white font-medium text-lg uppercase tracking-wide transition hover:text-[#f73a21]" href="#skills" @click="toggleMenu">Skills</a>
        <a class="text-white font-medium text-lg uppercase tracking-wide transition hover:text-[#f73a21]" href="#tools-i-use" @click="toggleMenu">Tools</a>
        <a class="text-white font-medium text-lg uppercase tracking-wide transition hover:text-[#f73a21]" href="#my-recent-project" @click="toggleMenu">Projects</a>
        <a class="text-white font-medium text-lg uppercase tracking-wide transition hover:text-[#f73a21]" href="#contact-me" @click="toggleMenu">Contact</a>
      </div>
    </nav>
  </header>
    <!-- End Header Navbar -->

    <!-- Hero Section -->
    <section
      class="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 pt-20 pb-20 max-w-screen-xl mx-auto"
    >
      <!-- Text Content -->
      <div class="max-w-xl text-center md:text-left">
        <h2 class="leading-tight font-extrabold text-center md:text-left">
          <span
            class="text-6xl mt-[4rem] sm:text-7xl md:text-8xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text block"
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
          class="mt-7 text-gray-700 dark:text-gray-300 text-md leading-relaxed"
        >
          <span class="font-semibold text-black dark:text-white">I'm</span>
          - a
          <span class="text-sky-600 font-semibold">Frontend Developer</span>
          with a passion for clean design, smooth user experiences, and smart,
          scalable code. With strong experience in
          <span class="font-medium">collaborative team environments</span>, I
          thrive on building together and turning ideas into powerful, modern
          web solutions. Always learning, always building.
        </p>

        <div class="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
          <!-- Get in Touch Button -->
          <a
            href="#contact"
            class="inline-block px-4 py-2 rounded-full border border-pink-500 bg-gradient-to-r from-sky-400 to-pink-500 text-black font-semibold hover:scale-105 transition shadow-xl"
          >
            Get in Touch
          </a>

          <!-- View Projects Button -->
          <a
            href="#projects"
            class="inline-block px-4 py-2 rounded-full border border-purple-500 bg-white text-black font-semibold hover:bg-purple-500 hover:text-white hover:scale-105 transition shadow-xl"
          >
            View Projects
          </a>
        </div>
        <!-- socil media -->
        <div
          class="flex items-center space-x-4 justify-center md:justify-start pt-6"
        >
          <a
            href="https://github.com/mahmudul7608"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="GitHub"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github h-5 w-5"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              ></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a
          ><a
            href="https://www.linkedin.com/in/dev-mahmudul-hasan/"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin h-5 w-5"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle></svg></a
          ><a
            href="mailto:dev.mahmudulhasan2@gmail.com"
            class="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Email"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail h-5 w-5"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg
          ></a>
        </div>
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
    <!-- End Hero Section -->

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

    <!-- about section start -->
    <section
      id="about"
      class="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          About
          <span
            class="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
            >Me</span
          >
        </h2>

        <!-- Content Grid -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <!-- Left: Personal Info -->
          <div>
            <p
              class="text-muted-foreground mb-6 mt-4 text-sm md:text-base leading-relaxed"
            >
              I’m a
              <span class="text-sky-600 font-semibold">Diploma Engineer</span>
              and passionate
              <span class="text-sky-600 font-semibold">Frontend Developer</span>
              with solid experience in building modern, user-friendly web
              interfaces. I’ve worked with startups and teams to turn ideas into
              scalable applications that deliver real results.
            </p>

            <!-- Personal Info -->
            <div class="space-y-3 mb-8 text-sm">
              <div class="flex gap-x-4">
                <span class="w-28 font-medium">Fullname:</span
                ><span>Mahmudul Hasan MeRaj</span>
              </div>
              <div class="flex gap-x-4">
                <span class="w-28 font-medium">Permanent Address:</span
                ><span>Sirajganj, Bangladesh</span>
              </div>
              <div class="flex gap-x-4">
                <span class="w-28 font-medium">Present Address:</span
                ><span>Bogura, Bangladesh</span>
              </div>
              <div class="flex gap-x-4">
                <span class="w-28 font-medium">Email:</span
                ><a
                  href="mailto:dev.mahmudulhasan2@gmail.com"
                  class="text-purple-500 hover:underline"
                  >dev.mahmudulhasan2@gmail.com</a
                >
              </div>
              <div class="flex gap-x-4">
                <span class="w-28 font-medium">Linkedin:</span
                ><a
                  href="https://www.linkedin.com/in/dev-mahmudul-hasan/"
                  class="text-purple-500 hover:underline"
                  >Mahmudul Hasan</a
                >
              </div>
              <div class="flex gap-x-4">
                <span class="w-28 font-medium">GitHub:</span
                ><a
                  href="https://github.com/mahmudul7608"
                  class="text-purple-500 hover:underline"
                  >mahmudulhasan</a
                >
              </div>
              <div class="flex gap-x-4">
                <span class="w-28 font-medium">Phone:</span
                ><a
                  href="tel:+8801650217608"
                  class="text-purple-500 hover:underline"
                  >+8801650217608</a
                >
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                class="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-lg hover:scale-105 transition"
                >Contact Me</a
              >
              <a
                href="#portfolio"
                class="px-6 py-3 rounded-lg border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition"
                >Download Resume</a
              >
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 mt-8 gap-4">
              <div
                class="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow card-hover"
              >
                <div class="text-purple-500 mb-1">
                  <svg
                    class="w-6 h-6 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <div class="text-xl font-bold">3+</div>
                <p class="text-xs text-muted-foreground">
                  Years Coding Experience
                </p>
              </div>
              <div
                class="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow card-hover"
              >
                <div class="text-purple-500 mb-1">
                  <svg
                    class="w-6 h-6 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                    ></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <div class="text-xl font-bold">20+</div>
                <p class="text-xs text-muted-foreground">Projects Built</p>
              </div>
              <div
                class="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow card-hover"
              >
                <div class="text-purple-500 mb-1">
                  <svg
                    class="w-6 h-6 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  </svg>
                </div>
                <p class="text-xs text-muted-foreground">Good Understanding</p>
              </div>
              <div
                class="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow card-hover"
              >
                <div class="text-purple-500 mb-1">
                  <svg
                    class="w-6 h-6 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div class="text-xl font-bold">30K+</div>
                <p class="text-xs text-muted-foreground">Lines of Code</p>
              </div>
            </div>
          </div>

          <!-- Right: Education & Certifications -->
          <div class="space-y-12">
            <!-- Education -->
            <div>
              <h3 class="text-2xl font-bold mb-10 flex items-center">
                <span
                  class="p-2 mr-3 bg-purple-100 dark:bg-purple-800/30 rounded-full"
                >
                  <svg
                    class="w-6 h-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </span>
                Education
              </h3>
              <div
                class="relative p-6 rounded-lg border-l-4 border-purple-400 bg-white dark:bg-gray-900 shadow-sm card-hover"
              >
                <div
                  class="absolute -left-3 top-6 w-6 h-6 bg-white dark:bg-gray-900 border-2 border-purple-500 rounded-full"
                ></div>
                <h4 class="text-xl font-bold mb-1">Diploma in Engineering</h4>
                <span
                  class="inline-block text-xs bg-purple-100 dark:bg-purple-800/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full mb-2"
                  >2019 - 2024</span
                >
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Government Polytechnic Institute, Bogura
                </p>
              </div>
            </div>

            <!-- Certifications -->
            <div>
              <div class="space-y-4">
                <div
                  class="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm card-hover"
                >
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Complete Web Development</h4>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        Self Learning
                      </p>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400"
                      >2022–2025</span
                    >
                  </div>
                </div>
                <div
                  class="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm card-hover"
                >
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Master HTML & CSS Projects</h4>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        Self Learning
                      </p>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400"
                      >2022–2023</span
                    >
                  </div>
                </div>
                <div
                  class="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm card-hover"
                >
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Master Git & GitHub</h4>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        Self Learning
                      </p>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400"
                      >2022</span
                    >
                  </div>
                </div>
                <div
                  class="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm card-hover"
                >
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Communications</h4>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        10 Minute School, Duolingo
                      </p>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400"
                      >2025</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Right Column -->
        </div>
      </div>
    </section>
    <!-- about secyion end  -->

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

    <!-- tools section start -->
    <section class="bg-black py-20 px-6">
      <h2
        class="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-[cursive]"
      >
        🚀 Tools I Use
      </h2>

      <div dir="ltr" data-orientation="horizontal" class="w-full">
        <div class="flex justify-center mb-10 overflow-x-auto pb-2">
          <div
            role="tablist"
            aria-orientation="horizontal"
            class="inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground bg-background/50 backdrop-blur-sm"
            tabindex="0"
            data-orientation="horizontal"
            style="outline: none"
          >
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-:r0:-content-all"
              data-state="active"
              id="radix-:r0:-trigger-all"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              All</button
            ><button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r0:-content-frontend"
              data-state="inactive"
              id="radix-:r0:-trigger-frontend"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Frontend</button
            ><button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r0:-content-backend"
              data-state="inactive"
              id="radix-:r0:-trigger-backend"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Backend</button
            ><button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r0:-content-tools"
              data-state="inactive"
              id="radix-:r0:-trigger-tools"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Tools</button
            ><button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r0:-content-soft"
              data-state="inactive"
              id="radix-:r0:-trigger-soft"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Soft Skills
            </button>
          </div>
        </div>
        <div
          data-state="active"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r0:-trigger-all"
          id="radix-:r0:-content-all"
          tabindex="0"
          class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
          style=""
        >
          <div
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          >
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 0ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-code w-8 h-8 text-purple-500"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">ReactJs</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 50ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-code w-8 h-8 text-purple-500"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">NextJs</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 100ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-workflow w-8 h-8 text-purple-500"
                  >
                    <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                    <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                    <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Redux</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 150ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-square-terminal w-8 h-8 text-purple-500"
                  >
                    <path d="m7 11 2-2-2-2"></path>
                    <path d="M11 13h4"></path>
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="3"
                      rx="2"
                      ry="2"
                    ></rect>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">JavaScript</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 200ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-square-terminal w-8 h-8 text-purple-500"
                  >
                    <path d="m7 11 2-2-2-2"></path>
                    <path d="M11 13h4"></path>
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="3"
                      rx="2"
                      ry="2"
                    ></rect>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">TypeScript</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 250ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-file-code w-8 h-8 text-purple-500"
                  >
                    <path d="M10 12.5 8 15l2 2.5"></path>
                    <path d="m14 12.5 2 2.5-2 2.5"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path
                      d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
                    ></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">HTML/CSS</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 300ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-paintbrush w-8 h-8 text-purple-500"
                  >
                    <path d="m14.622 17.897-10.68-2.913"></path>
                    <path
                      d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
                    ></path>
                    <path
                      d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
                    ></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Tailwind CSS</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 350ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-paintbrush w-8 h-8 text-purple-500"
                  >
                    <path d="m14.622 17.897-10.68-2.913"></path>
                    <path
                      d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
                    ></path>
                    <path
                      d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
                    ></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Bootstrap</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 400ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-paintbrush w-8 h-8 text-purple-500"
                  >
                    <path d="m14.622 17.897-10.68-2.913"></path>
                    <path
                      d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
                    ></path>
                    <path
                      d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
                    ></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">SASS</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 450ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-paintbrush w-8 h-8 text-purple-500"
                  >
                    <path d="m14.622 17.897-10.68-2.913"></path>
                    <path
                      d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
                    ></path>
                    <path
                      d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
                    ></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">
                  Styled Component
                </h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 0ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-code w-8 h-8 text-purple-500"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Wordpress</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 50ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-code w-8 h-8 text-purple-500"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Node.js</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 100ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-code w-8 h-8 text-purple-500"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">ExpressJs</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 150ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-box w-8 h-8 text-purple-500"
                  >
                    <path
                      d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                    ></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">
                  MongoDB/Mongoose
                </h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 200ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-workflow w-8 h-8 text-purple-500"
                  >
                    <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                    <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                    <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">REST APIs</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 250ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-lock w-8 h-8 text-purple-500"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">JWT</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 300ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-code w-8 h-8 text-purple-500"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Python</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 350ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-lock w-8 h-8 text-purple-500"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Firebase</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 400ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-git-merge w-8 h-8 text-purple-500"
                  >
                    <circle cx="18" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Git</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 450ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-git-merge w-8 h-8 text-purple-500"
                  >
                    <circle cx="18" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">GitHub</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 0ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-pyramid w-8 h-8 text-purple-500"
                  >
                    <path
                      d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
                    ></path>
                    <path d="M12 2v20"></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Docker</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 50ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-settings w-8 h-8 text-purple-500"
                  >
                    <path
                      d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Postman</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 100ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-settings w-8 h-8 text-purple-500"
                  >
                    <path
                      d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Vercel</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 150ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-settings w-8 h-8 text-purple-500"
                  >
                    <path
                      d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">VS Code</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 200ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-settings w-8 h-8 text-purple-500"
                  >
                    <path
                      d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Figma</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 250ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-user w-8 h-8 text-purple-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">
                  Project Management
                </h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 300ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-user w-8 h-8 text-purple-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">
                  Team Leadership
                </h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 350ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-user w-8 h-8 text-purple-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Communication</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 400ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-user w-8 h-8 text-purple-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">
                  Problem Solving
                </h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 450ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-user w-8 h-8 text-purple-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">
                  Decision Making
                </h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-700 card-hover opacity-100 translate-y-0"
              style="transition-delay: 0ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-3">
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
                    class="lucide lucide-user w-8 h-8 text-purple-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Adaptability</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- tools section end -->
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

    <!-- My project section start -->
    <section class="bg-black py-20 px-6">
      <h2
        class="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-[cursive]"
      >
        My Recent Projects
      </h2>

      <div
        class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <!-- Project 1 -->
        <div
          class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-transform hover:scale-[1.02] duration-300"
        >
          <img
            src="./public/image/MH-imageSRC-1.png"
            alt="Project Screenshot"
            class="w-full h-60 object-cover rounded-t-2xl"
          />
          <div class="p-6 text-white flex flex-col gap-3">
            <h3 class="text-xl font-semibold">Practice API Project</h3>
            <a
              href="https://practice-api-project.netlify.app/"
              target="_blank"
              class="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white rounded-full hover:opacity-90 transition"
            >
              🔗 Live View
            </a>
          </div>
        </div>

        <!-- Project 2 -->
        <div
          class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-transform hover:scale-[1.02] duration-300"
        >
          <img
            src="./public/image/MH-country-2.png"
            alt="Project Screenshot"
            class="w-full h-60 object-cover rounded-t-2xl"
          />
          <div class="p-6 text-white flex flex-col gap-3">
            <h3 class="text-xl font-semibold">Country Info Project</h3>
            <a
              href="https://practice-api-project.netlify.app/"
              target="_blank"
              class="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white rounded-full hover:opacity-90 transition"
            >
              🔗 Live View
            </a>
          </div>
        </div>

        <!-- Project 3 -->
        <div
          class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-transform hover:scale-[1.02] duration-300"
        >
          <img
            src="./public/image/MH-millFiender-3.png"
            alt="Project Screenshot"
            class="w-full h-60 object-cover rounded-t-2xl"
          />
          <div class="p-6 text-white flex flex-col gap-3">
            <h3 class="text-xl font-semibold">Mill Finder Project</h3>
            <a
              href="https://practice-api-project.netlify.app/"
              target="_blank"
              class="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white rounded-full hover:opacity-90 transition"
            >
              🔗 Live View
            </a>
          </div>
        </div>

        <!-- Project 4 -->
        <div
          class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-transform hover:scale-[1.02] duration-300"
        >
          <img
            src="./public/image/MH-mullokoto-4.png"
            alt="Project Screenshot"
            class="w-full h-60 object-cover rounded-t-2xl"
          />
          <div class="p-6 text-white flex flex-col gap-3">
            <h3 class="text-xl font-semibold">Mullokoto App</h3>
            <a
              href="https://practice-api-project.netlify.app/"
              target="_blank"
              class="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white rounded-full hover:opacity-90 transition"
            >
              🔗 Live View
            </a>
          </div>
        </div>

        <!-- Project 5 -->
        <div
          class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-transform hover:scale-[1.02] duration-300"
        >
          <img
            src="./public/image/MH-signin-6.png"
            alt="Project Screenshot"
            class="w-full h-60 object-cover rounded-t-2xl"
          />
          <div class="p-6 text-white flex flex-col gap-3">
            <h3 class="text-xl font-semibold">Login Form UI</h3>
            <a
              href="https://practice-api-project.netlify.app/"
              target="_blank"
              class="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white rounded-full hover:opacity-90 transition"
            >
              🔗 Live View
            </a>
          </div>
        </div>

        <!-- Project 6 -->
        <div
          class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-transform hover:scale-[1.02] duration-300"
        >
          <img
            src="./public/image/MH-pet-shop-7.png"
            alt="Project Screenshot"
            class="w-full h-60 object-cover rounded-t-2xl"
          />
          <div class="p-6 text-white flex flex-col gap-3">
            <h3 class="text-xl font-semibold">Pet Shop Project</h3>
            <a
              href="https://practice-api-project.netlify.app/"
              target="_blank"
              class="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white rounded-full hover:opacity-90 transition"
            >
              🔗 Live View
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- my project section end -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// navigation bar 
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// naivigation bar end

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
