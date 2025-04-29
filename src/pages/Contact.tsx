
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// Schema walidacji formularza
const formSchema = z.object({
  name: z.string().min(3, { message: "Imię i nazwisko musi zawierać co najmniej 3 znaki" }),
  email: z.string().email({ message: "Wprowadź poprawny adres email" }),
  phone: z
    .string()
    .min(9, { message: "Numer telefonu musi zawierać co najmniej 9 cyfr" })
    .optional()
    .or(z.literal("")),
  subject: z.string().min(5, { message: "Temat musi zawierać co najmniej 5 znaków" }),
  message: z.string().min(10, { message: "Wiadomość musi zawierać co najmniej 10 znaków" }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // W produkcji tutaj byłoby wysyłanie formularza do API
    console.log("Dane formularza:", data);
    
    // Pokazujemy toast z potwierdzeniem
    toast({
      title: "Wiadomość wysłana",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
    });
    
    // Resetujemy formularz
    form.reset();
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Nagłówek strony */}
      <header className="bg-green-700 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Kontakt</h1>
          <p className="text-green-100 mt-2">Skontaktuj się z nami</p>
        </div>
      </header>

      {/* Sekcja kontaktowa */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Dane kontaktowe */}
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-6">Dane kontaktowe</h2>
              
              <div className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="h-64">
                    {/* Tutaj w produkcji byłaby mapa Google lub OpenStreetMap */}
                    <div className="h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Mapa lokalizacji</span>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">Adres</h3>
                        <p className="text-gray-700">
                          Żłobek Małe Skarby<br />
                          ul. Kwiatowa 5<br />
                          00-001 Warszawa
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-medium text-lg">Telefon</h3>
                          <p className="text-gray-700">123 456 789</p>
                          <p className="text-gray-700">987 654 321 (sekretariat)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-medium text-lg">Email</h3>
                          <p className="text-gray-700">kontakt@maleskarby.pl</p>
                          <p className="text-gray-700">sekretariat@maleskarby.pl</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium text-lg mb-2">Godziny pracy</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Poniedziałek - Piątek:</span>
                        <span>6:30 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sekretariat:</span>
                        <span>8:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekendy i święta:</span>
                        <span>Zamknięte</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formularz kontaktowy */}
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-6">Napisz do nas</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Imię i nazwisko*</FormLabel>
                            <FormControl>
                              <Input placeholder="Jan Kowalski" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email*</FormLabel>
                              <FormControl>
                                <Input placeholder="jan.kowalski@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefon (opcjonalnie)</FormLabel>
                              <FormControl>
                                <Input placeholder="123 456 789" type="tel" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Temat*</FormLabel>
                            <FormControl>
                              <Input placeholder="Temat wiadomości" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Wiadomość*</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Treść wiadomości..." 
                                className="min-h-[150px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormDescription className="text-sm text-gray-500">
                        Pola oznaczone * są wymagane.
                      </FormDescription>
                      
                      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                        <Send className="h-4 w-4 mr-2" /> Wyślij wiadomość
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
              
              <div className="mt-6 p-4 bg-green-100 rounded-md">
                <p className="text-green-800 text-sm">
                  <strong>Informacja o przetwarzaniu danych:</strong> Administratorem danych osobowych jest Żłobek Małe Skarby.
                  Dane będą przetwarzane wyłącznie w celu udzielenia odpowiedzi na przesłane zapytanie.
                  Więcej informacji na temat przetwarzania danych znajduje się w naszej polityce prywatności.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
