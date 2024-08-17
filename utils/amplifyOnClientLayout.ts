'use client';

import outputs from '@/amplify_outputs.json';
import { Amplify } from 'aws-amplify';

// Amplify.configure(outputs, {
//   ssr: true // required when using Amplify with Next.js
// });

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "eu-west-3_W6FWtb9SF",
      userPoolClientId: "4k88um057i5t87b7ol4ifclv8h",
      identityPoolId: "eu-west-3:21419857-295e-457b-a821-c0fc6e3611a8",
      loginWith: {
        email: true,
        oauth: {
          domain: "bliko-ai.auth.eu-west-3.amazoncognito.com",
          providers: ["Google"],
          scopes: ["phone", "email", "openid", "profile"],
          redirectSignIn: ["http://localhost:3000/"],
          redirectSignOut: ["http://localhost:3000/"],
          responseType: "code",
        },
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
},
{
  ssr: true // required when using Amplify with Next.js
});

export default function RootLayoutThatConfiguresAmplifyOnTheClient({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}