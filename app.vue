<template>
  <div
    class="min-h-screen text-white transition-colors duration-300 relative overflow-hidden"
  >
    <!-- Galaxy Animated Background -->
    <div class="absolute inset-0 -z-10 galaxy-bg"></div>

    <!-- Header Navbar start -->
    <header class="fixed top-0 left-0 w-full z-50">
      <!-- Scroll Progress Bar -->
      <div class="fixed top-0 left-0 w-full h-[5px] bg-gray-800 z-50">
        <div
          class="h-[5px] bg-gradient-to-r from-cyan-700 to-blue-200 shadow-md transition-all duration-300"
          :style="{ width: scrollProgress + '%' }"
        ></div>
      </div>

      <!-- Desktop Right Sidebar Navbar -->
      <aside
        class="hidden md:flex fixed top-1/2 right-6 -translate-y-1/2 z-40 flex-col items-center space-y-5 bg-gray-900/95 backdrop-blur-lg rounded-3xl p-4 shadow-2xl border border-white/10"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="p-3 rounded-full bg-gray-800 text-white hover:scale-110 transition-all duration-300 shadow-md"
          :class="{
            'hover:bg-cyan-500': item.label === 'Home',
            'hover:bg-pink-500': item.label === 'About',
            'hover:bg-green-500': item.label === 'Skills',
            'hover:bg-yellow-500': item.label === 'Tools',
            'hover:bg-blue-500': item.label === 'Projects',
            'hover:bg-purple-500': item.label === 'Contact',
            'hover:bg-red-500': item.label === 'Footer',
          }"
        >
          {{ item.icon }}
        </a>
      </aside>

      <!-- Mobile Hamburger Button -->
      <button
        @click="isOpen = true"
        class="md:hidden fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-cyan-500 transition-all duration-300"
      >
        ☰
      </button>

      <!-- Mobile Dropdown Menu -->
      <transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center"
        >
          <div
            class="bg-gray-900 rounded-2xl p-6 w-80 max-h-[90vh] overflow-y-auto shadow-2xl relative"
          >
            <!-- Close Button -->
            <button
              @click="isOpen = false"
              class="absolute top-3 right-3 text-white text-2xl hover:text-red-400 transition"
            >
              ✕
            </button>

            <!-- Nav Links -->
            <ul
              class="flex flex-col space-y-4 text-center text-white font-medium"
            >
              <li
                v-for="(item, i) in navItems"
                :key="item.href"
                class="relative"
              >
                <a
                  :href="item.href"
                  class="block py-2 px-4 rounded-lg bg-gray-800 hover:bg-cyan-500 transition"
                  @click="isOpen = false"
                >
                  {{ item.icon }} {{ item.label }}
                </a>
                <!-- Divider -->
                <div
                  v-if="i !== navItems.length - 1"
                  class="border-b border-dashed border-gray-600 mt-2"
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </header>
    <!-- End Header Navbar -->

    <!-- Hero Section start -->
    <section
      id="intro"
      class="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 pt-7 pb-15 max-w-screen-xl mx-auto"
    >
      <!-- Text Content -->
      <div class="w-full mt-[70px] md:w-1/2 text-center md:text-left">
        <h2 class="font-extrabold leading-tight">
          <!-- FRONTEND -->
          <span
            class="text-4xl sm:text-6xl md:text-8xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text block overflow-hidden whitespace-nowrap animate-frontend"
          >
            FRONTEND
          </span>

          <!-- DEVELOPER -->
          <span
            class="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text block mt-2 overflow-hidden whitespace-nowrap animate-developer"
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
          <!-- sms -->
          <a
            href="https://wa.me/8801650217808"
            target="_blank"
            class="p-2 rounded-full bg-secondary text-foreground hover:bg-purple-500 hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 448 512">
              <path
                d="M380.9 97.1C339 55.2 283.1 32 224.5 32C106.6 32 11 127.6 11 245.5c0 37.6 9.7 74.4 28.1 107.1L3.4 480l131.4-34.6c30.5 16.7 64.9 25.4 99.7 25.4h.1c117.9 0 213.6-95.6 213.6-213.5 0-58.6-23.2-113.5-65.3-155.2z"
              />
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
                class="relative p-6 rounded-lg border-l-4 border-purple-40 border-white-500 shadow-sm shadow-indigo-600/50 card-hover hover:bg-purple-500/10 cursor-pointer"
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
                  class="p-3 rounded-lg shadow-sm shadow-indigo-600/50 border-l-4 border-purple-40 border-white-500 card-hover hover:bg-purple-500/10 cursor-pointer"
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
                  class="p-4 rounded-lg shadow-sm shadow-indigo-600/50 border-l-4 border-purple-40 border-white-500 card-hover hover:bg-purple-500/10 cursor-pointer"
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
                  class="p-4 rounded-lg border-l-4 border-purple-40 border-white-500 card-hover hover:bg-purple-500/10 shadow-sm shadow-indigo-600/50 cursor-pointer"
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
                  class="p-4 rounded-lg border-l-4 border-purple-40 border-white-500 card-hover hover:bg-purple-500/10 shadow-sm shadow-indigo-600/50 cursor-pointer"
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

          <!-- Right: Education & Certifications -->

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
                class="text-center p-4 rounded-lg bg-black-700 border border-black-500 shadow-lg shadow-blue-500/50 hover:bg-pink-500/10 card-hover cursor-pointer"
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
                class="text-center p-4 rounded-lg bg-black-700 border border-black-500 shadow-lg shadow-blue-500/50 hover:bg-pink-500/10 card-hover cursor-pointer"
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
                class="text-center p-4 rounded-lg bg-black-700 border border-black-500 shadow-lg shadow-blue-500/50 hover:bg-pink-500/10 card-hover cursor-pointer"
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
                class="text-center p-4 rounded-lg bg-black-700 border border-black-500 shadow-lg shadow-blue-500/50 hover:bg-pink-500/10 card-hover cursor-pointer"
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
                <div class="text-xl font-bold">40K+</div>
                <p class="text-xs text-muted-foreground">Lines of Code</p>
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
                  <span class="tech-badge cursor-pointer">VueJs</span>
                  <span class="tech-badge cursor-pointer">NuxtJs</span>
                  <span class="tech-badge cursor-pointer">ReactJs</span>
                  <span class="tech-badge cursor-pointer">TypeScript</span>
                  <span class="tech-badge cursor-pointer">JavaScript</span>
                  <span class="tech-badge cursor-pointer">HTML5</span>
                  <span class="tech-badge cursor-pointer">HTML</span>
                  <span class="tech-badge cursor-pointer">JavaScript</span>
                  <span class="tech-badge cursor-pointer">NodeJs</span>
                  <span class="tech-badge cursor-pointer">Vite</span>
                  <span class="tech-badge cursor-pointer">ESLint</span>
                  <span class="tech-badge cursor-pointer">Prettier</span>
                  <span class="tech-badge cursor-pointer">Git</span>
                  <span class="tech-badge cursor-pointer">GitHub</span>
                  <span class="tech-badge cursor-pointer">VS Code</span>
                  <span class="tech-badge cursor-pointer">Figma</span>
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
                  <span class="tech-badge cursor-pointer">Tailwind CSS</span>
                  <span class="tech-badge cursor-pointer">CSS</span>
                  <span class="tech-badge cursor-pointer"
                    >Styled Components</span
                  >
                  <span class="tech-badge cursor-pointer">CSS Modules</span>
                  <span class="tech-badge cursor-pointer">Figma</span>
                  <span class="tech-badge cursor-pointer">Photoshop</span>
                  <span class="tech-badge cursor-pointer">Canva</span>
                  <span class="tech-badge cursor-pointer">VS Code</span>
                  <span class="tech-badge cursor-pointer">Framer Motion</span>
                  <span class="tech-badge cursor-pointer">Material-UI</span>
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
                  <span class="tech-badge cursor-pointer">Engineering</span>
                  <span class="tech-badge cursor-pointer">Team Work</span>
                  <span class="tech-badge cursor-pointer">Building</span>
                  <span class="tech-badge cursor-pointer">Problem Solving</span>
                  <span class="tech-badge cursor-pointer">Creativity</span>
                  <span class="tech-badge cursor-pointer"
                    >Critical Thinking</span
                  >
                  <span class="tech-badge cursor-pointer">Communication</span>
                  <span class="tech-badge cursor-pointer">Collaboration</span>
                  <span class="tech-badge cursor-pointer">Adaptability</span>
                  <span class="tech-badge cursor-pointer">Flexibility</span>
                  <span class="tech-badge cursor-pointer">Time Management</span>
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-300 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 100ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-3 p-2">
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 300ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-2 p-2">
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 350ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    class="w-10 h-10"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 50ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-2 p-2">
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 250ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-2 p-2">
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
                    class="lucide lucide-lock w-10 h-10 text-purple-500"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 300ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-2 p-2">
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 400ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-2 p-1">
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
                    class="lucide lucide-git-merge w-10 h-10 text-purple-500"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 50ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-1 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 128 128"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-settings w-8 h-8 text-purple-500"
                  >
                    <path
                      fill="#0acf83"
                      d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                    ></path>
                    <path
                      fill="#a259ff"
                      d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                    ></path>
                    <path
                      fill="#f24e1e"
                      d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                    ></path>
                    <path
                      fill="#ff7262"
                      d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                    ></path>
                    <path
                      fill="#1abcfe"
                      d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                    ></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Figma</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 100ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-2 p-2">
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
                    class="lucide lucide-settings w-10 h-10 text-purple-500"
                  >
                    <path
                      fill="#001e36"
                      d="M22.667 1.6h82.666C117.867 1.6 128 11.733 128 24.267v79.466c0 12.534-10.133 22.667-22.667 22.667H22.667C10.133 126.4 0 116.267 0 103.733V24.267C0 11.733 10.133 1.6 22.667 1.6Z"
                    ></path>
                    <path
                      fill="#31a8ff"
                      d="M45.867 33.333c-1.6 0-3.2 0-4.853.054-1.654.053-3.201.053-4.641.107-1.44.053-2.773.053-4.053.106-1.227.053-2.08.053-2.987.053-.373 0-.533.213-.533.587v54.88c0 .48.213.694.64.694h10.347c.373-.054.64-.374.586-.747v-17.12c1.013 0 1.76 0 2.294.053.533.053 1.386.053 2.666.053 4.374 0 8.374-.48 12-1.813 3.467-1.28 6.454-3.52 8.587-6.507 2.133-2.986 3.2-6.773 3.2-11.36 0-2.4-.426-4.693-1.226-6.933A16.98 16.98 0 0 0 64 39.36a19.049 19.049 0 0 0-7.147-4.374c-2.987-1.12-6.613-1.653-10.986-1.653Zm1.19 10.505c1.9.036 3.75.368 5.476 1.068 1.547.587 2.827 1.654 3.734 3.04a8.779 8.779 0 0 1 1.227 4.748c0 2.346-.534 4.16-1.654 5.493-1.174 1.333-2.667 2.347-4.373 2.827-1.974.64-4.054.959-6.134.959h-2.827c-.64 0-1.332-.053-2.079-.106v-17.92c.373-.054 1.12-.107 2.187-.053 1.013-.054 2.239-.054 3.626-.054.273-.007.546-.008.817-.002zm44.73 2.723c-3.787 0-6.934.586-9.44 1.866-2.293 1.067-4.267 2.773-5.6 4.906-1.173 1.974-1.814 4.16-1.814 6.454a11.447 11.447 0 0 0 1.227 5.44 13.809 13.809 0 0 0 4.054 4.533 32.629 32.629 0 0 0 7.573 3.84c2.613 1.013 4.373 1.813 5.227 2.506.853.694 1.28 1.387 1.28 2.134 0 .96-.587 1.867-1.44 2.24-.96.48-2.4.747-4.427.747-2.133 0-4.267-.267-6.294-.8a22.834 22.834 0 0 1-6.613-2.613c-.16-.107-.32-.16-.48-.053-.16.106-.213.319-.213.479v9.28c-.053.427.213.8.587 1.013a21.49 21.49 0 0 0 5.44 1.707c2.4.48 4.799.693 7.252.693 3.84 0 7.041-.586 9.654-1.706 2.4-.96 4.48-2.613 5.973-4.747a12.41 12.41 0 0 0 2.08-7.093 11.512 11.512 0 0 0-1.226-5.493c-1.014-1.814-2.454-3.307-4.214-4.427a38.625 38.625 0 0 0-8.213-3.894 48.784 48.784 0 0 1-3.787-1.76c-.693-.373-1.333-.853-1.813-1.44-.32-.427-.533-.906-.533-1.386 0-.48.16-1.013.426-1.44.374-.533.96-.907 1.653-1.067 1.014-.266 2.134-.427 3.2-.374 2.027 0 4 .267 5.974.694 1.814.373 3.52.96 5.12 1.814.213.106.48.106.96 0a.656.656 0 0 0 .267-.534v-8.693c0-.214-.054-.427-.107-.64-.107-.213-.32-.427-.533-.48A18.762 18.762 0 0 0 98.4 47.04a45.98 45.98 0 0 0-6.613-.48z"
                    ></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Photoshop</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 150ms"
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
                    class="lucide lucide-settings w-10 h-10 text-purple-500"
                  >
                    <g fill="#00c4cc">
                      <path
                        d="M59.39.152c-.484.051-1.995.23-3.328.387-5.374.613-11.468 2.227-16.816 4.48C19.891 13.106 5.324 30.849 1.305 51.2.359 56.04.129 58.418.129 64c0 7.195.715 12.16 2.61 18.434 6.195 20.53 22.323 36.632 42.906 42.851 6.195 1.871 11.187 2.586 18.355 2.586 7.195 0 12.16-.715 18.434-2.61 20.53-6.195 36.632-22.323 42.851-42.906 1.871-6.195 2.586-11.187 2.586-18.355 0-3.047-.152-6.527-.332-7.809-2.074-14.796-8.168-27.238-18.328-37.402C99.07 8.703 86.68 2.586 72.19.512c-1.996-.282-11.238-.54-12.8-.36zm-20.863 40.32c1.36.41 1.996.794 2.918 1.715 1.793 1.82 2.203 2.817 2.203 5.555 0 2.051-.078 2.434-.691 3.508-1.18 1.996-3.918 3.84-5.812 3.89-1.333.028-1.278-.562.18-2.097 1.945-2.023 2.226-2.79 2.226-5.813-.024-2.917-.383-3.914-1.739-4.734-1.128-.691-2.355-.64-4.148.203-4.66 2.23-9.703 9.653-11.672 17.258-2.613 10.137 2.02 18.25 9.649 16.867 2.226-.41 6.425-2.558 8.246-4.25 1.508-1.379 1.508-1.406 1.66-3.12.336-3.587 2.867-7.169 6.25-8.833 1.558-.77 1.945-.844 4.043-.844 1.996 0 2.457.102 3.43.637 3.097 1.77 2.457 5.89-.895 5.89-1.945 0-2.945-1-1.535-1.534 1.383-.512.867-2.434-.742-2.868-1.895-.488-4.047.793-5.403 3.25-1.64 2.97-1.715 6.504-.156 8.114 1.512 1.613 3.406.336 4.867-3.329.766-1.867 1.867-2.867 3.149-2.867 1.125 0 1.332.692.843 2.793-.718 3.25-.23 4.094 1.793 3.098.664-.309 1.766-1.023 2.43-1.535l1.254-1 .848-4.43c.922-4.965 1.277-5.633 3.172-5.988 1.82-.336 2.23.562 1.562 3.402l-.36 1.59 1.333-1.36c3.148-3.226 7.015-4.812 8.347-3.48.715.715.637 1.613-.386 4.785-.485 1.512-1.153 3.895-1.457 5.25-.461 2.047-.489 2.535-.23 2.868.82.972 3.327-.028 5.554-2.204l1.305-1.277.156-2.844c.152-3.277.457-4.453 1.328-5.504.82-.972 2.305-1.687 3.098-1.484.793.207.793.973.078 3.227-1 3.097-.895 10.238.129 10.238.41 0 2.507-2.2 3.84-4.043l.996-1.36-.793-.816c-1.383-1.46-1.715-2.406-1.715-4.789 0-1.738.129-2.379.562-3.227.719-1.328 1.844-2.3 3.176-2.687 1.406-.434 3.148.281 3.863 1.562.719 1.305.54 4.223-.383 6.223l-.664 1.457h.895c1.23 0 1.715-.305 3.918-2.379 1.152-1.101 2.484-2.05 3.48-2.511 3.918-1.84 8.528-.895 9.293 1.921.64 2.254-.765 3.84-3.226 3.66-1.766-.128-2.098-.59-1.074-1.456 1.843-1.54 0-3.508-2.637-2.793-1.434.386-3.047 1.996-3.89 3.867-1.692 3.738-.794 8.14 1.636 8.14.973 0 2.691-1.921 3.355-3.789.793-2.152 2.457-3.507 3.711-3.02.692.255.743.946.309 3.122-.488 2.383-.563 4.61-.18 5.633.153.382.614 1.101 1.051 1.586.816.921.844 1.254.152 1.691-.332.23-.77.129-1.843-.46-1.485-.77-2.766-2.153-3.227-3.458l-.281-.766-1.024.766c-.59.41-1.511.871-2.047 1.023-2.125.563-4.738-.894-5.964-3.351-.489-.95-.641-3.738-.282-4.813.204-.59.204-.59-.617-.18-.433.231-1.355.485-2.07.563-1.18.13-1.36.258-2.535 1.742-1.664 2.07-4.61 4.864-5.813 5.454-2.558 1.277-3.402.918-4.07-1.72l-.461-1.765-1.102.973c-1.406 1.23-4.222 2.715-5.836 3.074-1.535.332-3.175-.156-3.84-1.18-.995-1.535-.663-4.785.922-9.164 1.176-3.25.333-3.3-2.636-.203-2.203 2.328-3.149 3.992-3.762 6.578-.64 2.688-1.41 3.66-3.148 4.07-1.051.231-1.54-.41-1.332-1.816l.152-1.129-.973.668c-1.383.946-3.125 1.817-4.328 2.149-1.203.332-2.789-.024-3.172-.692-.691-1.175-.691-1.175-1.765-.332-2.332 1.895-5.66 1.356-7.348-1.152l-.54-.793-1.687 1.562c-4.867 4.454-10.957 6.45-15.464 5.067-5.735-1.738-8.907-6.656-8.856-13.746.024-7.117 3.172-14.617 8.473-20.172 2.996-3.125 5.812-4.969 8.68-5.66 2.07-.512 3.328-.485 5.296.129zm0 0"
                      ></path>
                      <path
                        d="M90.418 58.676c-.563.562-.356 2.816.36 4.25.359.742.742 1.332.87 1.332.102 0 .332-.59.512-1.309.64-2.66-.512-5.504-1.742-4.273zm0 0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">Canva</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 200ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-1 p-2">
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
                    class="lucide lucide-settings w-10 h-10 text-purple-500"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#337BA2"
                      d="M43.257 121.233c.079 1.018.029 2.071.299 3.037.115.408.9.629 1.381.935l.625.401c-.235.137-.469.389-.707.392a165.82 165.82 0 01-5.598.002c-.248-.004-.491-.237-.735-.364.198-.143.388-.391.597-.408 1.251-.105 1.632-.865 1.626-1.989-.011-2.066-.006-4.134.003-6.202.005-1.152-.322-1.993-1.679-2.045-.188-.008-.366-.296-.548-.453.182-.111.366-.321.546-.318 2.39.029 4.79-.024 7.167.177 1.873.159 3.107 1.455 3.234 2.949.138 1.639-.703 2.764-2.605 3.486l-.729.272c1.225 1.158 2.31 2.29 3.516 3.272.535.437 1.293.697 1.989.817 1.393.238 2.149-.361 2.187-1.742.061-2.229.032-4.461.011-6.691-.01-1.022-.449-1.697-1.589-1.753-.215-.01-.42-.253-.629-.388.239-.14.478-.4.715-.399 2.432.02 4.875-.055 7.291.161 4.123.366 6.42 3.797 5.214 7.588-.735 2.312-2.495 3.619-4.759 3.773-3.958.27-7.938.215-11.909.243-.316.002-.706-.341-.944-.623-.914-1.085-1.776-2.213-2.668-3.316-.27-.334-.571-.641-.858-.961l-.444.147zm13.119-5.869c0 2.785-.034 5.484.036 8.18.011.414.41 1.039.78 1.187 1.457.581 3.812-.368 4.47-1.842.881-1.973.988-4.05-.203-5.922-1.175-1.847-3.132-1.663-5.083-1.603zm-13.021 4.561c1.262.032 2.653.313 3.192-1.073.302-.777.234-1.982-.183-2.69-.633-1.076-1.906-.888-3.01-.752l.001 4.515z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#515151"
                      d="M96.77 119.35c.834-.18 1.661-.154 2.198-.537.451-.32.563-1.116.908-1.886.199.357.386.539.39.724.025 1.38.03 2.761 0 4.141-.005.216-.226.427-.347.641-.136-.114-.339-.2-.399-.346-.733-1.771-.729-1.772-2.843-1.583.309 1.382-.763 3.149.89 4.058.843.463 2.203.371 3.189.068.841-.256 1.48-1.171 2.212-1.798v3.096c-.405.036-.712.086-1.021.086-4.141.006-8.282-.012-12.422.019-.714.006-1.197-.174-1.633-.773-.857-1.182-1.799-2.302-2.725-3.432-.232-.283-.534-.508-1.021-.962 0 1.154-.042 1.981.012 2.802.056.858.469 1.427 1.418 1.534.279.032.529.325.792.5-.271.105-.54.298-.812.303-1.827.026-3.653.025-5.48.001-.28-.004-.558-.173-.866-.275l.156-.303c2.244-.906 2.25-.906 2.248-3.508a343.88 343.88 0 00-.039-4.87c-.017-1.121-.321-2.01-1.689-2.058-.197-.007-.384-.287-.577-.441.226-.113.453-.325.678-.323 2.311.022 4.635-.054 6.93.16 2.512.234 4.065 2.329 3.132 4.257-.51 1.053-1.688 1.783-2.725 2.818.984.9 2.117 2.194 3.491 3.135 1.941 1.33 3.268.571 3.317-1.748.041-1.947-.007-3.896-.015-5.845-.004-1.155-.361-1.994-1.717-2.013-.185-.003-.367-.2-.586-.33.705-.52 7.499-.709 10.448-.332l.19 3.214-.333.136c-.686-.717-.601-2.199-2.02-2.204-1.084-.005-2.168-.119-3.332-.189.003 1.356.003 2.59.003 4.063zm-12.647.566c2.61.105 3.646-.603 3.584-2.364-.061-1.698-1.195-2.383-3.584-2.121v4.485z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#3179A1"
                      d="M11.555 120.682c.996-2.947 1.979-5.897 3.003-8.834.141-.404.486-.737.737-1.104.248.378.587.725.729 1.14.931 2.719 1.817 5.451 2.722 8.179.072.219.165.43.375.969.928-2.813 1.787-5.308 2.564-7.829.27-.873-.081-1.504-1.097-1.618-.335-.039-.66-.17-1.051-.274.676-.749 5.957-.804 6.827-.108-.236.112-.424.271-.618.279-1.65.064-2.414 1.097-2.884 2.521-1.258 3.81-2.54 7.611-3.817 11.415-.133.395-.3.778-.452 1.166l-.421.03-3.579-10.821-3.619 10.788-.354.022c-.185-.401-.412-.79-.547-1.207-1.167-3.581-2.319-7.167-3.474-10.751-.495-1.539-.99-3.069-3.012-3.167-.132-.006-.253-.229-.38-.35.158-.13.316-.373.476-.375 2.272-.024 4.546-.024 6.818.001.158.001.313.247.47.379-.169.126-.319.309-.508.367-1.82.55-1.951.761-1.378 2.526.723 2.233 1.468 4.457 2.204 6.686l.266-.03z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#4D4D4D"
                      d="M65.484 111.25c.279-.241.435-.494.587-.491 2.957.044 5.938-.093 8.864.247 2.768.321 4.301 2.919 3.466 5.359-.748 2.189-2.593 2.874-4.68 3.064-.881.081-1.776.013-2.824.013.093 1.453.14 2.78.275 4.098.113 1.114.863 1.56 1.923 1.65.239.021.457.288.684.442-.25.126-.498.36-.75.363-2.191.029-4.384.028-6.575.002-.263-.003-.523-.219-.784-.336.218-.165.432-.463.656-.472 1.463-.056 2.012-.964 2.03-2.235.044-3.081.04-6.162.002-9.243-.016-1.31-.649-2.148-2.072-2.206-.212-.008-.422-.13-.802-.255zm5.523 6.706c2.682.278 3.703.022 4.349-1.167.648-1.192.65-2.439-.116-3.566-1.059-1.559-2.679-1.098-4.233-1.154v5.887z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#3279A1"
                      d="M31.076 126.463c-2.396-.104-4.348-.856-5.794-2.647-2.053-2.542-1.741-5.994.711-8.192 2.645-2.37 7.018-2.472 9.733-.171 1.838 1.559 2.709 3.533 2.111 5.953-.675 2.73-2.601 4.192-5.218 4.856-.546.137-1.122.149-1.543.201zm4.544-6.249l-.224-.147c-.149-.709-.236-1.439-.458-2.125-.642-1.971-1.986-2.945-3.963-2.949-1.97-.004-3.295.975-3.939 2.967-.572 1.771-.498 3.526.383 5.18 1.315 2.468 4.829 2.931 6.549.736.802-1.023 1.116-2.43 1.652-3.662z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#505050"
                      d="M122.748 114.317l.893-.782v4.376l-.259.195c-.209-.295-.498-.562-.615-.891-.591-1.655-1.865-2.553-3.319-2.117-.499.149-1.099.649-1.232 1.11-.109.376.285 1.12.671 1.374 1.008.664 2.131 1.156 3.214 1.703 2.356 1.192 3.198 2.845 2.401 4.736-.809 1.921-3.263 2.915-5.462 2.173-.606-.206-1.167-.544-1.728-.811l-.857 1.126-.379-.116c0-1.477-.009-2.954.015-4.431.002-.143.215-.282.33-.423.18.218.448.41.527.66.523 1.656 1.53 2.756 3.325 2.94 1.023.105 2.023-.021 2.378-1.187.324-1.067-.42-1.669-1.219-2.124-.879-.5-1.808-.909-2.708-1.37-.395-.203-.798-.404-1.153-.665-1.257-.927-1.753-2.263-1.381-3.618.332-1.211 1.523-2.237 2.997-2.28 1.091-.031 2.195.25 3.561.422zm-16.269 11.027c-.166.33-.258.607-.429.821-.103.128-.356.25-.49.208-.127-.04-.262-.294-.265-.456-.021-1.299-.021-2.599.001-3.896.002-.159.178-.314.274-.471.184.117.446.193.537.362.169.314.208.696.356 1.024.668 1.482 2.021 2.409 3.573 2.184.649-.093 1.45-.586 1.772-1.138.434-.741-.086-1.504-.814-1.925-.979-.566-1.993-1.075-3.009-1.571-2.297-1.121-3.266-2.972-2.443-4.719.818-1.737 3.33-2.46 5.429-1.556.256.11.499.25.7.354l1.078-.886c.113.317.185.426.186.535.008 1.216.005 2.431.005 3.646l-.317.212c-.211-.27-.504-.509-.619-.814-.573-1.532-1.48-2.381-2.81-2.219-.624.075-1.419.504-1.726 1.018-.45.755.2 1.361.885 1.729.963.519 1.949.992 2.926 1.483 2.418 1.213 3.269 2.898 2.434 4.824-.813 1.876-3.346 2.847-5.517 2.077-.564-.199-1.087-.52-1.717-.826z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#494949"
                      d="M65.261 1.395C38.48.917 16.103 22.648 16.096 49c-.008 27.11 21.338 48.739 48.077 48.699 26.49-.039 47.932-21.587 47.932-48.167C112.104 23.384 90.76 1.85 65.261 1.395zm-1.148 93.887c-25.326.006-45.694-20.529-45.693-46.067.001-24.88 20.685-45.48 45.674-45.489 25.432-.008 45.695 20.654 45.687 46.587-.008 24.483-20.807 44.964-45.668 44.969zm24.395-59.347c-.994-1.638-2.216-3.227-2.778-5.013-.64-2.032-1.171-4.345-.832-6.382.576-3.454 3.225-5.169 6.812-5.497C72.086.83 41.248 7.349 29.885 27.138c4.374-.203 8.55-.468 12.729-.524.791-.011 2.1.657 2.286 1.277.416 1.385-.748 1.868-1.986 1.963-1.301.102-2.604.199-4.115.314l14.935 44.494c.359-.587.507-.752.572-.945 2.762-8.255 5.54-16.505 8.232-24.784.246-.755.124-1.755-.146-2.531-1.424-4.111-3.13-8.133-4.379-12.294-.855-2.849-1.988-4.692-5.355-4.362-.574.056-1.273-1.178-1.916-1.816.777-.463 1.548-1.316 2.332-1.328a659.24 659.24 0 0120.572.006c.786.013 1.557.889 2.335 1.364-.681.622-1.267 1.554-2.063 1.794-1.276.385-2.691.312-4.218.448l14.953 44.484c2.266-7.524 4.374-14.434 6.422-21.36 1.83-6.182.74-11.957-2.567-17.403zM52.719 88.149c-.092.267-.097.563-.168 1.007 8.458 2.344 16.75 2.175 25.24-.685l-12.968-35.52c-4.151 12.064-8.131 23.63-12.104 35.198zm-6.535-1.606L26.646 32.947c-8.814 17.217-2.109 43.486 19.538 53.596zm54.452-55.403c-.27 2.994-.082 6.327-.941 9.362-2.023 7.152-4.496 14.181-6.877 21.229-2.588 7.66-5.28 15.286-7.927 22.927 12.437-7.372 19.271-18.253 20.359-32.555.62-8.14-2.188-19.412-4.614-20.963z"
                    ></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">WordPress</h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 250ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-1">
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
                    class="lucide lucide-user w-10 h-10 text-purple-500"
                  >
                    <path
                      d="M86.758 70.89c-4.992 0-9.465 2.208-12.528 5.68l-7.851-5.547a21.275 21.275 0 001.312-7.32c0-2.531-.46-4.95-1.27-7.203l7.837-5.488c3.062 3.457 7.523 5.652 12.5 5.652 9.207 0 16.703-7.48 16.703-16.672 0-9.195-7.496-16.672-16.703-16.672-9.211 0-16.707 7.477-16.707 16.672 0 1.645.25 3.23.699 4.735l-7.84 5.488a21.578 21.578 0 00-13.36-7.746v-9.43c7.567-1.586 13.27-8.293 13.27-16.312C62.82 7.53 55.324.055 46.117.055c-9.21 0-16.707 7.476-16.707 16.672 0 7.91 5.555 14.539 12.969 16.238v9.547c-10.117 1.773-17.84 10.59-17.84 21.191 0 10.652 7.797 19.5 17.992 21.211V95c-7.492 1.64-13.12 8.309-13.12 16.273 0 9.196 7.495 16.672 16.706 16.672 9.207 0 16.703-7.476 16.703-16.672 0-7.964-5.629-14.632-13.117-16.273V84.914a21.592 21.592 0 0013.133-7.625l7.902 5.586a16.45 16.45 0 00-.687 4.688c0 9.195 7.496 16.671 16.707 16.671 9.207 0 16.703-7.476 16.703-16.671 0-9.196-7.496-16.672-16.703-16.672zm0-38.984c4.465 0 8.097 3.63 8.097 8.086 0 4.453-3.632 8.082-8.097 8.082-4.469 0-8.102-3.629-8.102-8.082 0-4.457 3.633-8.086 8.102-8.086zm-48.742-15.18c0-4.456 3.632-8.081 8.101-8.081 4.465 0 8.098 3.625 8.098 8.082 0 4.457-3.633 8.082-8.098 8.082-4.469 0-8.101-3.625-8.101-8.082zm16.199 94.547c0 4.457-3.633 8.082-8.098 8.082-4.469 0-8.101-3.625-8.101-8.082 0-4.457 3.632-8.082 8.101-8.082 4.465 0 8.098 3.625 8.098 8.082zm-8.102-36.296c-6.226 0-11.293-5.059-11.293-11.274 0-6.219 5.067-11.277 11.293-11.277 6.23 0 11.297 5.058 11.297 11.277 0 6.215-5.066 11.274-11.297 11.274zm40.645 20.668c-4.469 0-8.102-3.625-8.102-8.082 0-4.458 3.633-8.083 8.102-8.083 4.465 0 8.097 3.625 8.097 8.082 0 4.458-3.632 8.083-8.097 8.083zm0 0"
                      fill="#231f20"
                    ></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">
                  Project Management
                </h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
              style="transition-delay: 300ms"
            >
              <div
                class="p-4 flex flex-col items-center justify-center text-center"
              >
                <div class="mb-2 p-1">
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
                    class="lucide lucide-user w-10 h-10 text-purple-500"
                  >
                    <path
                      d="m125.571 39.926-58.5-39c-1.997-1.23-4.128-1.24-6.142 0l-58.5 39C.929 40.926 0 42.712 0 44.497v39c0 1.786.929 3.572 2.429 4.571l58.5 39.006c1.996 1.229 4.128 1.24 6.142 0l58.5-39.006c1.5-.999 2.429-2.785 2.429-4.57v-39c0-1.786-.929-3.572-2.429-4.572zm-56.07-24.144 43.07 28.715-19.214 12.858L69.5 41.425V15.784zm-11.001 0v25.644L34.642 57.354 15.428 44.498 58.5 15.782zm-47.5 39 13.786 9.215L11 73.212v-18.43zm47.5 57.43L15.428 83.497 34.642 70.64 58.5 86.569v25.643zM64 76.997l-19.428-13 19.428-13 19.428 13-19.428 13zm5.5 35.215V86.569L93.357 70.64l19.214 12.857-43.07 28.715zm47.5-39-13.786-9.215L117 54.783v18.429z"
                    ></path>
                  </svg>
                </div>
                <h3 class="font-medium text-sm sm:text-base">
                  Team Working & Problem Solving
                </h3>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-lg shadow-cyan-500/50 overflow-hidden transition-all duration-700 card-hover hover:bg-cyan-500/50 opacity-100 translate-y-0 cursor-pointer"
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
                    viewBox="0 0 128 128"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-user w-10 h-10 text-purple-500"
                  >
                    <linearGradient
                      id="a"
                      x1="45.842"
                      x2="45.842"
                      y1="89.57"
                      y2="8.802"
                      gradientTransform="translate(-2.405 27.316) scale(1.4463)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fcee1f"></stop>
                      <stop offset="1" stop-color="#f15b2a"></stop>
                    </linearGradient>
                    <path
                      fill="url(#a)"
                      d="M69.162 0c-9.91 6.4-11.77 14.865-11.77 14.865s.002.206-.101.412c-.62.104-1.033.31-1.549.413-.722.206-1.445.413-2.168.826l-2.168.93c-1.445.722-2.89 1.341-4.336 2.167-1.342.826-2.683 1.548-4.025 2.477a1.266 1.266 0 0 1-.309-.205c-13.316-5.161-25.084 1.031-25.084 1.031-1.032 14.245 5.367 23.02 6.606 24.672-.31.929-.62 1.754-.93 2.58a52.973 52.973 0 0 0-2.166 9.91c-.103.413-.104 1.033-.207 1.445C8.671 67.613 5.06 80.103 5.06 80.103c10.219 11.768 22.193 12.49 22.193 12.49 1.445 2.685 3.302 5.369 5.264 7.743.825 1.032 1.756 1.96 2.582 2.992-3.716 10.632.619 19.613.619 19.613 11.458.413 18.992-4.955 20.54-6.297 1.136.31 2.272.724 3.407 1.034a47.25 47.25 0 0 0 10.633 1.549h4.644C80.31 126.969 89.807 128 89.807 128c6.71-7.123 7.123-14.038 7.123-15.69v-.62c1.342-1.033 2.683-2.064 4.129-3.2 2.684-2.374 4.955-5.264 7.02-8.154.206-.207.309-.62.618-.826 7.639.413 12.903-4.748 12.903-4.748-1.24-7.949-5.78-11.768-6.71-12.49l-.103-.104-.103-.104-.104-.103c0-.413.104-.93.104-1.445.103-.93.103-1.755.103-2.58v-3.407c0-.206 0-.413-.103-.722l-.104-.723-.103-.723c-.104-.929-.31-1.754-.413-2.58-.825-3.406-2.166-6.71-3.818-9.498-1.858-2.993-4.026-5.471-6.504-7.742-2.477-2.168-5.264-4.025-8.154-5.264-2.994-1.342-5.884-2.167-8.98-2.476-1.446-.207-3.098-.207-4.544-.207H79.69c-.825.103-1.546.205-2.27.308-3.096.62-5.883 1.756-8.36 3.201-2.478 1.446-4.646 3.407-6.504 5.575-1.858 2.167-3.2 4.438-4.13 6.916a23.313 23.313 0 0 0-1.548 7.431v2.684c0 .31 0 .62.104.93.103 1.238.31 2.374.722 3.51.723 2.27 1.756 4.334 3.098 6.09a19.973 19.973 0 0 0 4.54 4.335c1.756 1.136 3.408 1.96 5.266 2.477 1.858.516 3.509.826 5.16.722h2.376c.206 0 .412-.101.619-.101.206 0 .31-.104.619-.104.31-.103.825-.207 1.135-.31.722-.207 1.342-.62 2.064-.826.723-.31 1.24-.722 1.756-1.032.103-.103.309-.207.412-.31.62-.413.723-1.238.207-1.858-.413-.413-1.136-.62-1.756-.31-.103.103-.205.104-.412.207-.413.206-1.032.413-1.445.619-.62.103-1.135.31-1.754.414-.31 0-.62.102-.93.102h-2.58c-.103 0-.31.001-.414-.102-1.239-.206-2.58-.62-3.818-1.137-1.239-.619-2.478-1.34-3.51-2.373a15.894 15.894 0 0 1-2.89-3.51c-.826-1.341-1.24-2.89-1.446-4.335-.103-.826-.207-1.55-.103-2.375v-1.239c0-.413.103-.825.207-1.238.619-3.406 2.27-6.71 4.851-9.187.723-.723 1.342-1.238 2.168-1.754.826-.62 1.547-1.032 2.373-1.342.826-.31 1.756-.723 2.582-.93.93-.206 1.858-.414 2.684-.414.413 0 .929-.101 1.342-.101h1.238c1.032.103 2.065.205 2.994.412 1.961.413 3.82 1.135 5.678 2.168 3.613 2.064 6.708 5.16 8.566 8.877.93 1.858 1.548 3.82 1.961 5.988.103.62.104 1.03.207 1.547v2.787c0 .62-.103 1.136-.103 1.756-.104.62-.102 1.134-.205 1.754-.104.619-.208 1.136-.311 1.755-.206 1.136-.722 2.168-1.031 3.303-.826 2.168-1.963 4.232-3.305 5.986-2.684 3.717-6.502 6.815-10.63 8.776-2.169.929-4.337 1.755-6.608 2.064a19.003 19.003 0 0 1-3.407.309h-1.755c-.62 0-1.238.002-1.858-.102-2.477-.206-4.85-.724-7.224-1.343-2.375-.723-4.647-1.548-6.815-2.684-4.335-2.27-8.153-5.573-11.25-9.289-1.445-1.961-2.892-4.027-4.027-6.092-1.136-2.064-1.961-4.438-2.58-6.709-.723-2.27-1.032-4.645-1.135-7.02v-3.613c0-1.135.102-2.372.309-3.61.103-1.24.309-2.376.619-3.614.206-1.239.62-2.375.93-3.614.722-2.374 1.444-4.644 2.476-6.812 2.064-4.335 4.645-8.155 7.742-11.252a24.86 24.86 0 0 1 2.479-2.168c.31-.31 1.135-1.033 2.064-1.549s1.858-1.136 2.89-1.549c.414-.206.93-.413 1.446-.722.206-.103.411-.206.824-.309.207-.103.414-.207.826-.31 1.033-.413 2.066-.825 3.098-1.135.207-.103.62-.104.826-.207.207-.103.618-.102.824-.205.62-.103 1.033-.208 1.55-.414.206-.104.619-.104.825-.207.207 0 .62-.102.827-.102.206 0 .62-.103.826-.103l.412-.104.412-.103c.206 0 .62-.104.826-.104.31 0 .62-.104.93-.104.206 0 .721-.101.928-.101.206 0 .311 0 .62-.104h.723c.31 0 .618 0 .928-.103h4.647c2.064.103 4.128.31 5.986.723 3.82.722 7.638 1.961 10.941 3.613 3.304 1.548 6.4 3.611 8.877 5.78.104.102.311.207.414.413.104.103.31.206.412.412.31.207.62.62.93.826.31.207.62.62.93.827.206.31.618.618.824.927 1.136 1.136 2.169 2.375 3.098 3.51a41.422 41.422 0 0 1 4.44 7.02c.102.103.1.207.204.414.103.103.104.205.207.412.103.206.206.62.412.826.104.206.208.62.31.826.104.207.208.62.311.826.413 1.033.826 2.064 1.135 3.096.62 1.548.929 2.993 1.239 4.13.103.412.62.825 1.033.825.619 0 .927-.414.927-1.033-.31-1.755-.308-3.198-.412-4.953-.206-2.168-.619-4.647-1.238-7.434-.62-2.787-1.86-5.677-3.305-8.877-1.548-3.096-3.509-6.4-6.09-9.394-1.032-1.239-2.167-2.373-3.302-3.612 1.858-7.122-2.168-13.42-2.168-13.42-6.916-.412-11.253 2.168-12.801 3.303-.206-.103-.618-.205-.824-.308-1.136-.413-2.375-.93-3.613-1.342-1.24-.31-2.478-.827-3.717-1.033-1.239-.31-2.58-.62-4.026-.827-.206 0-.413-.103-.722-.103C77.833 4.128 69.162 0 69.162 0z"
                    ></path>
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
    <section id="my-recent-project" class="relative">
      <!-- Section Heading -->
      <h2
        class="text-3xl md:text-4xl font-extrabold text-center mb-14 text-white tracking-wide"
      >
        My
        <span
          class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          Projects
        </span>
      </h2>

      <!-- Slider -->
      <div
        class="relative overflow-hidden max-w-7xl mx-auto px-4 md:px-8"
        ref="sliderContainer"
      >
        <div
          class="flex gap-8 transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <!-- Card -->
          <div
            v-for="(project, i) in projects"
            :key="i"
            class="min-w-full sm:min-w-[50%] lg:min-w-[33.33%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center shadow-lg transition transform hover:-translate-y-3 hover:shadow-2xl hover:border-purple-400/40"
          >
            <!-- Image -->
            <div
              class="mb-5 h-52 overflow-hidden rounded-xl border border-white/10"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover hover:scale-110 transition duration-500"
                loading="lazy"
              />
            </div>

            <!-- Title -->
            <h3
              class="text-2xl font-semibold text-white mb-4 relative inline-block"
            >
              {{ project.title }}
              <span
                class="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"
              ></span>
            </h3>

            <!-- Button -->
            <div class="flex justify-center mt-4">
              <a
                :href="project.live"
                target="_blank"
                class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:from-pink-500 hover:to-purple-500 transition duration-300"
              >
                🚀 Live view
              </a>
            </div>
          </div>
        </div>

        <!-- Prev -->
        <button
          @click="prevSlide"
          class="absolute left-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-black border-1px border-black flex items-center justify-center shadow hover:scale-110 transition"
        >
          ❮
        </button>

        <!-- Next -->
        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-black flex items-center justify-center shadow hover:scale-110 transition"
        >
          ❯
        </button>
      </div>

      <!-- Dots -->
      <div class="flex justify-center gap-3 mt-6">
        <span
          v-for="(dot, i) in totalSlides"
          :key="i"
          class="w-3 h-3 rounded-full cursor-pointer transition-all duration-300"
          :class="
            i === currentSlide
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
              : 'bg-white/50 hover:bg-white/80'
          "
          @click="goToSlide(i)"
        ></span>
      </div>
    </section>
    <!-- my project section end -->

    <!-- Contact section start -->
    <section
      id="contact-me"
      class="min-h-screen flex items-center justify-center px-4 mb-8 mt-8"
    >
      <div class="w-full max-w-3xl">
        <!-- Heading -->
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Contact
            <span
              class="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
              >Me</span
            >
          </h2>
        </div>

        <!-- Form Card -->
        <div
          class="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 shadow-lg shadow-cyan-500/20 backdrop-blur-md transition-all duration-500 hover:shadow-pink-500/30"
        >
          <div class="p-8 md:p-10">
            <h3 class="text-2xl font-bold mb-8 text-center">
              Send me a message
            </h3>
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
                    class="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:ring-offset-1 focus:ring-offset-black/20 transition"
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
                    class="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:ring-offset-1 focus:ring-offset-black/20 transition"
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
                  class="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:ring-offset-1 focus:ring-offset-black/20 transition"
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
                  class="w-full min-h-[150px] rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:ring-offset-1 focus:ring-offset-black/20 transition"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full py-3 rounded-full text-white font-semibold text-base transition duration-300 hover:scale-[1.02] hover:shadow-lg"
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
    </section>

    <!-- contact section end -->

    <!-- footer section start -->
    <footer class="py-10 mt-12">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <!-- Back to Top Button -->
        <div class="flex justify-center mb-8">
          <a
            href="#intro"
            class="inline-flex items-center justify-center h-12 w-12 rounded-full border border-purple-500 bg-background text-muted-foreground hover:bg-purple-500 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 shadow-sm hover:shadow-lg"
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
        <!-- Social Links -->
        <div id="footer" class="flex justify-center gap-12 mt-6">
          <!-- GitHub -->
          <a
            href="https://github.com/mahmudul7608"
            target="_blank"
            class="text-muted-foreground hover:text-purple-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 
          0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 
          1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 
          0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.004-.404 
          11.48 11.48 0 0 1 3.003.404c2.293-1.552 3.3-1.23 3.3-1.23.655 1.653.243 2.873.119 3.176.77.84 
          1.235 1.91 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.103.823 2.222 
          0 1.606-.014 2.898-.014 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12 
          c0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span class="sr-only">GitHub</span>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/dev-mahmudul-hasan/"
            target="_blank"
            class="text-muted-foreground hover:text-purple-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 
          5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 
          19h-3v-10h3v10zm-1.5-11.268c-.966 
          0-1.75-.79-1.75-1.764s.784-1.764 
          1.75-1.764 1.75.79 
          1.75 1.764-.784 1.764-1.75 1.764zm13.5 
          11.268h-3v-5.604c0-1.337-.027-3.063-1.868-3.063-1.87 
          0-2.156 1.46-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 
          1.379-1.562 2.84-1.562 3.039 0 3.602 2.002 
          3.602 4.604v5.591z"
              />
            </svg>
            <span class="sr-only">LinkedIn</span>
          </a>

          <!-- Email -->
          <a
            href="mailto:dev.mahmudulhasan2@gmail.com"
            class="text-muted-foreground hover:text-purple-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 4H4C2.897 4 2.01 4.897 
          2.01 6L2 18c0 1.103.897 2 2 2h16c1.104 
          0 2-.897 2-2V6c0-1.103-.896-2-2-2zm0 
          4-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            <span class="sr-only">Email</span>
          </a>
        </div>

        <!-- Profile view count -->

       <div class="flex justify-center items-center pt-4">
  <div
    class="flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-xl shadow-md px-6 py-2"
  >
    <a
      href="https://komarev.com/ghpvc/?username=mahmudul7608-portfolio0&label=👀%20Portfolio%20Views&color=0e75b6&style=flat-square"
      target="_blank"
    >
      <img
        src="https://komarev.com/ghpvc/?username=mahmudul7608-portfolio0&label=👀%20Portfolio%20Views&color=0e75b6&style=flat-square"
        alt="Portfolio Views"
        class="rounded-lg"
        height="30"
        width="150"
      />
    </a>
  </div>
