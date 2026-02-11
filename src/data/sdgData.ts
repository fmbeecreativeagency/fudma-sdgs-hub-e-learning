export interface SDG {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  color: string;
  icon: string;
}

export const sdgList: SDG[] = [
  { id: 1, title: "No Poverty", shortTitle: "No Poverty", description: "End poverty in all its forms everywhere.", color: "#E5243B", icon: "🏠" },
  { id: 2, title: "Zero Hunger", shortTitle: "Zero Hunger", description: "End hunger, achieve food security and improved nutrition.", color: "#DDA63A", icon: "🌾" },
  { id: 3, title: "Good Health and Well-Being", shortTitle: "Good Health", description: "Ensure healthy lives and promote well-being for all.", color: "#4C9F38", icon: "❤️" },
  { id: 4, title: "Quality Education", shortTitle: "Quality Education", description: "Ensure inclusive and equitable quality education.", color: "#C5192D", icon: "📚" },
  { id: 5, title: "Gender Equality", shortTitle: "Gender Equality", description: "Achieve gender equality and empower all women and girls.", color: "#FF3A21", icon: "⚖️" },
  { id: 6, title: "Clean Water and Sanitation", shortTitle: "Clean Water", description: "Ensure availability and sustainable management of water.", color: "#26BDE2", icon: "💧" },
  { id: 7, title: "Affordable and Clean Energy", shortTitle: "Clean Energy", description: "Ensure access to affordable, reliable, sustainable energy.", color: "#FCC30B", icon: "⚡" },
  { id: 8, title: "Decent Work and Economic Growth", shortTitle: "Decent Work", description: "Promote sustained, inclusive economic growth.", color: "#A21942", icon: "💼" },
  { id: 9, title: "Industry, Innovation and Infrastructure", shortTitle: "Innovation", description: "Build resilient infrastructure and foster innovation.", color: "#FD6925", icon: "🏗️" },
  { id: 10, title: "Reduced Inequalities", shortTitle: "Reduced Inequalities", description: "Reduce inequality within and among countries.", color: "#DD1367", icon: "🤝" },
  { id: 11, title: "Sustainable Cities and Communities", shortTitle: "Sustainable Cities", description: "Make cities inclusive, safe, resilient and sustainable.", color: "#FD9D24", icon: "🏙️" },
  { id: 12, title: "Responsible Consumption and Production", shortTitle: "Responsible Consumption", description: "Ensure sustainable consumption and production patterns.", color: "#BF8B2E", icon: "♻️" },
  { id: 13, title: "Climate Action", shortTitle: "Climate Action", description: "Take urgent action to combat climate change.", color: "#3F7E44", icon: "🌍" },
  { id: 14, title: "Life Below Water", shortTitle: "Life Below Water", description: "Conserve and sustainably use the oceans and marine resources.", color: "#0A97D9", icon: "🐟" },
  { id: 15, title: "Life on Land", shortTitle: "Life on Land", description: "Protect, restore and promote sustainable use of ecosystems.", color: "#56C02B", icon: "🌳" },
  { id: 16, title: "Peace, Justice and Strong Institutions", shortTitle: "Peace & Justice", description: "Promote peaceful and inclusive societies.", color: "#00689D", icon: "🕊️" },
  { id: 17, title: "Partnerships for the Goals", shortTitle: "Partnerships", description: "Strengthen the means of implementation and partnerships.", color: "#19486A", icon: "🤲" },
];
