/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  FileText, 
  CreditCard, 
  UserCheck, 
  Home, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  Clock, 
  Award,
  ChevronRight,
  ExternalLink,
  Building2,
  Users,
  Briefcase,
  Smartphone
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const SERVICES = [
  {
    title: "Caste Certificate",
    marathiTitle: "जातीचा दाखला",
    icon: <Users className="w-6 h-6" />,
    description: "Essential for educational and job reservations.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Income Certificate",
    marathiTitle: "उत्पन्नाचा दाखला",
    icon: <FileText className="w-6 h-6" />,
    description: "Required for scholarships and government schemes.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Domicile Certificate",
    marathiTitle: "रहिवासी दाखला",
    icon: <Home className="w-6 h-6" />,
    description: "Proof of residence in the state of Maharashtra.",
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Non-Creamy Layer",
    marathiTitle: "नॉन-क्रिमी लेअर",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Required for OBC category benefits.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Central OBC",
    marathiTitle: "केंद्रीय ओबीसी",
    icon: <Globe className="w-6 h-6" />,
    description: "For central government jobs and education.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Aadhaar & PAN",
    marathiTitle: "आधार आणि पॅन",
    icon: <CreditCard className="w-6 h-6" />,
    description: "New applications and corrections.",
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Banking Services",
    marathiTitle: "बँकिंग सेवा",
    icon: <Building2 className="w-6 h-6" />,
    description: "Zero balance accounts and digital banking.",
    color: "bg-cyan-50 text-cyan-600"
  }
];

const DOCUMENT_REQUIREMENTS = [
  {
    id: "caste",
    title: "Caste Certificate (जातीचा दाखला)",
    docs: [
      "School Leaving Certificate (Original)",
      "Birth Certificate / Address Proof",
      "Father’s Caste Proof (TC/Caste Certificate)",
      "Aadhaar Card (Self & Parents)",
      "Parents must be physically present for verification",
      "Affidavit (if required)"
    ]
  },
  {
    id: "income",
    title: "Income Certificate (उत्पन्नाचा दाखला)",
    docs: [
      "Ration Card (Xerox)",
      "Aadhaar Card",
      "Talathi Income Report (Last 3 Years)",
      "Salary Slip (if employed)",
      "Self-Declaration Form"
    ]
  },
  {
    id: "domicile",
    title: "Domicile Certificate (रहिवासी दाखला)",
    docs: [
      "School Leaving Certificate",
      "Aadhaar Card",
      "Ration Card",
      "Voter ID / Electricity Bill",
      "Residence proof for last 15 years",
      "Birth Certificate"
    ]
  },
  {
    id: "ncl",
    title: "Non-Creamy Layer (नॉन-क्रिमी लेअर)",
    docs: [
      "Caste Certificate",
      "Income Certificate (Last 3 Years)",
      "Aadhaar Card",
      "School Leaving Certificate",
      "Father's Caste Proof"
    ]
  },
  {
    id: "obc",
    title: "Central OBC Certificate (केंद्रीय ओबीसी)",
    docs: [
      "State Caste Certificate",
      "Income Proof",
      "Aadhaar Card",
      "Valid ID Proof",
      "Affidavit in prescribed format"
    ]
  }
];