</div>


        <!-- Copyright -->
        <p class="mt-6 text-xs text-muted-foreground">
          © 2025 <span class="font-semibold">Mahmudul Hasan.</span> All Rights
          Reserved.
        </p>
      </div>
    </footer>

    <!-- footer section end -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

// Scroll progress bar
const scrollProgress = ref(0);
const updateScroll = () => {
  if (process.client) {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    scrollProgress.value = (scrollTop / docHeight) * 100;
  }
};
onMounted(() => window.addEventListener("scroll", updateScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", updateScroll));

// Mobile menu state
const isOpen = ref(false);

// Navbar items
const navItems = [
  { href: "#intro", label: "Home", icon: "🏠" },
  { href: "#about", label: "About", icon: "👤" },
  { href: "#skills", label: "Skills", icon: "💡" },
  { href: "#tools-i-use", label: "Tools", icon: "🛠" },
  { href: "#my-recent-project", label: "Projects", icon: "📂" },
  { href: "#contact-me", label: "Contact", icon: "✉" },
  { href: "#footer", label: "Footer", icon: "⬇" },
];

// Projects slider
const projects = ref([
  {
    title: "Mh-Ai-Powered-Design",
    image: "/image/MH-Ai-powered.png",
    live: "https://mh-ai-powered-design.netlify.app/",
  },
  {
    title: "Personal website",
    image: "/image/MH-personal.png",
    live: "https://mh-portfolio01.netlify.app/",
  },
  {
    title: "Salad Recipe Project",
    image: "/image/MH-salad.png",
    live: "https://salad-section-hotel-sector.netlify.app/",
  },
  {
    title: "Practice API Project",
    image: "/image/MH-imageSRC-1.png",
    live: "https://image-search-website2.netlify.app/",
  },
  {
    title: "Meal Finder",
    image: "/image/MH-food.png",
    live: "https://meal-count.netlify.app/",
  },
  {
    title: "Login Form UI",
    image: "/image/MH-signin-6.png",
    live: "https://animation-login-and-sign-in.netlify.app/",
  },
  {
    title: "Intelligent-business",
    image: "/image/MH-5.png",
    live: "https://intelligent-buisness.netlify.app/",
  },
  {
    title: "Mullokoto App",
    image: "/image/MH-mullokoto-4.png",
    live: "https://mullo-koto-template.netlify.app/",
  },
]);

// Responsive slider fix
const windowWidth = ref(1024); // default safe value
const currentSlide = ref(0);

const handleResize = () => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
    currentSlide.value = 0; // reset slide on resize
  }
};

