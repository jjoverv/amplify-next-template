'use client'

import { signInWithRedirect } from "aws-amplify/auth"
import React from "react"

export function SignInForm() : React.ReactElement {
    return (
        <div>
            <button onClick={async () => signInWithRedirect({ provider: "Google" })}>
                Sign In
            </button>
        </div>
    )
}