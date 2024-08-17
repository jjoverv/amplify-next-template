import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import outputs from '@/amplify_outputs.json';


// To use amplify server-side, you need to run the server with the Amplify context.
export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs
});