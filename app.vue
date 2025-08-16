<template>
  <div
    class="min-h-screen bg-gray-900 text-white transition-colors duration-300"
  >
    <!-- Header Navbar start -->
    <header
      class="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg px-4"
    >
      <nav class="relative z-50 font-light uppercase tracking-wide">
        <!-- Desktop Navbar -->
        <div
          class="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 border border-white/10 rounded-full backdrop-blur-4xl bg-[rgba(50,99,82,0.5)] items-center py-2 px-3 shadow-md shadow-blue-100/30 space-x-2"
        >
          <a
            href="#intro"
            class="px-4 py-2 text-[16px] border-r border-white/10 transition-colors duration-200 hover:text-[#1bf154de]"
            >Home</a
          >
          <a
            href="#about"
            class="px-4 py-2 text-[16px] border-r border-white/10 transition-colors duration-200 hover:text-[#c9f721]"
            >About</a
          >
          <a
            href="#skills"
            class="px-4 py-2 text-[16px] border-r border-white/10 transition-colors duration-200 hover:text-[#c9f721]"
            >Skills</a
          >
          <a
            href="#tools-i-use"
            class="px-4 py-2 text-[16px] border-r border-white/10 transition-colors duration-200 hover:text-[#c9f721]"
            >Tools</a
          >
          <a
            href="#my-recent-project"
            class="px-4 py-2 text-[16px] border-r border-white/10 transition-colors duration-200 hover:text-[#c9f721]"
            >Projects</a
          >
          <a
            href="#contact-me"
            class="px-4 py-2 text-[16px] transition-colors duration-200 hover:text-[#c9f721]"
            >Contact</a
          >
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
            >Home</a
          >
          <a
            href="#about"
            @click="toggleMenu"
            class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
            >About</a
          >
          <a
            href="#skills"
            @click="toggleMenu"
            class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
            >Skills</a
          >
          <a
            href="#tools-i-use"
            @click="toggleMenu"
            class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
            >Tools</a
          >
          <a
            href="#my-recent-project"
            @click="toggleMenu"
            class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
            >Projects</a
          >
          <a
            href="#contact-me"
            @click="toggleMenu"
            class="text-white font-medium text-base uppercase tracking-wide transition-colors hover:text-[#f73a21]"
            >Contact</a
          >
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
      <div class="w-full mt-[70px] md:w-1/2 text-center md:text-left">
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
            href="#contact-me"
            class="inline-block px-5 py-2.5 rounded-full border border-pink-500 bg-gradient-to-r from-sky-400 to-pink-500 text-black font-semibold hover:scale-105 transition shadow-lg"
          >
            Get in Touch
          </a>
          <a
            href="#my-recent-project"
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
            class="p-2 rounded-full hover:bg-purple-500 hover:text-white transition-colors"
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
            class="p-2 rounded-full hover:bg-purple-500 hover:text-white transition-colors"
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
            class="p-2 rounded-full hover:bg-purple-500 hover:text-white transition-colors"
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
    <section id="about" class="py-6 text-white">
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
              class="text-muted-foreground mb-6 mt-5 text-lg md:text-base leading-relaxed"
            >
              I’m a
              <span class="text-purple-500 font-semibold"
                >Diploma Engineer</span
              >
              and passionate self-taught
              <span class="text-purple-500 font-semibold"
                >Frontend Developer</span
              >
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
                href="#contact-me"
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
                class="relative p-6 rounded-lg border-l-4 border-purple-40 border-white-500 shadow-sm shadow-indigo-600/50 card-hover hover:bg-purple-500/10"
              >
                <div
                  class="absolute -left-3 top-7 w-6 h-6 bg-black-100 border-2 border-black-900 rounded-full"
                ></div>
                <h4 class="text-xl font-bold">Diploma in Engineering</h4>
                <span
                  class="inline-block text-xs bg-purple-100 text-black px-3 py-1 rounded-full border-white-100 border-2 mt-3"
                  >2019 - 2024</span
                >
                <p class="text-sm text-white-600 mt-2">
                  Government Polytechnic Institute, Bogura
                </p>
              </div>
            </div>

            <!-- Certifications -->
            <div>
              <div class="space-y-4">
                <div
                  class="p-3 rounded-lg shadow-sm shadow-indigo-600/50 border-l-4 border-purple-40 border-white-500 card-hover hover:bg-purple-500/10"
                >
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Complete Web Development</h4>
                      <p class="text-sm text-white-500">Self Learning</p>
                    </div>
                    <span class="text-xs text-white-500"
                      >2022–2025(self-taught)</span
                    >
                  </div>
                </div>
                <div
                  class="p-4 rounded-lg shadow-sm shadow-indigo-600/50 border-l-4 border-purple-40 border-white-500 card-hover hover:bg-purple-500/10"
                >
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Master HTML & CSS Projects</h4>
                      <p class="text-sm text-white-500">Self Learning</p>
                    </div>
                    <span class="text-xs text-white-500"
                      >2022–2023(self-taught)</span
                    >
                  </div>
                </div>
                <div
                  class="p-4 rounded-lg border-l-4 border-purple-40 border-white-500 card-hover hover:bg-purple-500/10 shadow-sm shadow-indigo-600/50"
                >
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Master Git & GitHub</h4>
                      <p class="text-sm text-white-500">Self Learning</p>
                    </div>
                    <span class="text-xs text-white-500"
                      >2022–2025(self-taught)</span
                    >
                  </div>
                </div>
                <div
                  class="p-4 rounded-lg border-l-4 border-purple-40 border-white-500 card-hover hover:bg-purple-500/10 shadow-sm shadow-indigo-600/50"
                >
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold">Communications</h4>
                      <p class="text-sm text-white-500">
                        10 Minute School, Duolingo
                      </p>
                    </div>
                    <span class="text-xs text-white-500">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Right Column -->
        </div>
      </div>
    </section>
    <!-- about section end  -->

    <!-- skills section start-->
    <section id="skills" class="mt-10 bg-black-100">
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
            class="rounded-lg border text-card-foreground shadow-lg shadow-blue-700/30 backdrop-blur-md border-primary/20 hover:bg-black/30 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
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
            class="rounded-lg border text-card-foreground shadow-lg shadow-blue-700/30 bg-black/20 backdrop-blur-md border-primary/20 hover:bg-black/30 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-500/10 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
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
            class="rounded-lg border text-card-foreground shadow-lg shadow-blue-700/30 bg-black/20 backdrop-blur-md border-primary/20 hover:bg-black/50 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
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
    <!-- skills section end -->

    <!-- tools section start -->
    <section id="tools-i-use" class="mt-10 bg-black-500 py-2 px-3">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">
        Tools
        <span
          class="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
          >I Use</span
        >
      </h2>

      <div dir="ltr" data-orientation="horizontal" class="w-full mb-10">
        <div class="flex justify-center mb-4 overflow-x-auto">
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
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <polygon
                      fill="#81c784"
                      points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
                    ></polygon>
                    <polygon
                      fill="#455a64"
                      points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
                    ></polygon>
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
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <polygon
                      fill="none"
                      points="26.055,24.519 18.71,37 33.401,37"
                    ></polygon>
                    <path
                      fill="none"
                      d="M14.279,36.641l9.455-16.065l-4.653-7.907L4.762,37h9.366C14.178,36.88,14.212,36.756,14.279,36.641	C14.279,36.642,14.279,36.642,14.279,36.641z"
                    ></path>
                    <path
                      fill="#1de9b6"
                      d="M14.262,39.569c-0.453-0.792-0.481-1.74-0.134-2.569H4.762l14.319-24.331l4.653,7.907l2.321-3.943	l-4.358-7.404c-0.551-0.937-1.528-1.496-2.615-1.497c0,0,0,0-0.001,0c-1.086,0-2.064,0.559-2.616,1.496L0.458,36.425	c-0.551,0.936-0.559,2.103-0.02,3.046S1.988,41,3.074,41h13.438C15.58,40.908,14.732,40.392,14.262,39.569z M2.182,37.44h0.01H2.182	z"
                    ></path>
                    <path
                      fill="#00bfa5"
                      d="M47.65,36.641L33.478,12.562c-0.53-0.9-1.469-1.437-2.513-1.437c-1.044,0-1.984,0.537-2.514,1.437	l-2.396,4.071l2.321,3.943l2.589-4.398L43,37h-5c0.258,0.802,0.151,1.724-0.276,2.471C37.185,40.414,36.086,41,35,41l0,0	c0.001,0.013-0.001-0.013,0,0h10c1.043,0,2.149-0.525,2.667-1.431C48.186,38.664,48.179,37.542,47.65,36.641z"
                    ></path>
                    <path
                      fill="#00838f"
                      d="M38,37c-0.068-0.21-0.182-0.381-0.296-0.575l-9.328-15.849l-2.321-3.943l-2.321,3.943l-9.455,16.065	c0,0,0,0.001,0,0.001c-0.067,0.113-0.101,0.238-0.151,0.358c-0.347,0.829-0.32,1.778,0.134,2.569c0.47,0.822,1.318,1.338,2.25,1.431	h18.576c1.086,0,2.096-0.586,2.635-1.529C38.151,38.724,38.258,37.802,38,37z M26.055,24.519L33.401,37H18.71L26.055,24.519z"
                    ></path>
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
                <div class="mb-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 100 100"
                  >
                    <path
                      fill="#c8ede6"
                      d="M87.2,55.6c0.3-0.6,0.6-1.3,0.8-1.9c2.6-7.8-1.3-17.1-9.7-19.3c-0.9-11.4-8.9-19.2-17.9-20.5 c-10.3-1.5-19.8,5-23,15.5c-3.8-1.3-7.5-1.2-11,0.9c-1.6,0.7-3,1.8-4.3,3.2c-1.9,2.1-3.1,4.7-3.7,7.5c-0.7,0.1-1.5,0.2-2.2,0.5 c-4,1.4-6.6,4.4-7.3,8.9c-0.4,2.8,0.4,5.6,0.9,6.7c1.9,4.5,6.4,7,11,6.3c0.2,0,0.6,0.1,0.8,0.2c0.2,7.1,3.7,13.4,8.9,17 c8.3,5.8,19,4,25.8-3.9c2.9,3,6.3,4.4,10.4,3.9c4-0.5,7.1-2.7,9.4-6.3c1.1,0.3,2.1,0.7,3.1,0.8c4,0.4,7.3-1.2,9.7-4.8 c0.1-0.1,0.2-0.2,0.3-0.3c0.3-0.8,0.7-1.6,1-2.4c0.2-1.2,0.4-2.4,0.4-3.6C90.7,60.5,89.4,57.5,87.2,55.6z"
                    ></path>
                    <path
                      fill="#fdfcef"
                      d="M41.3,34.4c0,0,11.7,0,11.8,0c2.7,0,4.9-2.2,4.9-4.9c0-2.4-1.7-4.3-3.9-4.8c0-0.2,0-0.4,0-0.6 c0-2.8-2.3-5.1-5.1-5.1c-1.7,0-3.1,0.8-4,2c-0.2-3.1-3-5.5-6.3-5.1c-2.4,0.3-4.3,2.1-4.8,4.5c-0.1,0.8-0.1,1.5,0,2.2 c-0.6-0.7-1.5-1.1-2.6-1.1c-1.9,0-3.4,1.4-3.5,3.3c-0.8-0.2-1.8-0.2-2.7,0.2c-1.8,0.7-3.1,2.4-3.2,4.4c-0.1,2.8,2.1,5.1,4.9,5.1 c0.2,0,0.9,0,1.1,0h10.2"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M53.1,34.9H41.3c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h11.8c2.4,0,4.4-2,4.4-4.4c0-2.1-1.5-3.9-3.5-4.3 c-0.3-0.1-0.4-0.3-0.4-0.6c0-0.2,0-0.4,0-0.6c0-2.5-2-4.6-4.6-4.6c-1.4,0-2.8,0.7-3.6,1.8c-0.1,0.2-0.3,0.2-0.5,0.2 c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-1.4-0.8-2.7-1.8-3.5c-1.1-0.9-2.5-1.3-3.9-1.1c-2.2,0.3-4,1.9-4.4,4.1c-0.1,0.7-0.1,1.3,0,2 c0,0.2-0.1,0.4-0.3,0.5c-0.2,0.1-0.4,0.1-0.6-0.1c-0.6-0.6-1.4-1-2.2-1c-1.6,0-2.9,1.2-3,2.8c0,0.1-0.1,0.3-0.2,0.4 c-0.1,0.1-0.3,0.1-0.4,0.1c-0.8-0.2-1.6-0.1-2.4,0.2c-1.7,0.6-2.8,2.2-2.9,3.9c0,1.2,0.4,2.4,1.2,3.2c0.8,0.9,2,1.3,3.2,1.3h11.3 c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5H26.9c-1.5,0-2.9-0.6-3.9-1.7c-1-1.1-1.6-2.5-1.5-4c0.1-2.1,1.5-4.1,3.5-4.8 c0.8-0.3,1.6-0.4,2.5-0.3c0.4-1.8,2-3.2,3.9-3.2c0.7,0,1.4,0.2,1.9,0.5c0-0.4,0-0.8,0.1-1.2c0.5-2.6,2.6-4.6,5.2-4.9 c1.7-0.2,3.3,0.3,4.6,1.3c1,0.8,1.7,2,2,3.2c1-0.9,2.3-1.4,3.7-1.4c3.1,0,5.6,2.5,5.6,5.6c0,0.1,0,0.2,0,0.2 c2.3,0.7,3.8,2.8,3.8,5.2C58.5,32.5,56.1,34.9,53.1,34.9z"
                    ></path>
                    <path
                      fill="#fdfcef"
                      d="M38.5,23.7c-1.8-0.1-3.4,1.1-3.5,2.8c0,0.2,0,0.4,0,0.6c-0.3-0.4-0.9-0.7-1.5-0.7c-1.1-0.1-2,0.6-2.2,1.6 c-0.2-0.1-0.4-0.1-0.6-0.1c-1.6-0.1-2.9,1-3,2.4"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M27.8,30.6C27.8,30.6,27.8,30.6,27.8,30.6c-0.2,0-0.3-0.1-0.3-0.3c0.1-1.6,1.6-2.8,3.3-2.7 c0.1,0,0.3,0,0.4,0.1c0.3-1,1.3-1.6,2.4-1.6c0.4,0,0.8,0.2,1.2,0.4c0,0,0,0,0-0.1c0.1-1.8,1.8-3.2,3.7-3c0.1,0,0.2,0.1,0.2,0.3 s-0.1,0.3-0.3,0.2c-1.7-0.1-3.1,1-3.2,2.6c0,0.2,0,0.4,0,0.6c0,0.1,0,0.2-0.1,0.3s-0.2,0-0.3-0.1c-0.3-0.4-0.8-0.6-1.3-0.6 c-1,0-1.8,0.6-1.9,1.4c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0.1-0.2,0c-0.2-0.1-0.4-0.1-0.6-0.1C29.4,28,28.1,29,28,30.3 C28,30.5,27.9,30.6,27.8,30.6z"
                    ></path>
                    <path
                      fill="#fdfcef"
                      d="M55.1,25.3c-1.7-0.8-3.7-0.2-4.4,1.3c-0.1,0.2-0.2,0.4-0.2,0.6"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M50.5,27.4C50.5,27.4,50.5,27.4,50.5,27.4c-0.2,0-0.3-0.2-0.2-0.3c0-0.2,0.1-0.4,0.2-0.6 c0.8-1.6,2.9-2.2,4.7-1.4c0.1,0.1,0.2,0.2,0.1,0.3c-0.1,0.1-0.2,0.2-0.3,0.1c-1.6-0.7-3.4-0.2-4.1,1.1c-0.1,0.2-0.1,0.3-0.2,0.5 C50.7,27.3,50.6,27.4,50.5,27.4z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M17.9,57h-10c-0.3,0-0.5-0.2-0.5-0.5S7.6,56,7.9,56h10c0.3,0,0.5,0.2,0.5,0.5S18.2,57,17.9,57z M21.3,56.5 c0-0.3-0.2-0.5-0.5-0.5h-1.4c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h1.4C21.1,57,21.3,56.8,21.3,56.5z M25.3,56.5 c0-0.3-0.2-0.5-0.5-0.5h-2.5c-0.3,0-0.5,0.2-0.5,0.5S22,57,22.3,57h2.5C25.1,57,25.3,56.8,25.3,56.5z M25.3,58.5 c0-0.3-0.2-0.5-0.5-0.5h-9.6c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h9.6C25.1,59,25.3,58.8,25.3,58.5z M14,58.5 c0-0.3-0.2-0.5-0.5-0.5h-0.6c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h0.6C13.8,59,14,58.8,14,58.5z M11.6,58.5 c0-0.3-0.2-0.5-0.5-0.5H9.7c-0.3,0-0.5,0.2-0.5,0.5S9.4,59,9.7,59h1.5C11.4,59,11.6,58.8,11.6,58.5z M20.7,54.5 c0-0.3-0.2-0.5-0.5-0.5h-5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h5C20.5,55,20.7,54.8,20.7,54.5z M20.7,52.5 c0-0.3-0.2-0.5-0.5-0.5H19c-0.3,0-0.5,0.2-0.5,0.5S18.7,53,19,53h1.3C20.5,53,20.7,52.8,20.7,52.5z M17.5,60.5 c0-0.3-0.2-0.5-0.5-0.5h-1.8c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5H17C17.3,61,17.5,60.8,17.5,60.5z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M71.7,25h-10c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5S72,25,71.7,25z M75.1,24.5 c0-0.3-0.2-0.5-0.5-0.5h-1.4c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h1.4C74.9,25,75.1,24.8,75.1,24.5z M79.2,24.5 c0-0.3-0.2-0.5-0.5-0.5h-2.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h2.5C79,25,79.2,24.8,79.2,24.5z M77.2,20.5 c0-0.3-0.2-0.5-0.5-0.5H67c-0.3,0-0.5,0.2-0.5,0.5S66.8,21,67,21h9.6C76.9,21,77.2,20.8,77.2,20.5z M65.8,20.5 c0-0.3-0.2-0.5-0.5-0.5h-0.6c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h0.6C65.6,21,65.8,20.8,65.8,20.5z M63.4,20.5 c0-0.3-0.2-0.5-0.5-0.5h-1.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h1.5C63.2,21,63.4,20.8,63.4,20.5z M74.6,22.5 c0-0.3-0.2-0.5-0.5-0.5h-5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h5C74.4,23,74.6,22.8,74.6,22.5z M74.6,20.5 c0-0.3-0.2-0.5-0.5-0.5h-1.3c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h1.3C74.4,21,74.6,20.8,74.6,20.5z M68.1,22.5 c0-0.3-0.2-0.5-0.5-0.5h-1.8c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h1.8C67.9,23,68.1,22.8,68.1,22.5z"
                    ></path>
                    <path
                      fill="#77cbd2"
                      d="M52,63.1c-14.8,0-26-5.2-26-12.1s11.2-12.1,26-12.1c14.8,0,26,5.2,26,12.1S66.8,63.1,52,63.1z M52,42.5 c-13.3,0-22.5,4.5-22.5,8.5s9.3,8.5,22.5,8.5S74.5,55,74.5,51S65.3,42.5,52,42.5z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M52,63.8c-15.2,0-26.7-5.5-26.7-12.8S36.8,38.2,52,38.2S78.7,43.7,78.7,51S67.2,63.8,52,63.8z M52,39.6 c-14.2,0-25.3,5-25.3,11.4S37.8,62.4,52,62.4s25.3-5,25.3-11.4S66.2,39.6,52,39.6z M52,60.2c-13.9,0-23.2-4.8-23.2-9.2 s9.3-9.2,23.2-9.2s23.2,4.8,23.2,9.2S65.9,60.2,52,60.2z M52,43.2c-13.5,0-21.8,4.5-21.8,7.8s8.3,7.8,21.8,7.8s21.8-4.5,21.8-7.8 S65.5,43.2,52,43.2z"
                    ></path>
                    <path
                      fill="#77cbd2"
                      d="M42.3,74.4c-1.2,0-2.2-0.3-3.2-0.8C33.4,70.2,34.6,58,42,45.2c5.1-9,12-15.8,17.5-17.2c2-0.5,3.9-0.4,5.4,0.5 c5.7,3.3,4.5,15.5-2.9,28.4c-5.1,9-12,15.8-17.5,17.2C43.7,74.3,43,74.4,42.3,74.4z M61.7,31.1c-0.4,0-0.9,0.1-1.3,0.2 c-4.6,1.2-10.8,7.5-15.4,15.6c-6.4,11.2-7.5,21.8-4.1,23.7c0.7,0.4,1.6,0.5,2.8,0.2c4.6-1.2,10.8-7.5,15.4-15.6 c6.4-11.2,7.5-21.8,4.1-23.7C62.8,31.2,62.3,31.1,61.7,31.1z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M42.3,75.1c-1.3,0-2.5-0.3-3.5-0.9c-6-3.5-4.9-16.2,2.6-29.4c5.2-9.2,12.3-16.1,17.9-17.6 c2.2-0.6,4.3-0.4,5.9,0.6c6,3.5,4.9,16.2-2.6,29.4c-5.2,9.2-12.3,16.1-17.9,17.6C43.9,75,43.1,75.1,42.3,75.1z M61.7,28.3 c-0.7,0-1.3,0.1-2.1,0.3c-5.3,1.4-12,8.1-17.1,16.9c-7,12.3-8.4,24.4-3.1,27.5c1.3,0.8,3,0.9,4.9,0.4c5.3-1.4,12-8.1,17.1-16.9 c7-12.3,8.4-24.4,3.1-27.5C63.7,28.5,62.8,28.3,61.7,28.3z M42.3,71.6c-0.7,0-1.3-0.1-1.8-0.4c-4.1-2.4-2.3-13.9,3.9-24.7 c4.7-8.3,11.1-14.7,15.8-15.9c1.3-0.4,2.4-0.3,3.3,0.2c4.1,2.4,2.3,13.9-3.9,24.7c-4.7,8.3-11.1,14.7-15.8,15.9 C43.3,71.6,42.7,71.6,42.3,71.6z M61.7,31.8c-0.3,0-0.7,0.1-1.2,0.2c-4.4,1.2-10.4,7.3-15,15.3c-6.6,11.6-7,21.2-4.4,22.8 c0.5,0.3,1.3,0.3,2.2,0.1c4.4-1.2,10.4-7.3,15-15.3c6.6-11.6,7-21.2,4.4-22.8C62.5,31.9,62.1,31.8,61.7,31.8z"
                    ></path>
                    <path
                      fill="#77cbd2"
                      d="M61.7,74.4c-0.7,0-1.5-0.1-2.2-0.3C54,72.6,47.1,65.8,42,56.8c-7.3-12.9-8.6-25.1-2.9-28.4 c1.5-0.9,3.4-1.1,5.4-0.5C50,29.4,56.9,36.2,62,45.2c7.3,12.9,8.6,25.1,2.9,28.4C64,74.1,62.9,74.4,61.7,74.4z M42.3,31.1 c-0.5,0-1,0.1-1.4,0.3c-3.3,1.9-2.3,12.5,4.1,23.7c4.6,8.1,10.8,14.4,15.4,15.6c1.1,0.3,2.1,0.3,2.8-0.2c3.3-1.9,2.3-12.5-4.1-23.7 c-4.6-8.1-10.8-14.4-15.4-15.6C43.1,31.1,42.7,31.1,42.3,31.1z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M61.7,75.1c-0.8,0-1.6-0.1-2.4-0.3c-5.7-1.5-12.7-8.4-17.9-17.6c-7.7-13.4-8.8-25.8-2.6-29.4 c1.7-1,3.7-1.2,5.9-0.6c5.7,1.5,12.7,8.4,17.9,17.6c7.5,13.2,8.7,25.8,2.6,29.4C64.2,74.8,63,75.1,61.7,75.1z M42.3,28.3 c-1,0-2,0.2-2.8,0.7c-5.3,3.1-3.9,15.1,3.1,27.5c5,8.9,11.8,15.5,17.1,16.9c1.8,0.5,3.5,0.3,4.9-0.4c5.3-3.1,3.9-15.1-3.1-27.5 c-5-8.9-11.8-15.5-17.1-16.9C43.6,28.4,42.9,28.3,42.3,28.3z M61.7,71.6c-0.5,0-1-0.1-1.5-0.2c-4.8-1.3-11.1-7.7-15.8-15.9 c-6.1-10.8-7.9-22.3-3.9-24.7c0.9-0.5,2-0.6,3.3-0.2c4.8,1.3,11.1,7.7,15.8,15.9c6.1,10.8,7.9,22.3,3.9,24.7 C63,71.5,62.4,71.6,61.7,71.6z M42.3,31.8c-0.4,0-0.8,0.1-1.1,0.3c-2.6,1.5-2.2,11.2,4.4,22.8c4.5,8,10.6,14.1,15,15.3 c1,0.3,1.7,0.2,2.2-0.1c2.6-1.5,2.2-11.2-4.4-22.8c-4.5-8-10.6-14.1-15-15.3C43,31.8,42.6,31.8,42.3,31.8z"
                    ></path>
                    <circle cx="52" cy="51" r="5.5" fill="#77cbd2"></circle>
                    <path
                      fill="#472b29"
                      d="M52,57c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S55.3,57,52,57z M52,46c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5 S54.8,46,52,46z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M52,54.5c-0.1,0-0.3-0.1-0.3-0.3S51.9,54,52,54c0.3,0,0.7-0.1,1-0.2c0.4-0.2,0.9-0.4,1.2-0.8 c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4c-0.4,0.4-0.9,0.7-1.4,0.9C52.8,54.4,52.4,54.5,52,54.5z"
                    ></path>
                    <g>
                      <path
                        fill="#472b29"
                        d="M54.9,52.7c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.1-0.3c0.2-0.4,0.3-0.9,0.3-1.3c0-1.2-0.6-2.2-1.7-2.7 c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1c1.2,0.6,2,1.8,2,3.1c0,0.5-0.1,1.1-0.4,1.5C55.1,52.6,55,52.7,54.9,52.7z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#472b29"
                        d="M50.2,48.5c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.3,0.1-0.3c0.6-0.4,1.2-0.6,1.9-0.6c0.1,0,0.3,0.1,0.3,0.3 S52.1,48,52,48c-0.6,0-1.1,0.2-1.6,0.5C50.3,48.5,50.3,48.5,50.2,48.5z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#472b29"
                        d="M55.3,38.7c-0.1,0-0.1,0-0.2-0.1c-3.4-4.2-6.7-7-9.6-8.3c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1 c3,1.3,6.4,4.1,9.8,8.5c0.1,0.1,0.1,0.3,0,0.4C55.4,38.7,55.3,38.7,55.3,38.7z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#472b29"
                        d="M39.5,30.4c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.3-0.2,1.7-1.2,4.4-0.7c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.2,0.2-0.3,0.2c-2.5-0.5-3.9,0.4-4,0.6C39.6,30.3,39.5,30.4,39.5,30.4z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#472b29"
                        d="M73.6,56.1c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c2.2-1.8,3-3.8,2.5-6.1c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.5,2.4-0.4,4.7-2.7,6.6C73.7,56.1,73.7,56.1,73.6,56.1z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#472b29"
                        d="M69.6,58.3c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.3,0.2-0.3c0,0,1.3-0.4,2.7-1.3c0.1-0.1,0.3,0,0.3,0.1 c0.1,0.1,0,0.3-0.1,0.3C71,57.9,69.7,58.3,69.6,58.3C69.7,58.3,69.6,58.3,69.6,58.3z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#472b29"
                        d="M41.9,73C41.9,73,41.9,73,41.9,73c-2.5-0.1-4.1-1.9-4.7-5.3c0-0.1,0.1-0.3,0.2-0.3c0.1,0,0.3,0.1,0.3,0.2 c0.5,3.2,1.9,4.8,4.2,4.9c0.1,0,0.2,0.1,0.2,0.3C42.1,72.8,42,73,41.9,73z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#472b29"
                        d="M37.3,65.6c-0.1,0-0.2-0.1-0.3-0.2c-0.1-2.1,0.2-4,0.3-4.2c0-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.3,1.9-0.3,4.1C37.5,65.5,37.4,65.6,37.3,65.6C37.3,65.6,37.3,65.6,37.3,65.6z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#fdfcef"
                        d="M79.2,64.3c1.9,0,3.5,0,3.5,0c2.1,0,3.8-1.7,3.8-3.7c0-1.8-1.3-3.3-3-3.7c0-0.2,0-0.3,0-0.5 c0-2.1-1.8-3.9-4-3.9c-1.3,0-2.4,0.6-3.2,1.5c-0.2-2.4-2.4-4.2-4.9-3.9c-1.9,0.2-3.4,1.6-3.7,3.4c-0.1,0.6-0.1,1.1,0,1.7 c-0.5-0.5-1.2-0.9-2-0.9c-1.4,0-2.6,1.1-2.7,2.5c-0.7-0.1-1.4-0.1-2.1,0.1c-1.4,0.5-2.5,1.9-2.5,3.4c-0.1,2.1,1.7,3.9,3.8,3.9 c0.2,0,0.7,0,0.9,0h7.9 M72.7,64.3h0.4"
                      ></path>
                      <path
                        fill="#472b29"
                        d="M82.7,64.8h-3.5c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h3.5c1.8,0,3.3-1.5,3.3-3.2c0-1.5-1.1-2.9-2.6-3.2 c-0.3-0.1-0.4-0.3-0.4-0.6c0-0.1,0-0.3,0-0.4c0-1.9-1.6-3.4-3.5-3.4c-1.1,0-2.1,0.5-2.8,1.3c-0.1,0.2-0.3,0.2-0.5,0.2 c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-1-0.6-1.9-1.4-2.6c-0.8-0.7-1.9-1-3-0.9c-1.6,0.2-3,1.4-3.3,3c-0.1,0.5-0.1,1,0,1.5 c0,0.2-0.1,0.4-0.3,0.5c-0.2,0.1-0.4,0.1-0.6-0.1c-0.4-0.5-1-0.7-1.6-0.7c-1.2,0-2.1,0.9-2.2,2c0,0.1-0.1,0.3-0.2,0.4 c-0.1,0.1-0.3,0.1-0.4,0.1c-0.6-0.1-1.2-0.1-1.8,0.1c-1.3,0.5-2.1,1.6-2.2,2.9c0,0.9,0.3,1.7,0.9,2.3c0.6,0.7,1.5,1,2.4,1h8.8 c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5h-8.8c-1.2,0-2.3-0.5-3.1-1.3c-0.8-0.8-1.2-1.9-1.2-3.1c0.1-1.7,1.2-3.2,2.8-3.8 c0.6-0.2,1.2-0.3,1.9-0.2c0.3-1.4,1.6-2.4,3.1-2.4c0.5,0,1,0.1,1.4,0.3c0-0.2,0-0.5,0.1-0.7c0.4-2,2.1-3.6,4.2-3.8 c1.4-0.2,2.7,0.2,3.7,1.1c0.7,0.6,1.3,1.4,1.5,2.3c0.8-0.6,1.8-1,2.8-1c2.5,0,4.5,2,4.5,4.4c0,0,0,0.1,0,0.1c1.8,0.6,3,2.2,3,4 C87,62.9,85.1,64.8,82.7,64.8z M73.1,64.8h-0.4c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h0.4c0.3,0,0.5,0.2,0.5,0.5 S73.3,64.8,73.1,64.8z"
                      ></path>
                      <g>
                        <path
                          fill="#472b29"
                          d="M81,59C81,59,81,59,81,59c-0.2,0-0.3-0.2-0.2-0.3c0-0.2,0.1-0.3,0.2-0.5c0.6-1.2,2.3-1.7,3.7-1 c0.1,0.1,0.2,0.2,0.1,0.3c-0.1,0.1-0.2,0.2-0.3,0.1c-1.2-0.6-2.6-0.2-3.1,0.8c-0.1,0.1-0.1,0.2-0.1,0.4C81.2,58.9,81.1,59,81,59z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="#472b29"
                          d="M75.9,64.8h-1.1c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1.1c0.3,0,0.5,0.2,0.5,0.5S76.1,64.8,75.9,64.8z"
                        ></path>
                      </g>
                    </g>
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
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                    <path
                      fill="#000001"
                      d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                    ></path>
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
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <rect
                      width="36"
                      height="36"
                      x="6"
                      y="6"
                      fill="#1976d2"
                    ></rect>
                    <polygon
                      fill="#fff"
                      points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                    ></polygon>
                    <path
                      fill="#fff"
                      d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                    ></path>
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
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                  >
                    <path
                      fill="#31c4f3"
                      d="M30.64,36.275c7.042-8.542,10.948-13.279,17.99-13.279c12.764,0,16.07,9.906,24.867,16.413 C77,42,86.98,44.818,90.501,36.275C86.98,48.021,79.938,53.36,72.895,53.36C67.722,53.36,61,48,54.849,41.08 C47.267,32.552,34.162,32.004,30.64,36.275z"
                    ></path>
                    <path
                      fill="#31c4f3"
                      d="M9.499,59.919c7.042-8.542,10.948-13.279,17.99-13.279c12.764,0,16.359,9.532,24.867,16.413 C56,66,65.838,68.461,69.36,59.919c-3.521,11.746-10.564,17.084-17.606,17.084C46.581,77.004,40,72,33.707,64.724 C26.243,56.093,13.02,55.648,9.499,59.919z"
                    ></path>
                    <path
                      fill="#1f212b"
                      d="M72.895,54.359c-6.265,0-13.678-6.86-18.794-12.615c-4.756-5.35-11.458-7.193-16.122-7.077 c-2.998,0.056-5.452,0.894-6.565,2.242c0,0,0,0-0.001,0.001c-0.352,0.427-0.982,0.487-1.408,0.136 c-0.426-0.351-0.488-0.98-0.136-1.406c0.001-0.003,0.003-0.005,0.005-0.007c7.011-8.504,11.245-13.637,18.757-13.637 c9.158,0,13.657,4.833,18.42,9.951c2.129,2.287,4.331,4.652,7.042,6.658c2.023,1.495,6.572,3.132,10.357,2.076 c2.364-0.657,4.089-2.269,5.127-4.787c0.203-0.492,0.759-0.738,1.259-0.562c0.502,0.179,0.776,0.719,0.624,1.229 C88.118,47.706,81.178,54.359,72.895,54.359z M38.293,32.664c5.1,0,12.213,2.026,17.303,7.752 c6.846,7.702,12.99,11.943,17.299,11.943c5.891,0,11.058-3.931,14.46-10.767c-0.726,0.438-1.517,0.779-2.369,1.016 c-4.685,1.304-9.897-0.778-12.083-2.396c-2.86-2.115-5.125-4.55-7.316-6.903c-4.651-4.998-8.668-9.313-16.956-9.313 c-5.472,0-9.01,3.182-14.004,9.055c1.014-0.23,2.128-0.361,3.315-0.383C38.058,32.665,38.175,32.664,38.293,32.664z"
                    ></path>
                    <path
                      fill="#1f212b"
                      d="M51.753,78.004c-5.083,0-11.761-4.483-18.803-12.625c-4.598-5.317-11.242-7.159-15.893-7.098 c-3.105,0.036-5.642,0.886-6.787,2.272c0,0-0.001,0.001-0.001,0.001l0,0c-0.352,0.428-0.98,0.487-1.408,0.136 c-0.426-0.352-0.487-0.981-0.135-1.407l0,0c0.001-0.002,0.003-0.004,0.004-0.006c7.011-8.504,11.245-13.637,18.757-13.637 c9.493,0,14.151,5.034,19.084,10.363c1.964,2.123,3.996,4.317,6.412,6.271c2.183,1.766,6.437,3.152,10.016,2.235 c2.51-0.641,4.338-2.313,5.435-4.973c0.204-0.493,0.759-0.74,1.259-0.562c0.502,0.179,0.776,0.719,0.624,1.229 C66.977,71.351,60.037,78.004,51.753,78.004z M17.257,56.279c5.104,0,12.233,2.04,17.207,7.791 c6.656,7.695,12.797,11.934,17.29,11.934c5.864,0,11.011-3.895,14.414-10.675c-0.812,0.497-1.705,0.873-2.671,1.119 c-4.258,1.089-9.144-0.494-11.769-2.618c-2.528-2.044-4.609-4.293-6.622-6.468c-4.828-5.217-8.998-9.722-17.616-9.722 c-5.467,0-9.004,3.176-13.991,9.038c1.076-0.247,2.266-0.383,3.537-0.397C17.108,56.28,17.183,56.279,17.257,56.279z"
                    ></path>
                    <path
                      d="M59.424,69.567c-4.122,0-8.357-2.487-10.382-4.126c-2.181-1.764-4.185-3.977-6.124-6.116C38.575,54.529,34.473,50,28.5,50 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c6.416,0,10.861,4.907,15.159,9.653c1.913,2.112,3.891,4.296,6.011,6.011 c2.148,1.737,6.905,4.494,11.123,3.794c0.271-0.049,0.529,0.14,0.575,0.411c0.045,0.272-0.139,0.53-0.412,0.575 C60.451,69.528,59.938,69.567,59.424,69.567z"
                    ></path>
                    <path
                      d="M19.5,53c-0.162,0-0.32-0.078-0.417-0.223c-0.153-0.229-0.091-0.54,0.139-0.693c2.513-1.676,4.26-2.59,6.836-2.935 c0.273-0.045,0.525,0.155,0.562,0.429s-0.155,0.525-0.429,0.562c-2.381,0.319-4.028,1.186-6.414,2.776 C19.692,52.973,19.596,53,19.5,53z"
                    ></path>
                    <path
                      d="M80.924,46.067c-4.122,0-8.357-2.487-10.382-4.126c-2.181-1.764-4.185-3.977-6.124-6.116 C60.075,31.029,55.973,26.5,50,26.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c6.416,0,10.861,4.907,15.159,9.653 c1.913,2.112,3.891,4.296,6.011,6.011c2.148,1.737,6.907,4.487,11.123,3.794c0.273-0.053,0.53,0.14,0.575,0.411 c0.045,0.272-0.139,0.53-0.412,0.575C81.951,46.028,81.438,46.067,80.924,46.067z"
                    ></path>
                    <path
                      d="M41,29.5c-0.162,0-0.32-0.078-0.417-0.223c-0.153-0.229-0.091-0.54,0.139-0.693c2.24-1.493,3.869-2.383,6.057-2.809 c0.273-0.046,0.534,0.125,0.586,0.396c0.053,0.271-0.125,0.534-0.396,0.587c-2.022,0.393-3.561,1.237-5.693,2.658 C41.192,29.473,41.096,29.5,41,29.5z"
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
                    viewBox="0 0 128 128"
                    class="w-10 h-10"
                  >
                    <path
                      fill="#1572B6"
                      d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                    ></path>
                    <path
                      fill="#33A9DC"
                      d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
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
                    viewBox="0 0 128 128"
                    class="w-8 h-8"
                  >
                    <path
                      fill="#E44D26"
                      d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                    ></path>
                    <path
                      fill="#F16529"
                      d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
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
                    width="40"
                    height="40"
                    viewBox="0 0 128 128"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-paintbrush w-8 h-8 text-purple-500"
                  >
                    <path
                      fill="#3465a4"
                      d="m42.922 104.996 28.89-82.437a.334.334 0 0 1 .32-.215h12.411a.329.329 0 0 1 .309.445l-28.75 82.434a.33.33 0 0 1-.309.218H43.23a.322.322 0 0 1-.27-.144.318.318 0 0 1-.038-.3Zm0 0"
                    ></path>
                    <path
                      fill="#333"
                      d="m87.195 53.445 3.188-9.777a.348.348 0 0 1 .18-.2.316.316 0 0 1 .265-.003l36.75 15.36c.121.05.203.167.207.296l-.012 10.242a.328.328 0 0 1-.207.297l-36.75 15.352a.316.316 0 0 1-.265-.004.325.325 0 0 1-.176-.203l-3.18-9.774a.333.333 0 0 1 .196-.414l26.148-10.074a.338.338 0 0 0 .215-.313.333.333 0 0 0-.215-.308L87.391 53.859a.333.333 0 0 1-.196-.414ZM14.172 64.52l26.2 10.109a.31.31 0 0 1 .187.379l-3.211 9.808a.312.312 0 0 1-.168.184.3.3 0 0 1-.246 0L.188 69.66A.302.302 0 0 1 0 69.371v-10.27a.302.302 0 0 1 .188-.288l36.757-15.348a.3.3 0 0 1 .246 0 .324.324 0 0 1 .168.183l3.207 9.817a.309.309 0 0 1-.183.383L14.172 63.94a.308.308 0 0 0 0 .578Zm0 0"
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
                    width="40"
                    height="40"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="url(#a)"
                      d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
                    ></path>
                    <path
                      fill="url(#b)"
                      d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"
                    ></path>
                    <path
                      fill="url(#c)"
                      d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
                    ></path>
                    <defs>
                      <linearGradient
                        id="a"
                        x1="34.513"
                        x2="27.157"
                        y1="15.535"
                        y2="30.448"
                        gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3F873F"></stop>
                        <stop offset=".33" stop-color="#3F8B3D"></stop>
                        <stop offset=".637" stop-color="#3E9638"></stop>
                        <stop offset=".934" stop-color="#3DA92E"></stop>
                        <stop offset="1" stop-color="#3DAE2B"></stop>
                      </linearGradient>
                      <linearGradient
                        id="b"
                        x1="30.009"
                        x2="50.533"
                        y1="23.359"
                        y2="8.288"
                        gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".138" stop-color="#3F873F"></stop>
                        <stop offset=".402" stop-color="#52A044"></stop>
                        <stop offset=".713" stop-color="#64B749"></stop>
                        <stop offset=".908" stop-color="#6ABF4B"></stop>
                      </linearGradient>
                      <linearGradient
                        id="c"
                        x1="21.917"
                        x2="40.555"
                        y1="22.261"
                        y2="22.261"
                        gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".092" stop-color="#6ABF4B"></stop>
                        <stop offset=".287" stop-color="#64B749"></stop>
                        <stop offset=".598" stop-color="#52A044"></stop>
                        <stop offset=".862" stop-color="#3F873F"></stop>
                      </linearGradient>
                    </defs>
                  </svg>

                  <!-- <svg
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
                  </svg> -->
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
                    viewBox="0 0 128 128"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-workflow w-8 h-8 text-purple-500"
                  >
                    <path
                      d="M56.813 127.586c-1.903-.227-3.899-.52-4.434-.652a48.078 48.078 0 00-2.375-.5 36.042 36.042 0 01-2.703-.633c-4.145-1.188-4.442-1.285-7.567-2.563-2.875-1.172-8.172-3.91-9.984-5.156-.496-.344-.96-.621-1.031-.621-.07 0-1.23-.816-2.578-1.813-8.57-6.343-15.004-14.043-19.653-23.527-.8-1.629-1.453-3.074-1.453-3.21 0-.134-.144-.505-.32-.817-.363-.649-.88-2.047-1.297-3.492a20.047 20.047 0 00-.625-1.813c-.195-.46-.352-1.02-.352-1.246 0-.227-.195-.965-.433-1.645-.238-.675-.43-1.472-.43-1.77 0-.296-.187-1.32-.418-2.276C.598 73.492 0 67.379 0 63.953c0-3.422.598-9.535 1.16-11.894.23-.957.418-2 .418-2.32 0-.321.145-.95.32-1.4.18-.448.41-1.253.516-1.788.11-.535.36-1.457.563-2.055l.59-1.726c.433-1.293.835-2.387 1.027-2.813.11-.238.539-1.21.957-2.16.676-1.535 2.125-4.43 2.972-5.945.309-.555.426-.739 2.098-3.352 2.649-4.148 7.176-9.309 11.39-12.988 1.485-1.297 6.446-5.063 6.669-5.063.062 0 .53-.281 1.043-.625 1.347-.902 2.668-1.668 4.39-2.531a53.06 53.06 0 001.836-.953c.285-.164.82-.41 3.567-1.64.605-.27 1.257-.516 3.136-1.173.414-.144 1.246-.449 1.84-.672.598-.222 1.301-.406 1.563-.406.258 0 .937-.18 1.508-.402.57-.223 1.605-.477 2.304-.563.696-.082 1.621-.277 2.055-.43.43-.148 1.61-.34 2.621-.425a72.572 72.572 0 003.941-.465c2.688-.394 8.532-.394 11.192 0a75.02 75.02 0 003.781.445c.953.079 2.168.278 2.703.442.535.16 1.461.36 2.055.433.594.079 1.594.325 2.222.551.63.23 1.344.414 1.59.414s.754.137 1.125.309c.375.168 1.168.449 1.766.625.594.18 1.613.535 2.27.797.652.261 1.527.605 1.945.761.77.29 6.46 3.137 7.234 3.622 6.281 3.917 9.512 6.476 13.856 10.964 5.238 5.414 8.715 10.57 12.254 18.16.25.536.632 1.329.851 1.758.215.434.395.942.395 1.13 0 .19.18.76.402 1.269.602 1.383 1.117 2.957 1.36 4.16.12.59.343 1.32.495 1.621.153.3.332 1.063.403 1.688.07.624.277 1.648.453 2.269 1.02 3.531 1.527 13.934.91 18.535-.183 1.367-.39 3.02-.46 3.672-.118 1.117-.708 4.004-1.212 5.945l-.52 2.055c-.98 3.957-3.402 9.594-6.359 14.809-1.172 2.07-5.101 7.668-5.843 8.324-.067.058-.399.45-.735.863-.336.418-1.414 1.586-2.39 2.594-4.301 4.441-7.77 7.187-13.86 10.969-.722.449-6.847 3.441-7.992 3.906-.594.238-1.586.64-2.203.89-.613.247-1.297.454-1.512.458-.215.003-.781.195-1.258.425-.476.23-1.082.422-1.351.426-.266.004-1.043.192-1.727.418-.683.23-1.633.477-2.11.55-.476.075-1.495.278-2.269.45-.773.172-3.11.508-5.187.746a59.06 59.06 0 01-13.945-.031zm4.703-12.5c.3-.234.609-.7.691-1.027.18-.723 29.234-58.97 29.781-59.7.461-.617.504-1.605.082-1.953-.222-.187-3.004-.246-10.43-.234-5.57.012-10.253.016-10.406.012-.226-.008-.273-3.73-.25-19.672.016-10.817-.035-19.766-.113-19.89-.078-.126-.383-.227-.68-.227-.418 0-.613.18-.87.808-.485 1.168-1.825 3.82-8.348 16.485a3554.569 3554.569 0 00-4.055 7.89c-1.156 2.262-2.98 5.813-4.047 7.89a8751.248 8751.248 0 00-8.598 16.759c-4.933 9.636-5.53 10.785-5.742 11.039-.41.496-.633 1.64-.402 2.07.21.394.629.41 11.043.394 5.953-.007 10.863.024 10.914.07.137.141.086 37.31-.055 38.196-.093.582-.031.89.235 1.156.46.461.586.457 1.25-.066zm0 0"
                      fill="#049688"
                    ></path>
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
                    width="70"
                    height="70"
                    viewBox="0 0 128 128"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-lock w-8 h-8 text-purple-500"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#3A4D54"
                      d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"
                    ></path>
                    <path
                      fill="#00AADA"
                      d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"
                    ></path>
                    <path
                      fill="#28B8EB"
                      d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"
                    ></path>
                    <path
                      fill="#028BB8"
                      d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"
                    ></path>
                    <path
                      fill="#019BC6"
                      d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#00ACD3"
                      d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#23C2EE"
                      d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#00ACD3"
                      d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#23C2EE"
                      d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#00ACD3"
                      d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#23C2EE"
                      d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#00ACD3"
                      d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#D4EEF1"
                      d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#3A4D54"
                      d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"
                    ></path>
                    <path
                      fill="#BFDBE0"
                      d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"
                    ></path>
                    <path
                      fill="#D4EEF1"
                      d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"
                    ></path>
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
                    viewBox="0 0 128 128"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-code w-8 h-8 text-purple-500"
                  >
                    <mask
                      id="a"
                      width="128"
                      height="128"
                      x="0"
                      y="0"
                      maskUnits="userSpaceOnUse"
                      style="mask-type: alpha"
                    >
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
                        clip-rule="evenodd"
                      ></path>
                    </mask>
                    <g mask="url(#a)">
                      <path
                        fill="#0065A9"
                        d="M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z"
                      ></path>
                      <g filter="url(#b)">
                        <path
                          fill="#007ACC"
                          d="m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z"
                        ></path>
                      </g>
                      <g filter="url(#c)">
                        <path
                          fill="#1F9CF0"
                          d="M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z"
                        ></path>
                      </g>
                      <path
                        fill="url(#d)"
                        fill-rule="evenodd"
                        d="M90.69 127.126a7.968 7.968 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.328 5.328 0 0 0 6.807.303l21.975-16.681 50.45 46.026a7.959 7.959 0 0 0 2.742 1.793Zm5.252-92.184L57.662 64l38.28 29.057V34.943Z"
                        clip-rule="evenodd"
                        opacity="0.25"
                        style="mix-blend-mode: overlay"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="b"
                        width="144.744"
                        height="113.408"
                        x="-8.41115"
                        y="22.5944"
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        ></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          mode="overlay"
                          result="effect1_dropShadow_1_36"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_36"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="c"
                        width="56.6667"
                        height="144.007"
                        x="79.6667"
                        y="-8.0035"
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        ></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          mode="overlay"
                          result="effect1_dropShadow_1_36"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_36"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="d"
                        x1="63.9222"
                        x2="63.9222"
                        y1="0.329902"
                        y2="127.67"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
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
                    width="40"
                    height="40"
                    viewBox="0 0 128 128"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-git-merge w-8 h-8 text-purple-500"
                  >
                    <path
                      fill="#F34F29"
                      d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
                    ></path>
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
                <div class="mb-1 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 128 128"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-git-merge w-10 h-10 text-purple-500"
                  >
                    <g fill="#181616">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                      ></path>
                      <path
                        d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                      ></path>
                    </g>
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
                <div class="mb-1 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 128 128"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-pyramid w-10 h-10 text-purple-500"
                  >
                    <path
                      d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943l-.733.733Z"
                      fill="#014847"
                    ></path>
                    <path
                      d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"
                      fill="#05bdba"
                    ></path>
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
    <section id="my-recent-project" class="bg-black-100 top-0">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-2">
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
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-md rounded-full hover:opacity-90 transition"
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
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-md rounded-full hover:opacity-90 transition"
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
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-md rounded-full hover:opacity-90 transition"
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
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-md rounded-full hover:opacity-90 transition"
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
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-md rounded-full hover:opacity-90 transition"
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
                class="px-2 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-md rounded-full hover:opacity-90 transition"
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
    <section id="contact-me" class="bg-black-100">
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
                  <p class="text-muted-foreground mb-">
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
                          >+88016-50217608</a
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
                        href="https://wa.me/88016-50217608"
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
    <footer class="bg-card pb-7">
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
        <div class="border-b border-muted pb-10 mb-5">
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-12 text-muted-foreground"
          >
            <!-- About -->
            <div class="ml-10">
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
            <div class="ml-[7rem]">
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
              </ul>
            </div>

            <!-- Contact Info -->
            <div class="ml-20">
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
                    href="tel:+8801650217608"
                    class="hover:text-purple-500 transition-colors"
                    >+88016-50217608</a
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
