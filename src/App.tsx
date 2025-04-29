
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Information from "./pages/Information";
import Documents from "./pages/Documents";
import TeacherAvailability from "./pages/TeacherAvailability";
import Fees from "./pages/Fees";
import ParentCouncil from "./pages/ParentCouncil";
import Staff from "./pages/Staff";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="aktualnosci" element={<News />} />
            <Route path="aktualnosci/:id" element={<NewsDetail />} />
            <Route path="informacje" element={<Information />} />
            <Route path="informacje/dokumenty" element={<Documents />} />
            <Route path="informacje/dostepnosc-nauczycieli" element={<TeacherAvailability />} />
            <Route path="informacje/odplatnosci" element={<Fees />} />
            <Route path="informacje/rada-rodzicow" element={<ParentCouncil />} />
            <Route path="informacje/kadra" element={<Staff />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
