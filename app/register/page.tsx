"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

function Register() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setError("Passwords do not match")
        }

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()
            if (!res.ok) {
                setError("Failed to register")
            }

            router.push("/login")

        } catch (error) {
            console.log(error);            
            setError("Something went wrong")
        }
    }

    const router = useRouter()
  return (
    <div>

    </div>
  )
}
export default Register