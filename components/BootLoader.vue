<template>
  <div
    v-if="show"
    class="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-950 via-black to-gray-900 flex flex-col items-center justify-center font-mono boot-loader overflow-hidden"
  >
    <!-- Animated background grid -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 w-full max-w-4xl px-4">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.3em] mb-3 text-gradient">
          FRONTEND NEXUS
        </h1>
        <p class="text-cyan-400 text-sm sm:text-base tracking-[0.2em] font-light">
          UI Engineering Command Interface
        </p>
      </div>

      <!-- Terminal Box -->
      <div class="terminal-box mb-8">
        <div class="terminal-header">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span class="text-xs text-gray-500">system.boot.log</span>
        </div>
        
        <div class="terminal-content">
          <div 
            v-for="(line, index) in visibleLines" 
            :key="index" 
            class="terminal-line"
          >
            <span class="text-cyan-500 font-bold">[SYSTEM]</span>
            <span class="text-white ml-2">{{ line }}</span>
          </div>
          <div v-if="visibleLines.length > 0" class="cursor-blink"></div>
        </div>
      </div>

      <!-- Progress Section -->
      <div class="w-full">
        <!-- Progress Bar -->
        <div class="relative h-3 bg-gray-900 rounded-full overflow-hidden border border-cyan-900/50 shadow-lg mb-3">
          <div 
            class="progress-bar h-full rounded-full transition-all duration-300 ease-out"
            :style="{ width: progress + '%' }"
          >
            <div class="progress-shine"></div>
          </div>
        </div>

        <!-- Status Text -->
        <div class="flex justify-between items-center text-xs sm:text-sm font-semibold">
          <span class="text-cyan-400 tracking-wider">
            BOOT SEQUENCE: <span class="text-white">{{ progress }}%</span>
          </span>
          <span 
            class="text-cyan-400 tracking-wider transition-all duration-300"
            :class="{ 'text-green-400 animate-pulse': progress === 100 }"
          >
            {{ progress === 100 ? 'COMPLETE' : 'LOADING...' }}
          </span>
        </div>
      </div>
    </div>

    <!-- Corner Accents -->
    <div class="corner-accent top-left"></div>
    <div class="corner-accent top-right"></div>
    <div class="corner-accent bottom-left"></div>
    <div class="corner-accent bottom-right"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const show = ref(true);
const progress = ref(0);

const lines = [
  "Initializing Vue.js framework...",
  "Loading Nuxt.js application...",
  "Compiling Tailwind CSS...",
  "Mounting components & layouts...",
  "Establishing API connections...",
  "Optimizing JavaScript bundles...",
  "Rendering HTML structure...",
  "Loading portfolio assets...",
  "System ready. Welcome!",
];

const visibleLines = ref([]);

const emit = defineEmits(['boot-complete']);

onMounted(() => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < lines.length) {
      visibleLines.value.push(lines[i]);
      i++;
      progress.value = Math.round((i / lines.length) * 100);
    } else {
      clearInterval(interval);

      setTimeout(() => {
        show.value = false;
        emit('boot-complete');
        document.body.style.overflow = "auto";
      }, 500);
    }
  }, 120);

  // Prevent scrolling during boot
  document.body.style.overflow = "hidden";
});
</script>

<style scoped>
.boot-loader {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Text gradient animation */
.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #06b6d4 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Grid pattern background */
.grid-pattern {
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Terminal Box */
.terminal-box {
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(6, 182, 212, 0.3);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.2), 
              inset 0 0 30px rgba(6, 182, 212, 0.05);
}

.terminal-header {
  background: rgba(15, 23, 42, 0.8);
  border-bottom: 1px solid rgba(6, 182, 212, 0.2);
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.terminal-content {
  padding: 20px;
  min-height: 240px;
  max-height: 260px;
  overflow-y: auto;
  font-size: 0.875rem;
  line-height: 1.8;
}

@media (max-width: 640px) {
  .terminal-content {
    font-size: 0.75rem;
    padding: 16px;
  }
}

.terminal-line {
  margin-bottom: 4px;
  animation: lineAppear 0.3s ease-out;
}

@keyframes lineAppear {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Cursor blink */
.cursor-blink {
  display: inline-block;
  width: 8px;
  height: 16px;
  background: #06b6d4;
  margin-left: 4px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* Progress Bar */
.progress-bar {
  background: linear-gradient(90deg, #0ea5e9 0%, #06b6d4 50%, #3b82f6 100%);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.6),
              inset 0 0 10px rgba(255, 255, 255, 0.3);
  position: relative;
}

.progress-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.3) 50%, 
    transparent 100%);
  animation: shine 2s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}

/* Corner Accents */
.corner-accent {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(6, 182, 212, 0.3);
}

.corner-accent.top-left {
  top: 20px;
  left: 20px;
  border-right: none;
  border-bottom: none;
}

.corner-accent.top-right {
  top: 20px;
  right: 20px;
  border-left: none;
  border-bottom: none;
}

.corner-accent.bottom-left {
  bottom: 20px;
  left: 20px;
  border-right: none;
  border-top: none;
}

.corner-accent.bottom-right {
  bottom: 20px;
  right: 20px;
  border-left: none;
  border-top: none;
}

/* Scrollbar styling for terminal */
.terminal-content::-webkit-scrollbar {
  width: 6px;
}

.terminal-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
}

.terminal-content::-webkit-scrollbar-thumb {
  background: rgba(6, 182, 212, 0.5);
  border-radius: 3px;
}

.terminal-content::-webkit-scrollbar-thumb:hover {
  background: rgba(6, 182, 212, 0.7);
}
</style>
