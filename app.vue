<template>
  <div
    class="min-h-screen bg-gray-800 text-yellow-400 dark:text-white transition-colors duration-300"
  >
    <!-- Header Navbar start -->
    <header class="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg px-4">
    <nav class="relative z-50 font-light uppercase tracking-wide">
      
      <!-- Desktop Navbar -->
      <div class="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 border border-white/10 rounded-full backdrop-blur-3xl bg-[rgba(50,99,82,0.5)] items-center py-3 px-4 shadow-md shadow-blue-100/30 space-x-2">
        <a
          href="#intro"
          class="px-4 py-2 text-sm border-r border-white/10 transition-colors duration-200 hover:text-[#1bf154de]"
        >Home</a>
        <a
          href="#about"
          class="px-4 py-2 text-sm border-r border-white/10 transition-colors duration-200 hover:text-[#c9f721]"
        >About</a>
        <a
          href="#skills"
          class="px-4 py-2 text-sm border-r border-white/10 transition-colors duration-200 hover:text-[#c9f721]"
        >Skills</a>
        <a
          href="#tools-i-use"
          class="px-4 py-2 text-sm border-r border-white/10 transition-colors duration-200 hover:text-[#c9f721]"
        >Tools</a>
        <a
          href="#my-recent-project"
          class="px-4 py-2 text-sm border-r border-white/10 transition-colors duration-200 hover:text-[#c9f721]"
        >Projects</a>
        <a
          href="#contact-me"
          class="px-4 py-2 text-sm transition-colors duration-200 hover:text-[#c9f721]"
        >Contact</a>
      </div>

      <!-- Mobile Top Bar -->
      <div class="md:hidden flex justify-between items-center py-4">
        <h1 class="text-white text-lg font-semibold">Menu</h1>
        <button
          @click="toggleMenu"
          class="text-white text-3xl focus:outline-none"
        >
          <span v-if="!isOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="md:hidden mt-2 mx-2 mb-4 flex flex-col bg-[rgba(37,74,61,0.95)] backdrop-blur-xl rounded-xl py-6 px-6 space-y-4 border border-white/10 shadow-lg transition-all duration-300"
      >
        <a
          href="#intro"
          @click="toggleMenu"
          class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
        >Home</a>
        <a
          href="#about"
          @click="toggleMenu"
          class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
        >About</a>
        <a
          href="#skills"
          @click="toggleMenu"
          class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
        >Skills</a>
        <a
          href="#tools-i-use"
          @click="toggleMenu"
          class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
        >Tools</a>
        <a
          href="#my-recent-project"
          @click="toggleMenu"
          class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
        >Projects</a>
        <a
          href="#contact-me"
          @click="toggleMenu"
          class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
        >Contact</a>
      </div>
    </nav>
  </header>
    <!-- End Header Navbar -->

    <!-- Hero Section start -->
    <section
      id="intro"
      class="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 pt-28 pb-20 max-w-screen-xl mx-auto"
    >
      <!-- Text Content -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h2 class="font-extrabold leading-tight">
          <span
            class="text-4xl sm:text-6xl md:text-8xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text block"
          >
            FRONTEND
          </span>
          <span
            class="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text block mt-2"
          >
            DEVELOPER
          </span>
        </h2>

        <p class="mt-6 text-white-700 text-base leading-relaxed">
          <span class="font-semibold text-white">I'm</span>
          – a
          <span class="text-sky-600 font-semibold">Frontend Developer</span>
          with a passion for clean design, smooth user experiences, and smart,
          scalable code. With strong experience in
          <span class="font-medium">collaborative team environments</span>, I
          thrive on building together and turning ideas into powerful, modern
          web solutions. Always learning, always building.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
          <a
            href="#contact"
            class="inline-block px-5 py-2.5 rounded-full border border-pink-500 bg-gradient-to-r from-sky-400 to-pink-500 text-black font-semibold hover:scale-105 transition shadow-lg"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            class="inline-block px-5 py-2.5 rounded-full border border-purple-500 bg-white text-black font-semibold hover:bg-purple-500 hover:text-white hover:scale-105 transition shadow-lg"
          >
            View Projects
          </a>
        </div>

        <!-- Social Media -->
        <div
          class="flex items-center space-x-4 justify-center md:justify-start pt-6"
        >
          <!-- GitHub -->
          <a
            href="https://github.com/mahmudul7608"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              ></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/dev-mahmudul-hasan/"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <!-- Email -->
          <a
            href="mailto:dev.mahmudulhasan2@gmail.com"
            class="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Image -->
      <div class="w-full md:w-[45%] mb-10 md:mb-0">
        <img
          src="/image/HM-image-1.png"
          alt="Mahmudul Hasan"
          class="rounded-xl shadow-xl mx-auto max-w-full"
        />
      </div>
    </section>
    <!-- End Hero Section -->

    <!-- Scroll Mouse section -->
    <div class="flex flex-col items-center space-y-2 top-0 mb-2">
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
    <!-- Scroll Mous section end -->

    <!-- about section start -->
    <section id="about" class="py-16 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <h2 class="text-3xl md:text-4xl font-bold text-center top-0 mb-12">
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
              and passionate self-taught
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
                class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-lg hover:scale-105 transition"
                >Contact Me</a
              >
              <a
                href="#portfolio"
                class="px-6 py-3 rounded-full border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition"
                >Download Resume</a
              >
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 mt-8 gap-5">
              <div
                class="text-center p-4 rounded-lg bg-black-700 border border-black-500 shadow-lg shadow-blue-500/50 hover:bg-pink-500/10 card-hover"
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
                class="text-center p-4 rounded-lg bg-black-700 border border-black-500 shadow-lg shadow-blue-500/50 hover:bg-pink-500/10 card-hover"
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
                class="text-center p-4 rounded-lg bg-black-700 border border-black-500 shadow-lg shadow-blue-500/50 hover:bg-pink-500/10 card-hover"
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
                class="text-center p-4 rounded-lg bg-black-700 border border-black-500 shadow-lg shadow-blue-500/50 hover:bg-pink-500/10 card-hover"
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
              <h3 class="text-3xl font-bold mb-2 flex items-center">
                <span class="p-2 mr-3 bg-purple-10 rounded-full">
                  <svg
                    class="w-10 h-15 text-White-500 rounded-full"
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
                class="relative p-6 rounded-lg border-l-4 border-purple-40 border-white-500 shadow-sm card-hover hover:bg-purple-500/10"
              >
                <div
                  class="absolute -left-3 top-6 w-6 h-6 bg-black-100 border-2 border-black-900 rounded-full"
                ></div>
                <h4 class="text-xl font-bold mb-1">Diploma in Engineering</h4>
                <span
                  class="inline-block text-xs bg-purple-100 text-black px-3 py-1 rounded-full mb-2"
                  >2019 - 2024</span
                >
                <p class="text-sm text-white-600">
                  Government Polytechnic Institute, Bogura
                </p>
              </div>
            </div>

            <!-- Certifications -->
            <div>
              <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg shadow-sm card-hover">
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Complete Web Development</h4>
                      <p class="text-sm text-gray-500">Self Learning</p>
                    </div>
                    <span class="text-xs text-gray-500"
                      >2022–2025(self-taught)</span
                    >
                  </div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm card-hover">
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Master HTML & CSS Projects</h4>
                      <p class="text-sm text-gray-500">Self Learning</p>
                    </div>
                    <span class="text-xs text-gray-500"
                      >2022–2023(self-taught)</span
                    >
                  </div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm card-hover">
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Master Git & GitHub</h4>
                      <p class="text-sm text-gray-500">Self Learning</p>
                    </div>
                    <span class="text-xs text-gray-500"
                      >2022–2025(self-taught)</span
                    >
                  </div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm card-hover">
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Communications</h4>
                      <p class="text-sm text-gray-500">
                        10 Minute School, Duolingo
                      </p>
                    </div>
                    <span class="text-xs text-gray-500">2025</span>
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

    <!-- true builder section start-->
    <section id="skills" class="py-2 bg-black-100">
      <div class="container mx-auto mb-2 px-2 max-w-7xl relative">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          My
          <span
            class="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
            >skills</span
          >
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  Development
                </h3>
                <p class="text-white/70">Frontend & Development</p>
                <p class="text-white/70">
                  Languages & Frameworks / Build & Workflow
                </p>
                <div class="flex flex-wrap gap-2 mt-6">
                  <span class="tech-badge">VueJs</span>
                  <span class="tech-badge">NuxtJs</span>
                  <span class="tech-badge">ReactJs</span>
                  <span class="tech-badge">TypeScript</span>
                  <span class="tech-badge">JavaScript</span>
                  <span class="tech-badge">HTML5</span>
                  <span class="tech-badge">HTML</span>
                  <span class="tech-badge">JavaScript</span>
                  <span class="tech-badge">NodeJs</span>
                  <span class="tech-badge">Vite</span>
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
                  Design
                </h3>
                <p class="text-white/70">Styling & UI</p>
                <p class="text-white/70">Design & Animation</p>
                <div class="flex flex-wrap gap-2 mt-6">
                  <span class="tech-badge">Tailwind CSS</span>
                  <span class="tech-badge">CSS</span>
                  <span class="tech-badge">Styled Components</span>
                  <span class="tech-badge">CSS Modules</span>
                  <span class="tech-badge">Figma</span>
                  <span class="tech-badge">Photoshop</span>
                  <span class="tech-badge">Canva</span>
                  <span class="tech-badge">VS Code</span>
                  <span class="tech-badge">Framer Motion</span>
                  <span class="tech-badge">Material-UI</span>
                </div>
              </div>
            </div>
          </div>
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
                  Diploma in Engineering with a focus on practical
                </p>
                <p class="text-white/70">
                  Bogura Polytechnic Institute, Bangladesh.
                </p>
                <div class="flex flex-wrap gap-2 mt-6">
                  <span class="tech-badge">Engineering</span>
                  <span class="tech-badge">Team Work</span>
                  <span class="tech-badge">Building</span>
                  <span class="tech-badge">Problem Solving</span>
                  <span class="tech-badge">Creativity</span>
                  <span class="tech-badge">Critical Thinking</span>
                  <span class="tech-badge">Communication</span>
                  <span class="tech-badge">Collaboration</span>
                  <span class="tech-badge">Adaptability</span>
                  <span class="tech-badge">Flexibility</span>
                  <span class="tech-badge">Time Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- true builder section end -->

    <!-- tools section start -->
    <section id="tools-i-use" class="bg-black-300 py-5 px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">
        Tools
        <span
          class="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
          >I Use</span
        >
      </h2>

      <div dir="ltr" data-orientation="horizontal" class="w-full mb-20">
        <div class="flex justify-center mb-10 overflow-x-auto pb-2">
          <div
            role="tablist"
            aria-orientation="horizontal"
            class="inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground bg-background/50 backdrop-blur-sm"
            tabindex="0"
            data-orientation="horizontal"
            style="
              border: dotted 1px #ccc;
              border-radius: 8px;
              overflow: hidden;
            "
          >
            <button
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
              Frontend
            </button>
            /
            <button
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
              Backend
            </button>
            /<button
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
              Tools
            </button>
            /<button
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
          class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 m-auto w-full max-w-screen-xl overflow-hidden rounded-md border bg-background p-8 shadow-lg transition-all duration-700 data-[state=active]:animate-in data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 data-[state=active]:fade-in-0 data-[state=inactive]:slide-out-to-left-1 data-[state=active]:slide-in-from-left-1"
          style="border: none; background: transparent"
        >
          <div
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          >
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">Vue Js</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">Nuxt Js</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">React js</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">Tailwind CSS</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">CSS</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">HTML5</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">HTML</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">Docker</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">VS Code</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">Netlify</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">Figma</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">Photoshop</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">Canva</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                <h3 class="font-medium text-sm sm:text-base">WordPress</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
                  Team Working & Problem Solving
                </h3>
              </div>
            </div>

            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0"
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
          </div>
        </div>
      </div>
    </section>
    <!-- tools section end -->

    <!-- My project section start -->
    <section id="my-recent-project" class="bg-black-100 px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        My
        <span
          class="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Projects
        </span>
      </h2>

      <div class="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <!-- Project 1 -->
          <div
            class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-transform hover:scale-[1.03] duration-300"
          >
            <img
              src="./public/image/MH-imageSRC-1.png"
              alt="Practice API Project Screenshot"
              class="w-full h-60 object-cover rounded-t-2xl"
            />
            <div class="p-6 text-white flex flex-col gap-4">
              <h3 class="text-xl font-semibold">Practice API Project</h3>
              <a
                href="https://practice-api-project.netlify.app/"
                target="_blank"
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-sm rounded-full hover:opacity-90 transition"
              >
                🔗 Live View
              </a>
            </div>
          </div>

          <!-- Project 2 -->
          <div
            class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-transform hover:scale-[1.03] duration-300"
          >
            <img
              src="./public/image/MH-signin-6.png"
              alt="Login Form UI Screenshot"
              class="w-full h-60 object-cover rounded-t-2xl"
            />
            <div class="p-6 text-white flex flex-col gap-4">
              <h3 class="text-xl font-semibold">Login Form UI</h3>
              <a
                href="https://animation-login-and-sign-in.netlify.app/#"
                target="_blank"
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-sm rounded-full hover:opacity-90 transition"
              >
                🔗 Live View
              </a>
            </div>
          </div>
          <!-- Project 3 -->
          <div
            class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-transform hover:scale-[1.03] duration-300"
          >
            <img
              src="./public/image/MH-millFiender-3.png"
              alt="Mill Finder Project Screenshot"
              class="w-full h-60 object-cover rounded-t-2xl"
            />
            <div class="p-6 text-white flex flex-col gap-4">
              <h3 class="text-xl font-semibold">Mill Finder Project</h3>
              <a
                href="https://meal-count.netlify.app/"
                target="_blank"
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-sm rounded-full hover:opacity-90 transition"
              >
                🔗 Live View
              </a>
            </div>
          </div>

          <!-- Project 4 -->
          <div
            class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-transform hover:scale-[1.03] duration-300"
          >
            <img
              src="./public/image/MH-mullokoto-4.png"
              alt="Mullokoto App Screenshot"
              class="w-full h-60 object-cover rounded-t-2xl"
            />
            <div class="p-6 text-white flex flex-col gap-4">
              <h3 class="text-xl font-semibold">Mullokoto App</h3>
              <a
                href="https://mullo-koto-template.netlify.app/"
                target="_blank"
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-sm rounded-full hover:opacity-90 transition"
              >
                🔗 Live View
              </a>
            </div>
          </div>

          <!-- Project 5 -->
          <div
            class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-transform hover:scale-[1.03] duration-300"
          >
            <img
              src="./public/image/MH-country-2.png"
              alt="Country Info Project Screenshot"
              class="w-full h-60 object-cover rounded-t-2xl"
            />
            <div class="p-6 text-white flex flex-col gap-4">
              <h3 class="text-xl font-semibold">Country Info Project</h3>
              <a
                href="https://country-duit-api-project.netlify.app/"
                target="_blank"
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-sm rounded-full hover:opacity-90 transition"
              >
                🔗 Live View
              </a>
            </div>
          </div>

          <!-- Project 6 -->
          <div
            class="bg-[#1c1c1e] rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-transform hover:scale-[1.03] duration-300"
          >
            <img
              src="./public/image/MH-5.png"
              alt="Pet Shop Project Screenshot"
              class="w-full h-60 object-cover rounded-t-2xl"
            />
            <div class="p-6 text-white flex flex-col gap-4">
              <h3 class="text-xl font-semibold">Intelligent-business</h3>
              <a
                href="https://intelligent-buisness.netlify.app/"
                target="_blank"
                class="px-2 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-xs rounded-full hover:opacity-90 transition"
              >
                🔗 Live View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- my project section end -->

    <!-- Contact section start -->
    <section id="contact-me" class="py-6 bg-black-100">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact
            <span
              class="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
              >Me</span
            >
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 m-12 gap-8">
          <div
            class="transition-all duration-700 delay-300 opacity-100 translate-y-0"
          >
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50"
            >
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-6">Send me a message</h3>
                <form class="space-y-8">
                  <!-- Full Name & Email -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Full Name -->
                    <div class="space-y-2">
                      <label for="name" class="text-sm font-medium text-white"
                        >Full Name</label
                      >
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        required
                        class="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black/20 transition"
                      />
                    </div>

                    <!-- Email Address -->
                    <div class="space-y-2">
                      <label for="email" class="text-sm font-medium text-white"
                        >Email Address</label
                      >
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        class="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black/20 transition"
                      />
                    </div>
                  </div>

                  <!-- Subject -->
                  <div class="space-y-2">
                    <label for="subject" class="text-sm font-medium text-white"
                      >Subject</label
                    >
                    <input
                      type="text"
                      id="subject"
                      placeholder="Enter subject line"
                      required
                      class="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black/20 transition"
                    />
                  </div>

                  <!-- Message -->
                  <div class="space-y-2">
                    <label for="message" class="text-sm font-medium text-white"
                      >Your Message</label
                    >
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      required
                      class="w-full min-h-[150px] rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black/20 transition"
                    ></textarea>
                  </div>

                  <!-- Submit Button -->
                  <button
                    type="submit"
                    class="w-full py-3 rounded-full text-white font-semibold text-base hover:opacity-90 transition duration-300"
                    style="
                      background: linear-gradient(
                        112.49deg,
                        rgb(255, 109, 109) 37.67%,
                        rgb(235, 0, 255) 76.59%
                      );
                    "
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="transition-all duration-700 opacity-100 translate-y-0">
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden h-full"
            >
              <div
                class="h-32 bg-gradient-to-r from-purple-500 to-tech-blue"
              ></div>
              <div class="p-6 pt-0 -mt-16 relative">
                <div class="bg-card p-6 rounded-lg shadow-lg">
                  <h3 class="text-2xl font-bold mb-4">Contact Information</h3>
                  <p class="text-muted-foreground mb-6">
                    "I'm always open to new opportunities, creative
                    collaborations, or simply connecting with like-minded
                    people. Whether you have a project in mind or just want to
                    say hello - feel free to reach out!"
                  </p>
                  <div class="space-y-4">
                    <div class="flex items-start">
                      <div class="p-2 bg-secondary rounded-full mr-4">
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
                          class="lucide lucide-mail-check h-6 w-6 text-purple-500"
                        >
                          <path
                            d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
                          ></path>
                          <path
                            d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                          ></path>
                          <path d="m16 19 2 2 4-4"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-medium">Email</h4>
                        <a
                          href="mailto:dev.mahmudul@gmail.com"
                          class="text-purple-500 hover:underline"
                          >dev.mahmudul@gmail.com</a
                        >
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="p-2 bg-secondary rounded-full mr-4">
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
                          class="lucide lucide-phone h-6 w-6 text-purple-500"
                        >
                          <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-medium">Phone</h4>
                        <a
                          href="tel:+88016-50217808"
                          class="text-purple-500 hover:underline"
                          >+88016-50217808</a
                        >
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="p-2 bg-secondary rounded-full mr-4">
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
                          class="lucide lucide-map-pin h-6 w-6 text-purple-500"
                        >
                          <path
                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                          ></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-medium">Location</h4>
                        <a
                          href="https://maps.google.com/?q=Khulna, Bangladesh"
                          class="text-purple-500 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          >Bogura, Bangladesh</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="mt-8">
                    <h4 class="text-lg font-bold mb-1">Connect with me</h4>
                    <div class="flex mt-4 space-x-4">
                      <a
                        href="https://github.com/mahmudul7608"
                        class="p-3 bg-secondary rounded-full text-foreground hover:bg-purple-500 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                          ></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a
                      ><a
                        href="https://www.linkedin.com/in/dev-mahmudul-hasan/"
                        class="p-3 bg-secondary rounded-full text-foreground hover:bg-purple-500 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                          ></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle></svg></a
                      ><a
                        href="https://wa.me/88016-50217808"
                        class="p-3 bg-secondary rounded-full text-foreground hover:bg-purple-500 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                        >
                          <path
                            d="M380.9 97.1C339 55.2 283.1 32 224.5 32c-117.9 0-213.6 95.6-213.6 213.5 0 37.6 9.7 74.4 28.1 107.1L3.4 480l131.4-34.6c30.5 16.7 64.9 25.4 99.7 25.4h.1c117.9 0 213.6-95.6 213.6-213.5 0-58.6-23.2-113.5-65.3-155.2zM224.5 438.6c-29.5 0-58.5-7.8-83.9-22.5l-6-3.5-77.9 20.5 20.8-76-3.9-6.3c-17.9-28.7-27.3-62-27.3-95.8 0-99 80.6-179.5 179.6-179.5 47.9 0 92.9 18.7 126.7 52.5 33.8 33.7 52.5 78.7 52.5 126.5 0 99-80.6 179.6-179.6 179.6zm101.8-138.2c-5.6-2.8-33-16.3-38.1-18.2-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 18.2-17.7 21.9-6.5 4.2-12.1 1.4c-33-16.5-54.6-29.4-76.3-66.5-5.8-10 5.8-9.3 16.5-30.9 1.8-3.7.9-6.9-.5-9.7s-12.5-30-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.7 6.9c-5.1 5.6-19.2 18.7-19.2 45.6 0 26.9 19.7 52.9 22.4 56.5 2.8 3.7 38.7 59.1 93.9 82.9 13.1 5.7 23.3 9.1 31.3 11.7 13.1 4.2 25 3.6 34.4 2.2 10.5-1.6 33-13.5 37.6-26.6 4.7-13.1 4.7-24.3 3.3-26.5-1.3-2.3-5.1-3.7-10.7-6.5z"
                          ></path></svg
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact section end -->

    <!-- footer section start -->
    <footer class="bg-card pt-16 pb-6">
      <div class="container mx-auto px-4 md:px-6">
        <!-- Back to Top Button -->
        <div class="flex justify-center mb-10">
          <a
            href="#intro"
            class="inline-flex items-center justify-center h-12 w-12 rounded-full border border-purple-500 bg-background text-muted-foreground hover:bg-purple-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M5 12l7-7 7 7M12 19V5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="sr-only">Back to top</span>
          </a>
        </div>

        <!-- Main Footer Content -->
        <div class="border-b border-muted pb-10 mb-10">
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-12 text-muted-foreground"
          >
            <!-- About -->
            <div>
              <h3 class="text-2xl font-bold gradient-text mb-4 text-white">
                Mahmudul Hasan<span class="text-purple-500">.</span>
              </h3>
              <p class="max-w-sm">
                I’m a Diploma Engineer and passionate self-taught Frontend
                Developer. I’ve worked with startups and teams to turn ideas
                into scalable applications that deliver real results.
              </p>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#intro"
                    class="hover:text-purple-500 transition-colors"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="#about"
                    class="hover:text-purple-500 transition-colors"
                    >About</a
                  >
                </li>
                <li>
                  <a
                    href="#skills"
                    class="hover:text-purple-500 transition-colors"
                    >Skills</a
                  >
                </li>
                <li>
                  <a
                    href="#tools-i-use"
                    class="hover:text-purple-500 transition-colors"
                    >Tools</a
                  >
                </li>
                <li>
                  <a
                    href="#my-recent-project"
                    class="hover:text-purple-500 transition-colors"
                    >Project</a
                  >
                </li>
                <li>
                  <a
                    href="#contact-me"
                    class="hover:text-purple-500 transition-colors"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">
                Get in Touch
              </h4>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <svg
                    class="h-4 w-4 text-purple-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                  <a
                    href="tel:+8801650217808"
                    class="hover:text-purple-500 transition-colors"
                    >+88016-50217808</a
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-4 w-4 text-purple-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href="mailto:dev.mahmudulhasan@gmail.com"
                    class="hover:text-purple-500 transition-colors"
                    >dev.mahmudulhasan@gmail.com</a
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-4 w-4 text-purple-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Bogura, Bangladesh</span>
                </li>
              </ul>

              <!-- Social Icons -->
              <div class="flex space-x-3 mt-4">
                <a
                  href="https://github.com/mahmudul7608"
                  target="_blank"
                  class="p-2 rounded-full bg-secondary text-foreground hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mahmudul-hasan-7608/"
                  target="_blank"
                  class="p-2 rounded-full bg-secondary text-foreground hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
                    />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/8801650217808"
                  target="_blank"
                  class="p-2 rounded-full bg-secondary text-foreground hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M380.9 97.1C339 55.2 283.1 32 224.5 32C106.6 32 11 127.6 11 245.5c0 37.6 9.7 74.4 28.1 107.1L3.4 480l131.4-34.6c30.5 16.7 64.9 25.4 99.7 25.4h.1c117.9 0 213.6-95.6 213.6-213.5 0-58.6-23.2-113.5-65.3-155.2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="text-center">
          <p class="text-muted-foreground text-sm">
            © 2025 Mahmudul Hasan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    <!-- footer section end -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// navigation bar
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// navigation bar end
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
