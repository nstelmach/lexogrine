import styles from "./checkbox-field.module.css";
import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import Input from "@/components/input/input";
import { CheckIcon } from "lucide-react";
import Typography from "@/components/typography/typography";

type CheckboxFieldProps = {
  label: string;
  errors:
    | Merge<FieldError, FieldErrorsImpl<DeepRequired<unknown> & {}>>
    | undefined;
  isChecked: boolean;
  registered: UseFormRegisterReturn<string>;
};

export default function CheckboxField({
  label,
  errors,
  isChecked,
  registered,
}: CheckboxFieldProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <div className={styles.iconWrapper}>
          <Input
            className={styles.checkbox}
            type="checkbox"
            id={registered.name}
            {...registered}
          />
          {isChecked && <CheckIcon className={styles.icon} />}
        </div>
        <label htmlFor={registered.name}>
          <Typography as="p" variant="small" className={styles.label}>
            {label}
          </Typography>
        </label>
      </div>
      {errors && (
        <Typography as="p" variant="small">
          {errors.message}
        </Typography>
      )}
    </div>
  );
}
