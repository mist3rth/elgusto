import React, { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Clock, Users, CheckCircle2, ChevronRight, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().min(10, "Le numéro de téléphone est invalide"),
  email: z.string().email("L'adresse e-mail est invalide"),
  date: z.string().min(1, "Veuillez sélectionner une date"),
  time: z.string().min(1, "Veuillez sélectionner une heure"),
  people: z.string().min(1, "Veuillez sélectionner le nombre de personnes"),
});

export default function BookTable() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:00",
    people: "2",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const times = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
  ];

  const peopleOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9+"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      bookingSchema.parse(formData);
      setError("");
      setIsSuccess(true);
    } catch (err) {
      if (err instanceof z.ZodError) {
        // @ts-ignore
        setError(err.errors[0].message);
      } else {
        setError("Une erreur est survenue.");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "19:00",
      people: "2",
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="bg-neutral-950 text-white py-20 relative overflow-hidden">
      {/* Background Decorative glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-900 p-5 sm:p-10 rounded-3xl backdrop-blur-md">
            <span className="text-amber-500 font-sans text-xs font-semibold tracking-wider uppercase block mb-3">
              Réservations
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight mb-8">
              Réservez votre table pour <br /> un moment d'exception
            </h2>

            {isSuccess ? (
              <div className="bg-emerald-950/40 border border-emerald-900/60 p-8 rounded-2xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Table réservée avec succès !</h3>
                <div className="max-w-md mx-auto text-neutral-400 text-sm leading-relaxed space-y-2 pt-2">
                  <p>Merci, <strong>{formData.name}</strong>. Votre table gastronomique pour <strong>{formData.people} {parseInt(formData.people) === 1 ? "personne" : "personnes"}</strong> a bien été enregistrée pour le <strong>{formData.date}</strong> à <strong>{formData.time}</strong>.</p>
                  <p className="text-xs text-neutral-500">Un e-mail de confirmation récapitulatif vous a été envoyé. Nous nous réjouissons de vous recevoir !</p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-sans font-semibold px-6 py-2.5 rounded transition-all cursor-pointer"
                  >
                    Faire une autre réservation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-rose-950/40 border border-rose-900 text-rose-300 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-400 block mb-2">Votre nom *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex. Jean Dupont"
                      className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none rounded-xl px-4 py-3.5 text-sm text-white transition-all font-sans"
                      aria-label="Votre nom"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-400 block mb-2">Numéro de téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ex. +33 6 12 34 56 78"
                      className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none rounded-xl px-4 py-3.5 text-sm text-white transition-all font-sans"
                      aria-label="Numéro de téléphone"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-400 block mb-2">Adresse e-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Ex. jean.dupont@exemple.com"
                      className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none rounded-xl px-4 py-3.5 text-sm text-white transition-all font-sans"
                      aria-label="Adresse e-mail"
                      required
                    />
                  </div>

                  {/* Date Input */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-400 block mb-2">Date de réservation *</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none rounded-xl px-4 py-3.5 pr-10 text-sm text-white transition-all font-sans cursor-pointer [color-scheme:dark]"
                        aria-label="Date de réservation"
                        required
                      />
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500">
                        <Calendar size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Time Selector */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-400 block mb-2">Heure de réservation *</label>
                    <div className="relative">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none rounded-xl px-4 py-3.5 text-sm text-white transition-all font-sans cursor-pointer appearance-none"
                        aria-label="Heure de réservation"
                      >
                        {times.map((t) => (
                          <option key={t} value={t} className="bg-neutral-900 text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500">
                        <Clock size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Guests Selector */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-400 block mb-2">Nombre d'invités *</label>
                    <div className="relative">
                      <select
                        name="people"
                        value={formData.people}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none rounded-xl px-4 py-3.5 text-sm text-white transition-all font-sans cursor-pointer appearance-none"
                        aria-label="Nombre d'invités"
                      >
                        {peopleOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-neutral-900 text-white">
                            {opt} {opt === "1" ? "Personne" : "Personnes"}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500">
                        <Users size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-sans font-semibold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/10 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>Réserver maintenant</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info Section */}
          <div className="lg:col-span-5 flex flex-col space-y-8 pt-4 lg:pt-8">
            <div>
              <span className="text-amber-500 font-sans text-xs font-semibold tracking-wider uppercase block mb-3">
                Nous contacter
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
                Une question ? Parlons-en !
              </h3>
              <p className="text-neutral-400 text-sm font-sans font-light leading-relaxed">
                Pour toute demande concernant des banquets privés, des réceptions sur-mesure ou des intolérances alimentaires particulières, n'hésitez pas à nous appeler ou à nous envoyer un message.
              </p>
            </div>

            {/* Direct Information list */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/10 p-3.5 rounded-2xl text-amber-500 border border-amber-500/10">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-neutral-500 text-xs block font-semibold uppercase tracking-wider mb-0.5">Téléphone</span>
                  <a href="tel:+33145678910" className="text-neutral-200 hover:text-amber-400 font-mono text-base transition-colors">
                    01 45 67 89 10
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/10 p-3.5 rounded-2xl text-amber-500 border border-amber-500/10">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-neutral-500 text-xs block font-semibold uppercase tracking-wider mb-0.5">Adresse e-mail</span>
                  <a href="mailto:hello@bitecraft.fr" className="text-neutral-200 hover:text-amber-400 font-mono text-base transition-colors">
                    hello@bitecraft.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/10 p-3.5 rounded-2xl text-amber-500 border border-amber-500/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-neutral-500 text-xs block font-semibold uppercase tracking-wider mb-0.5">Adresse</span>
                  <p className="text-neutral-200 text-base font-sans font-light leading-relaxed">
                    123 Rue de la Gastronomie, 75001 Paris, France
                  </p>
                </div>
              </div>
            </div>

            {/* Social Medias */}
            <div className="pt-6 border-t border-neutral-900">
              <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wider block mb-4">Suivez-nous</span>
              <div className="flex space-x-3">
                <a href="#" aria-label="Notre page Facebook" className="p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 rounded-xl text-neutral-400 border border-neutral-800 transition-all">
                  <Facebook size={16} />
                </a>
                <a href="#" aria-label="Notre compte Twitter" className="p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 rounded-xl text-neutral-400 border border-neutral-800 transition-all">
                  <Twitter size={16} />
                </a>
                <a href="#" aria-label="Notre page Instagram" className="p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 rounded-xl text-neutral-400 border border-neutral-800 transition-all">
                  <Instagram size={16} />
                </a>
                <a href="#" aria-label="Notre chaîne Youtube" className="p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 rounded-xl text-neutral-400 border border-neutral-800 transition-all">
                  <Youtube size={16} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
