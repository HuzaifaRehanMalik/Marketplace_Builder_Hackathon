import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 'zls3kszt',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2021-03-25', 
});
