import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Accueil', to: '/' },
  { name: 'Collections', to: '/materials' },
  { name: 'Inspiration', to: '/catalogs' },
  { name: 'Devis', to: '/quote' },
  { name: 'Réalisations', to: '/gallery' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <span className="font-display text-2xl text-primary-800">
                    CuisinArt
                    <span className="text-accent-500">Studio</span>
                  </span>
                </Link>
                <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                        location.pathname === item.to
                          ? 'border-accent-500 text-primary-900'
                          : 'border-transparent text-primary-500 hover:border-primary-300 hover:text-primary-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button className="bg-accent-500 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-accent-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500">
                  Contact
                </button>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary-400 hover:text-primary-500 hover:bg-primary-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`block pl-3 pr-4 py-2 text-base font-medium ${
                    location.pathname === item.to
                      ? 'bg-accent-50 border-l-4 border-accent-500 text-accent-700'
                      : 'border-l-4 border-transparent text-primary-500 hover:bg-primary-50 hover:border-primary-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="mt-4 w-full bg-accent-500 text-white px-4 py-2.5 text-base font-medium hover:bg-accent-600">
                Contact
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}