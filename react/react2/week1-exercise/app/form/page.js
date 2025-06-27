"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { AppBar } from "@mui/material";

export default function SignUpForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `First Name : ${firstNameRef.current.value}, Last Name : ${lastNameRef.current.value}, Email: ${emailRef.current.value}, Phone Number: ${phoneNumberRef.current.value}`
    );
  };

  return (
    <div>
      <h1>Sign Up Form</h1>
      <p>Enter Your Details </p>
      <form onSubmit={handleSubmit}>
        <div>
          First Name:
          <input ref={firstNameRef} />
        </div>
        <div>
          Last Name:
          <input ref={lastNameRef} />
        </div>
        <div>
          Email:
          <input ref={emailRef} />
        </div>
        <div>
          Phone Number:
          <input ref={phoneNumberRef} />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            onClick={() => router.push("/")}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
