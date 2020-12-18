// Layouts-Viewports auf der Konsole ausgeben

const result = function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
};
const ergebnis = `Die Viewport-Breite beträgt: ${result()} Pixel.`;
console.log(ergebnis);