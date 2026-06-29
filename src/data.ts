import { Category, FoodItem, Chef, Testimonial, Offer, NewsItem } from "./types";
// @ts-ignore
import team1 from "./assets/team-1.webp";
// @ts-ignore
import team2 from "./assets/team-2.webp";
// @ts-ignore
import team3 from "./assets/team-3.webp";
// @ts-ignore
import team4 from "./assets/team-4.webp";

// @ts-ignore
import gallery1 from "./assets/gallery-1.webp";
// @ts-ignore
import gallery2 from "./assets/gallery-2.webp";
// @ts-ignore
import gallery3 from "./assets/gallery-3.webp";
// @ts-ignore
import gallery4 from "./assets/gallery-4.webp";
// @ts-ignore
import gallery5 from "./assets/gallery-5.webp";
// @ts-ignore
import gallery6 from "./assets/gallery-6.webp";

// @ts-ignore
import news1 from "./assets/news-1.webp";
// @ts-ignore
import news2 from "./assets/news-2.webp";
// @ts-ignore
import news3 from "./assets/news-3.webp";

// @ts-ignore
import offer1 from "./assets/offer-1.webp";
// @ts-ignore
import offer2 from "./assets/offer-2.webp";
// @ts-ignore
import offer3 from "./assets/offer-3.webp";

// @ts-ignore
import review1 from "./assets/review-1.webp";
// @ts-ignore
import review2 from "./assets/review-2.webp";
// @ts-ignore
import review3 from "./assets/review-3.webp";

export const categories: Category[] = [
  { id: "burger", name: "Burgers", icon: "🍔", count: 12 },
  { id: "pizza", name: "Pizzas", icon: "🍕", count: 18 },
  { id: "pasta", name: "Pâtes", icon: "🍝", count: 14 },
  { id: "salad", name: "Salades", icon: "🥗", count: 10 },
  { id: "dessert", name: "Desserts", icon: "🍰", count: 8 },
  { id: "drinks", name: "Boissons", icon: "🍹", count: 15 },
];

