"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap, Support, Star } from 'lucide-react';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "hero-image", url: "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "High-End Gaming PC Interior with Colorful RGB Lights" },
  { id: "feature-image", url: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of a professional audio and video editing software interface with waveform displays." },
  { id: "product-image", url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Two women working together on software programming indoors, focusing on code." },
  { id: "team-image", url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation." },
  { id: "testimonial-image", url: "https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Woman enjoying remote work at a café, using a laptop and smartphone." },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={'hover-magnetic'}
      defaultTextAnimation={'reveal-blur'}
      borderRadius={'rounded'}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SaaSify"
          buttonText="Get Started"
          buttonVariant="hover-magnetic"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Accelerate Your Business"
            description="With our platform, take your operations to the next level."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            imagePosition="right"
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Try for Free", href: "pricing" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Innovative Solutions", description: "Cutting-edge technology to support your growth.", icon: Zap },
              { title: "Reliable Support", description: "24/7 customer support to help you succeed.", icon: Support }
            ]}
            imageSrc={assetMap.find(a => a.id === "feature-image")?.url}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: "Dashboard", description: "Comprehensive view of your data.", imageSrc: assetMap.find(a => a.id === "feature-image")?.url, button: { text: "Explore", href: "#" } },
              { title: "Analytics", description: "Deep insights to drive decisions.", imageSrc: assetMap.find(a => a.id === "feature-image")?.url, button: { text: "Learn More", href: "#" } }
            ]}
            title="Features"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardThree
            products={[
              { id: "1", name: "Advanced Dashboard", price: "$99/mo", imageSrc: assetMap.find(a => a.id === "product-image")?.url, onProductClick: () => {} }
            ]}
            title="Our Products"
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne
            plans={[
              { id: "basic", price: "$49/mo", subtitle: "Entry-level features.", features: ["Access to basic features", "Email support"], badge: "Best Value" },
              { id: "pro", price: "$99/mo", subtitle: "Enhanced capabilities.", features: ["All basic features", "Phone support", "Custom reports"], badge: "Most Popular" }
            ]}
            title="Pricing Plans"
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            members={[
              { id: "1", name: "Jane Doe", role: "CEO", description: "Visionary leader passionate about technology.", imageSrc: assetMap.find(a => a.id === "team-image")?.url },
              { id: "2", name: "John Smith", role: "CTO", description: "Tech guru with a focus on innovation.", imageSrc: assetMap.find(a => a.id === "team-image")?.url }
            ]}
            title="Our Team"
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: "1", name: "Client A", role: "CEO at Company", testimonial: "The platform has transformed our business!", icon: Star }
            ]}
            title="Testimonials"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplitForm
            title="Contact Us"
            description="We're here to help and answer any questions you might have."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Type your message...", rows: 5, required: true }}
            imageSrc={assetMap.find(a => a.id === "product-image")?.url}
            mediaPosition="right"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { items: [{ label: "Contact", href: "contact" }, { label: "About Us", href: "about" }] }
            ]}
            logoText="SaaSify"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
