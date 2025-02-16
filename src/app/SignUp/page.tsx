"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>(""); // To display errors

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(""); // Clear error when user types
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // ✅ Corrected Type
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://your-backend.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        setFormData({ email: "", password: "", confirmPassword: "" }); // Reset form
      } else {
        setErrorMessage(data.message || "Signup failed! Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Server down! :(");
    }
  };

  return (
    <div className="flex-row h-screen place-content-center">
      <form className={styles.form} onSubmit={handleSubmit}> {/* ✅ No more error */}
        <div className={styles.title}>
          Welcome,
          <br />
          <span>sign up using @iitbhu mail</span>
          <div className={"text-red-500"}>{` ${errorMessage}`}</div>
        </div>

        <input
          name="email"
          placeholder="Email"
          type="email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          className={styles.input}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          className={styles.input}
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button className={styles["button-confirm"]} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
