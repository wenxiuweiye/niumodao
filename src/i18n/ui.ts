// 界面静态文案字典
export const ui = {
  en: {
    "site.title": "Our Factory",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.factory": "Factory",
    "nav.about": "About Us",
    "nav.inquiry": "Inquiry",
    "home.welcome": "Welcome to our website",
    "products.title": "Our Products",
    "factory.title": "Our Factory",
    "about.title": "About Us",
    "inquiry.title": "Contact Us",
    "footer.text": "All rights reserved"
  },
  zh: {
    "site.title": "我们的工厂",
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.factory": "工厂",
    "nav.about": "关于我们",
    "nav.inquiry": "询盘",
    "home.welcome": "欢迎访问我们的网站",
    "products.title": "我们的产品",
    "factory.title": "我们的工厂",
    "about.title": "关于我们",
    "inquiry.title": "联系我们",
    "footer.text": "保留所有权利"
  },
  es: {
    "site.title": "Nuestra Fábrica",
    "nav.home": "Inicio",
    "nav.products": "Productos",
    "nav.factory": "Fábrica",
    "nav.about": "Quiénes somos",
    "nav.inquiry": "Consulta",
    "home.welcome": "Bienvenido a nuestro sitio web",
    "products.title": "Nuestros Productos",
    "factory.title": "Nuestra Fábrica",
    "about.title": "Sobre Nosotros",
    "inquiry.title": "Contáctenos",
    "footer.text": "Todos los derechos reservados"
  }
} as const;

// 支持的语言列表
export const locales = ['en', 'zh', 'es'] as const;
export type Locale = typeof locales[number];