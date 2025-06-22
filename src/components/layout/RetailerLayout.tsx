import { Outlet } from 'react-router-dom';
import { Layout } from './Layout';

export function RetailerLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}