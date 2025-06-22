import { Outlet } from 'react-router-dom';
import { Layout } from './Layout';

export function PublicLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}