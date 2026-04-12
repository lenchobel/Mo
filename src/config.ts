/**
 * Business Configuration
 * Edit this file to change the content of the website without touching the code.
 */

export const shopConfig = {
  shopName: "Mo Men's Salon & Spa",
  tagline: "Sharp cuts, premium grooming, and 24/7 service",
  accentColor: "#D4AF37", // Gold
  contact: {
    phone: "+251921995969",
    address: "Birhane Africa Mall, Addis Ababa, Ethiopia",
    whatsapp: "251921995969",
    email: "info@momenssalon.com",
    instagram: "momenssalon",
    facebook: "momenssalon",
  },
  hours: [
    { day: "Mon - Sat", time: "24 Hours" },
    { day: "Sunday", time: "Closes at 10:30 PM" },
  ],
  services: [
    {
      id: "haircut",
      name: "Haircut",
      description: "Professional haircut with precision styling and finishing.",
      price: "ETB 150",
      duration: "30 min",
    },
    {
      id: "beard-trim",
      name: "Beard Trim",
      description: "Expert beard shaping and trimming with hot towel treatment.",
      price: "ETB 100",
      duration: "20 min",
    },
    {
      id: "full-grooming",
      name: "Full Grooming",
      description: "Complete grooming package including haircut, beard trim, and styling.",
      price: "ETB 250",
      duration: "60 min",
    },
    {
      id: "head-face-massage",
      name: "Head & Face Massage",
      description: "Relaxing massage therapy for head and face with essential oils.",
      price: "ETB 200",
      duration: "45 min",
    },
    {
      id: "hand-massage",
      name: "Hand Massage",
      description: "Therapeutic hand massage to relieve stress and improve circulation.",
      price: "ETB 150",
      duration: "30 min",
    },
    {
      id: "hair-dye",
      name: "Hair Dye",
      description: "Professional hair coloring and dyeing services.",
      price: "ETB 300",
      duration: "90 min",
    },
    {
      id: "shampoo-treatment",
      name: "Shampoo & Hair Treatment",
      description: "Deep cleansing shampoo with nourishing hair treatment.",
      price: "ETB 120",
      duration: "25 min",
    },
    {
      id: "marriage-package",
      name: "Marriage Package",
      description: "Complete wedding grooming package - haircut, beard trim, face massage, and styling.",
      price: "~4000 ETB",
      duration: "120 min",
    },
  ],
  barbers: [
    {
      name: "Nati",
      specialty: "Master Barber & Fade Expert",
      image: "/images/image27.jpg",
    },
    {
      name: "Siyoom",
      specialty: "Classic Cuts & Beard Sculpting",
      image: "/images/image14.jpg",
    },
    {
      name: "",
      specialty: "Modern Styling & Texture",
      image: "/images/image29.jpg",
    },
  ],
  gallery: [
    "/images/image31.jpg",
    "/images/image30.jpg",
    "/images/image3.jpg",
    "/images/image25.jpg",
    "/images/image5.jpg",
    "/images/image26.jpg",
    "/images/image21.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image19.jpg",
    "/images/image11.jpg",
    "/images/image20.jpg",
  ],
  testimonials: [
    {
      name: "Yohannes Tekle",
      text: "The tools are always clean and the barbers are incredibly skilled. Best 24/7 service in Addis!",
      rating: 5,
    },
    {
      name: "Samuel Kassa",
      text: "Professional service and attention to detail. The marriage package was perfect for my wedding day.",
      rating: 5,
    },
    {
      name: "Abel Bekele",
      text: "Open 24 hours saved me before an important meeting. Clean environment and expert barbers.",
      rating: 5,
    },
  ],
};
