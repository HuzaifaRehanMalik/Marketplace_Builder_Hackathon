import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zls3kszt',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skRFhoEc6jR6kXl2618TsrpkWnYQpeR9hW3Kc0XUrp3h6tHNVZ1E3SYh58skvyLv91g39EIEybFoGdvEafoXu9x7fLodRYRekxWUmRjRGusMlBfKFhwsVQWHHtbRkWsi0NKpVAaLXYDw8QgMzYUyqYmgjE28OxfvwANkBWrXVIu4EfLREOzg',
});
async function getProducts() {
  const products = await client.fetch('*[_type == "product"]');
  return products;
}