import styles from "./input-field.module.css";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import Input from "@/components/input/input";
import Typography from "@/components/typography/typography";

type InputFieldProps = {
  placeholder: string;
  type: "email" | "password";
  errors: FieldError | undefined;
  registered: UseFormRegisterReturn<string>;
};

export default function InputField({
  type,
  placeholder,
  errors,
  registered,
}: InputFieldProps) {
  return (
    <div className={styles.wrapper}>
      <Input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        {...registered}
      />
      {errors && (
        <Typography as="p" variant="small">
          {errors.message}
        </Typography>
      )}
    </div>
  );
}
