// Pamoka 2 – Intervalų sankirtos tikrinimas

const a = -5;
const b = 0;
const c = -4;
const d = 4;

const x = Math.max(a, c);
const y = Math.min(b, d);

if (x <= y) {
  console.log("Sankirta yra nuo", x, "iki", y);
} else {
  console.log("Sankirtos nėra");
}
