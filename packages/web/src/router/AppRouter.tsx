import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/templates/Layout';
import { HomePage } from '@/pages/HomePage';
import { BusinessDevelopmentPage } from '@/pages/BusinessDevelopmentPage';
import { RecruiteFlowPage } from '@/pages/RecruiteFlowPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="business-development" element={<BusinessDevelopmentPage />} />
        <Route path="recruite-flow" element={<RecruiteFlowPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}