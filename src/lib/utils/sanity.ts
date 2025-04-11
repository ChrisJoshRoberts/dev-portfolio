import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: '5djtiqyl',
  dataset: 'production', 
  useCdn: false,
  apiVersion: '2025-05-08'
};

const sanityClient = createClient(config);

export default sanityClient;