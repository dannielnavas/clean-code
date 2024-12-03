// DRY Don't  Repeat Yourself

// No te repitas

// ❌ código que se repite

const juanAverage = (90 + 50 + 70) / 3;
const mariaAverage = (80 + 90 + 100) / 3;
const pedroAverage = (100 + 90 + 80) / 3;

// ✅ código refactorizado DRY

function getAverage(...grades) {
  return grades.reduce((a, b) => a + b) / grades.length;
}

const juanAverage2 = getAverage(90, 50, 70);
const mariaAverage2 = getAverage(80, 90, 100);
const pedroAverage2 = getAverage(100, 90, 80);
