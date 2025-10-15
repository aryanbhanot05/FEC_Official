import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LandAcknowledgement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 gradient-earth">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Land Acknowledgement</h1>
              
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p>
                  The Foundation of the Energy Collective acknowledges that we are situated on Treaty 7 territory, the traditional and ancestral territories of the Blackfoot Confederacy: Kainai, Piikani and Siksika as well as the Tsuut'ina First Nation and Stoney Nakoda First Nation.
                </p>
                
                <p>
                  We also acknowledge the Métis Nation of Alberta, Region 3, as an integral part of the past, present and future of this land. We recognize that this territory has been home to Indigenous peoples for thousands of years, and we honor their deep connection to the land, water, and all living beings.
                </p>
                
                <p>
                  We are committed to:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Learning from and respecting Indigenous knowledge systems, particularly in our environmental and sustainable energy work</li>
                  <li>Building authentic partnerships with Indigenous communities based on mutual respect and benefit</li>
                  <li>Supporting Indigenous-led environmental initiatives and ensuring equitable access to clean energy</li>
                  <li>Acknowledging the historical and ongoing impacts of colonization and working toward reconciliation</li>
                </ul>
                
                <p>
                  We recognize that acknowledgment is only the beginning. True reconciliation requires action, accountability, and ongoing commitment to supporting Indigenous self-determination and environmental stewardship.
                </p>
                
                <p className="font-medium">
                  We invite you to learn more about the Indigenous peoples of Alberta and to support Indigenous-led organizations working toward environmental justice and community well-being.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandAcknowledgement;