onMounted(() => {
  // first set width safely
  if (process.client) {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", handleResize);
  }
});
onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener("resize", handleResize);
  }
});

// cards per view logic
const cardsPerView = computed(() => {
  if (windowWidth.value <= 640) return 1;
  if (windowWidth.value <= 1024) return 2;
  return 3;
});

const totalSlides = computed(() =>
  Math.ceil(projects.value.length / cardsPerView.value)
);

const sliderContainer = ref(null);

function nextSlide() {
  currentSlide.value =
    currentSlide.value >= totalSlides.value - 1 ? 0 : currentSlide.value + 1;
}
function prevSlide() {
  currentSlide.value =
    currentSlide.value <= 0 ? totalSlides.value - 1 : currentSlide.value - 1;
}
function goToSlide(index) {
  currentSlide.value = index;
}

// Auto slide
let autoSlide;
onMounted(() => {
  autoSlide = setInterval(() => nextSlide(), 5000);

  if (sliderContainer.value) {
    sliderContainer.value.addEventListener("mouseenter", () =>
      clearInterval(autoSlide)
    );
    sliderContainer.value.addEventListener("mouseleave", () => {
      autoSlide = setInterval(() => nextSlide(), 5000);
    });
  }
});
onBeforeUnmount(() => {
  clearInterval(autoSlide);
});
</script>

