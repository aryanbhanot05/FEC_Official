import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import newsData from "@/data/news.json";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-earth py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">News & Updates</h1>
              <p className="text-xl text-muted-foreground">
                Stay informed about our latest projects, partnerships, and community impact
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {newsData.map((article) => (
                <article
                  key={article.id}
                  className="bg-card rounded-xl overflow-hidden border border-border hover-lift"
                >
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    <div className="md:col-span-1">
                      <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg" />
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          {article.author}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
                      <p className="text-muted-foreground mb-4">{article.summary}</p>
                      <Button variant="outline" className="group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
