import { useMemo, useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Loader } from './components/Loader';
import { restaurantConfig, themes, type ThemeKey } from './config/restaurantConfig';
import { type MenuItem } from './data/menuData';
import { Comparison } from './sections/Comparison';
import { Customization } from './sections/Customization';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';
import { Gallery } from './sections/Gallery';
import { Hero } from './sections/Hero';
import { Intro } from './sections/Intro';
import { MenuExperience } from './sections/MenuExperience';
import { OrderExperience, type CartItem } from './sections/OrderExperience';
import { Reservation } from './sections/Reservation';
import { RestaurantExperience } from './sections/RestaurantExperience';
import { SignatureDish } from './sections/SignatureDish';
import { SocialWorld } from './sections/SocialWorld';

function App() {
  const [theme, setTheme] = useState<ThemeKey>('ember');
  const [cart, setCart] = useState<CartItem[]>([]);
  const activeTheme = themes[theme];

  const themeStyle = useMemo(
    () =>
      ({
        '--accent': activeTheme.accent,
        '--accent-soft': activeTheme.accentSoft,
      }) as React.CSSProperties,
    [activeTheme],
  );

  const addToCart = (item: MenuItem) => {
    setCart((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
  };

  const decreaseCart = (id: string) => {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const removeCart = (id: string) => setCart((current) => current.filter((item) => item.id !== id));

  return (
    <div style={themeStyle} className="min-h-screen bg-ink font-body text-paper antialiased">
      <Loader />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Intro />
        <MenuExperience onAdd={addToCart} />
        <SignatureDish />
        <OrderExperience cart={cart} onAdd={addToCart} onDecrease={decreaseCart} onRemove={removeCart} />
        <RestaurantExperience />
        <Gallery />
        <SocialWorld />
        <Customization activeTheme={theme} onThemeChange={setTheme} />
        <Comparison />
        <Reservation />
        <section className="bg-paper px-4 pb-16 text-center text-sm text-ink/52 sm:px-6">
          {restaurantConfig.shortDisclosure}
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
