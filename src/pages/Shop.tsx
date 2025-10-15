import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import productsData from "@/data/products.json";

const Shop = () => {
  const [cart, setCart] = useState<Array<{ id: string; quantity: number }>>([]);

  const addToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
    toast.success("Added to cart!");
  };

  const cartTotal = cart.reduce((total, item) => {
    const product = productsData.find(p => p.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-earth py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">FEC Shop</h1>
              <p className="text-xl text-muted-foreground">
                Support our mission with eco-friendly products and FEC merchandise
              </p>
              {cartCount > 0 && (
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg">
                  <ShoppingCart className="h-5 w-5" />
                  <span>{cartCount} items - ${cartTotal.toFixed(2)}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-xl overflow-hidden border border-border hover-lift"
                >
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <span className="text-xl font-bold text-accent">${product.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    {product.inStock ? (
                      <Button
                        onClick={() => addToCart(product.id)}
                        className="w-full"
                      >
                        Add to Cart
                      </Button>
                    ) : (
                      <Button disabled className="w-full">
                        Out of Stock
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
