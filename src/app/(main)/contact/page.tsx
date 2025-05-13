import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "@/constants";

export const metadata = {
  title: "Contact Us | LuminousMoments",
  description: "Get in touch with us for photography services, inquiries, or to schedule a consultation. We're here to help capture your special moments.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
 

      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image 
            src={IMAGES.HERO_BG} 
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Let's discuss how we can help capture your special moments. Get in touch with us today.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground">+94 77 123 4567</p>
                <p className="text-muted-foreground">+94 11 234 5678</p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@luminousmoments.com</p>
                <p className="text-muted-foreground">bookings@luminousmoments.com</p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-muted-foreground">123 Photography Lane</p>
                <p className="text-muted-foreground">Colombo 05, Sri Lanka</p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Mon - Fri: 9:00 - 18:00</p>
                <p className="text-muted-foreground">Sat: 10:00 - 15:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="max-w-md">
                  <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we'll get back to you within 24 hours. For urgent inquiries, 
                    please call us directly.
                  </p>
                  
                  <div className="space-y-4 bg-card p-6 rounded-lg border">
                    <div>
                      <h3 className="font-semibold mb-2">Studio Location</h3>
                      <p className="text-muted-foreground">
                        Our studio is conveniently located in the heart of Colombo, with easy access 
                        and parking facilities available.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Consultation Hours</h3>
                      <p className="text-muted-foreground">
                        We offer flexible consultation hours by appointment. Weekend consultations 
                        are available for wedding and event photography clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Interest
                    </label>
                    <select 
                      id="service" 
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="graduation">Graduation Photography</option>
                      <option value="birthday">Birthday Photography</option>
                      <option value="engagement">Engagement Photography</option>
                      <option value="corporate">Corporate Photography</option>
                      <option value="cultural">Cultural Photography</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your event or inquiry" 
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Visit Our Studio</h2>
              <p className="text-muted-foreground">
                Our studio is equipped with professional lighting and backdrops for portrait sessions. 
                We also have a comfortable consultation area to discuss your photography needs.
              </p>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128219!2d79.86141661477269!3d6.906076795012432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x47b8d4c3f4d6903b!2sColumbus%20Circle%2C%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1645488532676!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

 
    </div>
  );
} 