import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import { lazy, Suspense } from 'react';
import { RingLoader } from 'react-spinners';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CartPage = lazy(() => import('../pages/CartPage/CartPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <RingLoader
            color="#586f1f"
            size={100}
            cssOverride={{
              display: 'block',
              margin: '200px auto',
            }}
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
export default AppRoutes;
