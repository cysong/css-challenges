<template>
  <h1>Typing animation by Lea Verou.</h1>
</template>
<style scoped>
/**
 * Typing animation with pure CSS.
 * Works best in browsers supporting the ch unit.
 */

@keyframes typing { from { width: 0; } }
@keyframes blink-caret { 50% { border-color: transparent; } }

h1 {
  font: bold 200% Consolas, Monaco, monospace;
  border-right: .1em solid;
  width: 16.5em; /* fallback */
  width: 30ch; /* # of chars */
  margin: 2em 1em;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 15s steps(30, end), /* # of steps = # of chars */
  blink-caret .5s step-end infinite alternate;
}
</style>