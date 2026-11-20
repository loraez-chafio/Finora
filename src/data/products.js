export const categories = [
  'Fish',
  'Turtles',
  'Aquarium animals',
  'Food',
  'Tanks',
  'Accessories',
  'Maintenance',
];

// To use a real photo, add a line like this to a product:
//   image: '/images/products/betta.jpg'
// (put the file in public/images/products/)
// Products without an image keep their drawing.
export const products = [
  { id: 'betta', name: 'Betta Splendens', category: 'Fish', price: 12 },
  { id: 'neon-tetra', name: 'Neon Tetra (6 pack)', category: 'Fish', price: 15 },
  { id: 'turtle-hatchling', name: 'Red-Eared Slider Hatchling', category: 'Turtles', price: 35 },
  { id: 'basking-dock', name: 'Turtle Basking Dock', category: 'Turtles', price: 22 },
  { id: 'cherry-shrimp', name: 'Cherry Shrimp (6 pack)', category: 'Aquarium animals', price: 18 },
  { id: 'nerite-snail', name: 'Nerite Snail', category: 'Aquarium animals', price: 5 },
  { id: 'tropical-flakes', name: 'Premium Tropical Flakes', category: 'Food', price: 9.5 },
  { id: 'bloodworms', name: 'Frozen Bloodworms', category: 'Food', price: 7 },
  { id: 'tank-20', name: '20-Gallon Starter Tank Kit', category: 'Tanks', price: 129 },
  { id: 'tank-55', name: '55-Gallon Tank', category: 'Tanks', price: 249 },
  { id: 'plant-bundle', name: 'Live Plant Bundle', category: 'Accessories', price: 24 },
  { id: 'led-light', name: 'LED Aquarium Light', category: 'Accessories', price: 39 },
  { id: 'conditioner', name: 'Water Conditioner 500 ml', category: 'Maintenance', price: 11 },
  { id: 'test-kit', name: 'Liquid Test Kit', category: 'Maintenance', price: 28 },
];