<style scoped>
/* fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
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

/* Galaxy Starfield Background */
.galaxy-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at bottom, #173554, #000);
  z-index: -1;
  overflow: hidden;
}

/* star layers */
.galaxy-bg::before,
.galaxy-bg::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 300%;
  height: 300%;
  background-repeat: repeat;
  background-position: center;
  animation: moveStars 100s linear infinite;
}

/* Mixed small + medium stars */
.galaxy-bg::before {
  background-image: radial-gradient(1px 1px at 20px 30px, white, transparent),
    radial-gradient(1px 1px at 20px 30px, white, transparent),
    radial-gradient(1px 1px at 20px 30px, white, transparent),
    radial-gradient(2px 2px at 80px 120px, #9ae6ff, transparent),
    radial-gradient(2px 2px at 80px 120px, #9ae6ff, transparent),
    radial-gradient(1.5px 1.5px at 130px 80px, #ffd6ff, transparent),
    radial-gradient(2.5px 2.5px at 200px 150px, #ffe066, transparent),
    radial-gradient(2.5px 2.5px at 200px 150px, #ffe066, transparent),
    radial-gradient(2.5px 2.5px at 200px 150px, #ffe066, transparent),
    radial-gradient(3px 3px at 300px 250px, white, transparent),
    radial-gradient(2px 2px at 400px 350px, #ffcccc, transparent),
    radial-gradient(1.2px 1.2px at 500px 200px, #aaffff, transparent),
    radial-gradient(2.5px 2.5px at 600px 400px, #fff, transparent),
    radial-gradient(1px 1px at 700px 450px, #ffd6ff, transparent),
    radial-gradient(3.5px 3.5px at 850px 600px, #9ae6ff, transparent);
  background-size: 400px 400px;
  opacity: 0.9;
}

/* Big glowing stars + blue haze */
.galaxy-bg::after {
  background-image: radial-gradient(
      4px 4px at 100px 200px,
      #ff80ed,
      transparent
    ),
    radial-gradient(3px 3px at 250px 100px, #80edff, transparent),
    radial-gradient(2px 2px at 400px 300px, white, transparent),
    radial-gradient(3.5px 3.5px at 550px 350px, #b3ff66, transparent),
    radial-gradient(5px 5px at 700px 500px, #ffb366, transparent),
    radial-gradient(3.5px 3.5px at 900px 650px, #fff, transparent),
    /* blue nebula glow */
      radial-gradient(
        800px 800px at 50% 50%,
        rgba(0, 119, 255, 0.1),
        transparent
      );
  background-size: 800px 800px;
  opacity: 0.7;
  animation-duration: 200s;
}

@keyframes moveStars {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-1000px);
  }
}
</style>
