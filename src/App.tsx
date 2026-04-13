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
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-primary">
                Billa Maha E Seva
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#documents" className="hover:text-primary transition-colors">Documents</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-3 py-1">
                Trusted by 5000+ Citizens
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                All Government Services <br />
                <span className="text-primary">In One Place</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                Fast, Reliable, and Trusted E-Seva Services. Get your documents processed professionally without any hassle.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-lg bg-primary" asChild>
                  <a href="#services">Apply Now</a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-14 text-lg border-2" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We provide a wide range of digital and documentation services to help you access government benefits easily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="font-medium text-primary/80">{service.marathiTitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-between group p-0 hover:bg-transparent hover:text-primary" asChild>
                      <a href={whatsappUrl} target="_blank" rel="noreferrer">
                        Apply Now
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section id="documents" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Documents Required</h2>
              <p className="text-slate-600 mb-8">
                Check the list of mandatory documents for each certificate. Having these ready will speed up your application process.
              </p>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {DOCUMENT_REQUIREMENTS.map((req) => (
                  <AccordionItem key={req.id} value={req.id} className="bg-white border rounded-xl px-4 overflow-hidden">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <span className="text-left font-semibold">{req.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <ul className="space-y-3">
                        {req.docs.map((doc, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="space-y-8">
              {/* Special Category Section */}
              <Card className="border-orange-100 bg-orange-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800">
                    <Award className="w-6 h-6" />
                    Special Category Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-100">
                    <h4 className="font-bold text-orange-900 mb-2">SC / ST / VJNT / SBC</h4>
                    <p className="text-sm text-slate-700">
                      Specific community proofs and historical documents are required. Please consult us for the exact list based on your sub-caste.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-100">
                    <h4 className="font-bold text-orange-900 mb-2">Old Documents (Pre-1950)</h4>
                    <p className="text-sm text-slate-700">
                      For certain caste certificates, proofs from before 1950 (like grandfather's TC or land records) are mandatory to establish lineage.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-100">
                    <h4 className="font-bold text-orange-900 mb-2">Supporting Proofs</h4>
                    <p className="text-sm text-slate-700">
                      Vanshaval (Family Tree), Affidavit, and Local Body certificates may be needed for complex cases.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Extra Services Section */}
              <Card className="border-blue-100 bg-blue-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Smartphone className="w-6 h-6" />
                    Digital & Banking Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Zero Balance Bank Account (Kotak)",
                      "Aadhaar Card Update",
                      "New PAN Card Application",
                      "Cheque Book & ATM Services",
                      "Net Banking Setup",
                      "Digital Signature (DSC)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-16 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Billa Maha E Seva Kendra</h4>
                      <p className="text-white/70">Your Trusted Partner for Digital Services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Call Us</h4>
                      <p className="text-white/70">+91 9175030505</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Location</h4>
                      <p className="text-white/70">Visit our center for physical verification and document submission.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative h-64 lg:h-auto bg-slate-200">
                {/* Map Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                  <MapPin className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-medium">Map Location Placeholder</p>
                  <p className="text-sm">Billa Maha E Seva Kendra, Maharashtra, India</p>
                  <Button variant="outline" size="sm" className="mt-4 border-slate-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg tracking-tight text-primary">
              Billa Maha E Seva Kendra
            </span>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            Providing fast, reliable, and trusted government documentation services since 2015.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 mb-8">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Refund Policy</a>
          </div>
          <Separator className="mb-8" />
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Billa Maha E Seva Kendra. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-2 -right-2 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white"></span>
          </span>
        </a>
      </motion.div>
    </div>
  );
}
