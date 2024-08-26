"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import styles from './style.module.scss'
type ButtonSubmit = {
  value?: string;
};
function SubmitButton({ value }: ButtonSubmit) {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        type="submit"
        disabled={pending}
        className={`disabled:bg-gray ${styles.button}`}
      >
        ثبت
      </button>
    </div>
  );
}

export default SubmitButton;
