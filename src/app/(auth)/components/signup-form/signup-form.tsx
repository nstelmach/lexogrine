"use client";
import { Signup, SignupInput } from "@/utils/validations";
import styles from "./signup-form.module.css";
import InputField from "@/components/input-field/input-field";
import CheckboxField from "@/components/checkbox-field/checkbox-field";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { PREDEFINED_RESPONSES } from "@/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/button/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Response } from "@/types";

export default function SignupForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(Signup),
  });
  const { login } = useAuth();
  const isChecked = watch("terms") as SignupInput["terms"];

  const registeredEmail = register("email");
  const registeredPassword = register("password");
  const registeredTerms = register("terms");

  const onSubmit: SubmitHandler<SignupInput> = async (data) => {
    try {
      const response = await new Promise<Response>((resolve, reject) => {
        // Request with delay
        setTimeout(() => {
          // Predefined combinations of response
          const predefinedResponse = PREDEFINED_RESPONSES.find(
            (predefined) =>
              predefined.email === data.email &&
              predefined.password === data.password,
          );
          if (predefinedResponse) {
            resolve(predefinedResponse.response);
          } else {
            reject(new Error("Invalid credentials"));
          }
        }, 1000);
      });

      // Handling errors, communicating action status to the user
      // Login user
      if (response.success) {
        toast.success("Signed up successfully!");
        login({ email: data.email });
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(
          error.message || "An error occurred during signup. Please try again.",
        );
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.error(error);
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputWrapper}>
        <InputField
          type="email"
          placeholder="Your email"
          errors={errors.email}
          registered={registeredEmail}
        />
        <InputField
          type="password"
          placeholder="Your password"
          errors={errors.password}
          registered={registeredPassword}
        />
        <CheckboxField
          label="I agree to the Terms of Service."
          errors={errors.terms}
          isChecked={isChecked}
          registered={registeredTerms}
        />
      </div>
      <Button
        disabled={isSubmitting}
        isLoading={isSubmitting}
        type="submit"
        label="Sign In"
        className={styles.button}
      />
    </form>
  );
}
