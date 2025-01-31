import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default Layout;