export default function App() {
  const whatsappUrl = "https://wa.me/9175030505";

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/30 selection:text-accent-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none tracking-tight text-primary">
                  Billa Maha E Seva
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                  Digital Excellence
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              <a href="#services" className="hover:text-primary transition-all duration-300 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#documents" className="hover:text-primary transition-all duration-300 relative group">
                Requirements
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#contact" className="hover:text-primary transition-all duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-full px-6 bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-40 lg:pb-56 premium-gradient">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/20 backdrop-blur-sm mb-8 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
                  Authorized Government Service Provider
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tight text-slate-900 mb-8 leading-[0.95]">
                Seamless Government <br />
                <span className="text-primary italic font-serif font-medium">Services for You.</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                Experience the next generation of E-Seva. Fast, reliable, and professional documentation services tailored for your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="#services"
                  className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto px-10 h-16 text-lg rounded-full bg-primary shadow-2xl shadow-primary/30 hover:scale-105 transition-transform duration-300")}
                >
                  Explore Services
                </a>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto px-10 h-16 text-lg rounded-full border-2 bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300")}
                >
                  <MessageCircle className="w-6 h-6 mr-3 text-green-600" />
                  Consult Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Happy Clients", value: "5000+" },
              { label: "Success Rate", value: "99.9%" },
              { label: "Years Experience", value: "10+" },
              { label: "Services Offered", value: "50+" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Premium <br /><span className="text-primary">Service Portfolio</span></h2>
              <p className="text-lg text-slate-500 font-light">
                We bridge the gap between citizens and government services through technology and expertise.
              </p>
            </div>
            <div className="flex gap-4">
              <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 text-slate-600 border-none">
                Maharashtra State
              </Badge>
              <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 text-slate-600 border-none">
                Central Govt
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group h-full border-slate-100/50 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-[2rem] overflow-hidden bg-slate-50/50">
                  <CardHeader className="p-8">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", service.color)}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-heading mb-2">{service.title}</CardTitle>
                    <CardDescription className="font-serif italic text-lg text-primary/70">{service.marathiTitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-slate-600 leading-relaxed font-light">{service.description}</p>
                  </CardContent>
                  <CardFooter className="px-8 pb-8 pt-0">
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-between group p-0 hover:bg-transparent hover:text-primary font-semibold")}
                    >
                      Start Application
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section - Bento Style */}
      <section id="documents" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Documentation <span className="text-primary italic font-serif font-medium">Guide</span></h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              Everything you need to know before you apply. Transparency is our priority.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              {DOCUMENT_REQUIREMENTS.map((req, idx) => (
                <Accordion key={req.id} type="single" collapsible className="w-full">
                  <AccordionItem value={req.id} className="bg-white border-none rounded-3xl px-8 shadow-sm hover:shadow-md transition-shadow overflow-hidden mb-4">
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">
                          0{idx + 1}
                        </div>
                        <span className="text-left font-heading font-bold text-lg">{req.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {req.docs.map((doc, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 font-medium">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-primary p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Award className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-accent" />
                  Special Categories
                </h3>
                <div className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <h4 className="font-bold text-accent uppercase tracking-widest text-xs">SC / ST / VJNT / SBC</h4>
                    <p className="text-sm text-white/80 font-light leading-relaxed">
                      Historical lineage proof and community validation are essential. We specialize in complex caste verification.
                    </p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div className="space-y-2">
                    <h4 className="font-bold text-accent uppercase tracking-widest text-xs">Pre-1950 Records</h4>
                    <p className="text-sm text-white/80 font-light leading-relaxed">
                      Accessing archives for grandfather's TC or land records? We help you navigate the search process.
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className={cn(buttonVariants({ variant: "secondary" }), "w-full rounded-2xl h-12 font-bold")}
                  >
                    Get Expert Advice
                  </a>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                  <Smartphone className="w-8 h-8 text-primary" />
                  Digital Suite
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Zero Balance Banking",
                    "Aadhaar Ecosystem",
                    "PAN Card Services",
                    "Digital Signatures",
                    "Net Banking Setup"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 group hover:bg-primary hover:text-white transition-all duration-300 cursor-default">
                      <span className="font-semibold">{item}</span>
                      <ChevronRight className="w-4 h-4 opacity-30 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-3xl relative">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              <div className="p-12 md:p-20 text-white">
                <Badge className="mb-6 bg-accent text-white border-none px-4 py-1">Contact Us</Badge>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-12">Let's start your <br /><span className="text-accent italic font-serif font-medium">Application.</span></h2>
                
                <div className="space-y-10">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Call Support</div>
                      <div className="text-xl font-bold">+91 9175030505</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Visit Center</div>
                      <div className="text-xl font-bold">Maharashtra, India</div>
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className={cn(buttonVariants({ size: "lg" }), "h-16 px-10 rounded-full bg-accent hover:bg-accent/90 text-white font-bold text-lg shadow-xl shadow-accent/20")}
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Chat with an Expert
                  </a>
                </div>
              </div>

              <div className="relative h-96 lg:h-auto bg-slate-800">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 p-12 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-6">
                    <MapPin className="w-10 h-10 opacity-20" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Billa Maha E Seva Kendra</h4>
                  <p className="text-white/40 max-w-xs mx-auto mb-8 font-light">Visit us for physical verification and document submission.</p>
                  <a 
                    href="#" 
                    className={cn(buttonVariants({ variant: "outline" }), "rounded-full border-white/10 text-white hover:bg-white hover:text-slate-900")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-primary">
                Billa Maha E Seva
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-400">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Services</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
          </div>
          
          <Separator className="mb-12 opacity-50" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm font-medium">
            <p>© {new Date().getFullYear()} Billa Maha E Seva Kendra. Excellence in Digital Governance.</p>
            <p className="flex items-center gap-2 italic font-serif">
              Trusted by thousands across Maharashtra
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <motion.div 
        className="fixed bottom-10 right-10 z-50"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-20 h-20 bg-green-500 text-white rounded-[2rem] shadow-3xl hover:bg-green-600 transition-all duration-300 group relative"
        >
          <MessageCircle className="w-10 h-10" />
          <div className="absolute -top-12 right-0 bg-white text-slate-900 px-4 py-2 rounded-2xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
            How can we help?
          </div>
          <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500 border-4 border-white"></span>
          </span>
        </a>
      </motion.div>
    </div>
  );
}