export const foodItems: FoodItem[] = [
  // Burger Category
  {
    id: "burger-1",
    name: "Burger Fromager Classique",
    description: "Steak haché de bœuf de qualité supérieure, cheddar fondu, laitue fraîche, tomate et notre sauce maison secrète.",
    price: 14.90,
    rating: 4.6,
    category: "burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "burger-2",
    name: "Burger Truffes et Champignons",
    description: "Poêlée de champignons sauvages, fromage suisse fondant et aïoli onctueux à la truffe blanche.",
    price: 18.90,
    rating: 4.9,
    category: "burger",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "burger-3",
    name: "Burger Avocat et Bacon",
    description: "Bacon fumé croustillant, avocat frais de saison, fromage pepper jack et mayonnaise épicée au chipotle.",
    price: 17.50,
    rating: 4.8,
    category: "burger",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "burger-4",
    name: "Burger Gourmand",
    description: "Bifteck de bœuf maturé de race, cheddar de caractère doublement fondu, confit d'oignons maison et frites fraîches.",
    price: 16.90,
    rating: 4.7,
    category: "burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500",
  },

  // Pizza Category
  {
    id: "pizza-1",
    name: "Pizza Margherita",
    description: "Basilic frais du jardin, tomates anciennes, mozzarella di bufala et un filet d'huile d'olive extra-vierge.",
    price: 17.90,
    rating: 4.5,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=500",
    isChefRecommended: true,
  },
  {
    id: "pizza-2",
    name: "Pizza Diavola",
    description: "Salami calabrais piquant, mozzarella filante, sauce tomate biologique et une pointe de miel pimenté.",
    price: 19.50,
    rating: 4.8,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "pizza-3",
    name: "Pizza Truffe et Prosciutto",
    description: "Roquette fraîche, jambon de Parme d'exception, copeaux de parmesan affiné et filet d'huile à la truffe blanche.",
    price: 23.00,
    rating: 4.9,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "pizza-4",
    name: "Pizza Quatre Fromages",
    description: "Sauce tomate biologique, mozzarella di bufala, gorgonzola crémeux, chèvre affiné et copeaux de parmigiano reggiano.",
    price: 19.90,
    rating: 4.7,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=500",
  },

  // Pasta Category
  {
    id: "pasta-1",
    name: "Spaghetti Carbonara",
    description: "La véritable recette traditionnelle : guanciale grillé, pecorino romano râpé et œuf frais battu très crémeux.",
    price: 18.50,
    rating: 4.6,
    category: "pasta",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=500",
    isChefRecommended: true,
  },
  {
    id: "pasta-2",
    name: "Pâtes au Pesto Genovese",
    description: "Pâtes trofie fraîches faites maison, pesto de basilic pilé, pignons grillés et parmigiano reggiano.",
    price: 16.90,
    rating: 4.7,
    category: "pasta",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "pasta-3",
    name: "Linguines aux Fruits de Mer",
    description: "Crevettes sauvages sauvées, palourdes, moules, tomates cerises et une sauce parfumée à l'ail et au vin blanc.",
    price: 26.50,
    rating: 4.9,
    category: "pasta",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=500",
  },

  // Salad Category
  {
    id: "salad-1",
    name: "Salade de Tomates et Burrata",
    description: "Burrata fondante et crémeuse, tomates de saison multicolores, huile d'olive vierge et crème de vinaigre balsamique.",
    price: 15.50,
    rating: 4.7,
    category: "salad",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "salad-2",
    name: "Salade Quinoa d'Automne",
    description: "Quinoa biologique, courge rôtie au four, chou kale, graines de citrouille et vinaigrette maison de cidre.",
    price: 14.00,
    rating: 4.4,
    category: "salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "salad-3",
    name: "Salade César Royale",
    description: "Cœur de romaine croquant, suprême de poulet grillé, œuf poché, croûtons dorés à l'ail, copeaux de parmesan et sauce césar maison.",
    price: 16.50,
    rating: 4.6,
    category: "salad",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "salad-4",
    name: "Salade Grecque Authentique",
    description: "Tomates mûres, concombre croquant, poivrons verts, oignons rouges, olives Kalamata parfumées, bloc de feta AOP et filet d'huile d'olive de Crète.",
    price: 14.50,
    rating: 4.5,
    category: "salad",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "salad-5",
    name: "Saumon Grillé",
    description: "Pavé de saumon sauvage saisi à la perfection, émulsion de beurre blanc à l'aneth et asperges bio rôties.",
    price: 24.90,
    rating: 4.8,
    category: "salad",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=500",
  },

  // Dessert Category
  {
    id: "dessert-1",
    name: "Cœur Coulant au Chocolat",
    description: "Moelleux tiède au chocolat noir intense et son cœur coulant, servi avec une boule de glace à la vanille de Madagascar.",
    price: 8.90,
    rating: 4.9,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "dessert-2",
    name: "Tiramisu Maison Classique",
    description: "Biscuits cuillères imbibés d'expresso fort, crème de mascarpone onctueuse et cacao pur saupoudré.",
    price: 9.50,
    rating: 4.8,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "dessert-3",
    name: "Crème Brûlée à la Gousse de Vanille",
    description: "Une crème onctueuse infusée à la gousse de vanille Bourbon, recouverte d'une fine couche de cassonade caramélisée au chalumeau.",
    price: 8.50,
    rating: 4.7,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1473347538260-264627d750fa?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "dessert-4",
    name: "Tartelette aux Fruits Rouges",
    description: "Pâte sablée croustillante garnie d'une crème pâtissière légère et de fruits rouges frais (framboises, fraises, myrtilles) de saison.",
    price: 9.00,
    rating: 4.8,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=500",
  },

  // Drinks Category
  {
    id: "drinks-1",
    name: "Mojito Traditionnel",
    description: "Menthe fraîche du potager, jus de citron vert pressé, rhum blanc agricole, sucre de canne roux et eau pétillante.",
    price: 12.00,
    rating: 4.7,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "drinks-2",
    name: "Mocktail Passion-Menthe",
    description: "Purée de fruits de la passion frais, zeste de citron vert, menthe fraîche et eau finement pétillante.",
    price: 8.50,
    rating: 4.6,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "drinks-3",
    name: "Chardonnay Réserve Spéciale",
    description: "Verre de vin blanc sec aux notes subtiles de fruits à chair blanche et aux arômes boisés, servi très frais.",
    price: 9.00,
    rating: 4.8,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "drinks-4",
    name: "Limonade Artisanale Framboise",
    description: "Jus de citron pressé maison, coulis de framboises fraîches, eau pétillante et feuilles de menthe fraîche.",
    price: 7.50,
    rating: 4.5,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=500",
  },

  // Extra popular item
  {
    id: "salmon-1",
    name: "Pavé de Saumon Sauvage",
    description: "Saumon poêlé à l'unilatérale, sauce onctueuse citronnée à l'aneth et asperges fraîches sautées.",
    price: 24.90,
    rating: 4.8,
    category: "pasta",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=500",
    isChefRecommended: true,
  },
  {
    id: "burger-special",
    name: "Burger Signature de Bœuf",
    description: "Steak de bœuf maturé haché maison, double cheddar fondant, compotée d'oignons caramélisés et frites fraîches.",
    price: 16.90,
    rating: 4.7,
    category: "burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500",
    isChefRecommended: true,
  },
];

export const chefs: Chef[] = [
  {
    id: "chef-1",
    name: "Thierry thiesson",
    role: "Chef de Cuisine",
    image: team1,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    id: "chef-2",
    name: "Sophia Brown",
    role: "Second de Cuisine",
    image: team2,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    id: "chef-3",
    name: "Daniel Lee",
    role: "Spécialiste du Grill",
    image: team3,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    id: "chef-4",
    name: "Emma White",
    role: "Chef Pâtissière",
    image: team4,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Émilie R.",
    role: "Blogueuse Culinaire",
    text: "Une cuisine incroyable et un service impeccable ! Pour moi, c'est la meilleure table gastronomique de la ville. Le pavé de saumon est cuit à la perfection absolue.",
    avatar: review1,
    rating: 5,
  },
  {
    id: "t-2",
    name: "Michel T.",
    role: "Guide Local",
    text: "Une ambiance idéale pour se retrouver en famille ou entre amis. Lumières chaudes tamisées, assises confortables et une carte de suggestions tout simplement remarquable.",
    avatar: review2,
    rating: 5,
  },
  {
    id: "t-3",
    name: "Sarah L.",
    role: "Cliente Habituée",
    text: "Chaque assiette que nous avons goûtée était un vrai régal ! On sent la fraîcheur absolue de chaque ingrédient. Nous reviendrons très vite !",
    avatar: review3,
    rating: 5,
  },
];

export const offers: Offer[] = [
  {
    id: "offer-1",
    title: "Formule Midi gourmande",
    description: "Profitez de nos burgers signatures ou de nos pâtes fraîches maison avec une boisson offerte.",
    discount: "Jusqu'à -30% d'avantage",
    image: offer1,
    badge: "11h30 - 15h00",
  },
  {
    id: "offer-2",
    title: "Festin en Famille",
    description: "Un délicieux assortiment de pizzas au choix, hors-d'œuvre croustillants, salades et boissons.",
    discount: "Économisez jusqu'à 25%",
    image: offer2,
    badge: "Pour 4 personnes",
  },
  {
    id: "offer-3",
    title: "Brunch du Week-end",
    description: "Savourez nos pancakes maison dorés, œufs brouillés fins, smoothies frais et boissons chaudes.",
    discount: "Offre à -20%",
    image: offer3,
    badge: "Samedi & Dimanche",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "Inspiration d'Été",
    description: "Venez tester nos toutes nouvelles recettes ensoleillées mettant à l'honneur des fruits d'été, des légumes croquants de producteurs d'ici et une superbe sélection de vins blancs frais.",
    date: "20 Mai 2026",
    image: news1,
    category: "Nouveau Menu",
  },
  {
    id: "news-2",
    title: "La Table Spéciale du Chef",
    description: "Rejoignez-nous ce vendredi pour un dîner d'exception avec démonstrations en direct et un menu dégustation exclusif en 7 étapes par notre Chef Thierry thiesson.",
    date: "15 Mai 2026",
    image: news2,
    category: "Événement",
  },
  {
    id: "news-3",
    title: "Prix de l'Excellence Verte",
    description: "El gusto est extrêmement honoré d'avoir reçu le trophée de 'Meilleure Table Éco-responsable' de l'année 2026 pour nos engagements en circuits courts.",
    date: "10 Mai 2026",
    image: news3,
    category: "Distinction",
  },
];

export const todaysSpecialMenu = {
  appetizers: [
    { name: "Bruschetta de Tomates et Basilic", price: 7.90, description: "Pain de campagne frotté à l'ail et toasté, garni de tomates fraîches concassées, basilic, ail et un filet d'huile d'olive extra-vierge pressée à froid." },
    { name: "Velouté de Champignons Sauvages", price: 6.50, description: "Un velouté onctueux de portobellos et champignons de Paris, parfumé au thym frais et relevé d'une touche de crème de truffe blanche." },
    { name: "Calamars Croustillants", price: 9.90, description: "Beignets de calamars fondants enrobés d'une panure légère, servis avec un citron grillé et un aïoli maison aux herbes." }
  ],
  mains: [
    { name: "Suprême de Volaille Grillé", price: 19.50, description: "Suprême de poulet juteux mariné aux herbes de Provence, grillé à la flamme, accompagné de petits légumes rôtis et d'une sauce crémeuse au poivre vert." },
    { name: "Filet de Bar Saisi à la Poêle", price: 23.50, description: "Bar sauvage à la peau croustillante sur son lit de purée de pommes de terre aux herbes citronnées, relevé d'une tapenade d'olives noires maison." },
    { name: "Côtes de Bœuf Confites", price: 25.90, description: "Travers de bœuf ultra-fondants cuits à basse température, glacés dans un jus corsé au vin rouge bio, servis sur un crémeux de panais." }
  ],
  desserts: [
    { name: "Cœur Coulant au Chocolat", price: 8.90, description: "Moelleux tiède au chocolat noir intense et son cœur coulant irrésistible, accompagné d'une boule de glace artisanale à la vanille de Madagascar." },
    { name: "Panna Cotta à la Gousse de Vanille", price: 7.50, description: "Entremets soyeux à la crème infusée à la véritable gousse de vanille, surmonté d'un coulis acidulé de fruits des bois de saison." },
    { name: "Tartelette au Citron Meringuée", price: 8.00, description: "Pâte sablée croustillante garnie d'un crémeux de citron jaune bio, couronnée d'une meringue suisse délicatement dorée au chalumeau." }
  ]
};

export const galleryPhotos = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];
