import React, { useRef, useState, useEffect, RefObject } from "react";
import styles from "./index.module.scss";

interface EnterCodeProps {
  callback?: (code: string) => void;
}

export default function SmsCodeInput({ callback }: EnterCodeProps) {
  const [code, setCode] = useState<string>("");
  const inputRefs: RefObject<HTMLInputElement>[] = Array.from(
    { length: 4 },
    () => useRef<HTMLInputElement>(null),
  );

  const resetCode = () => {
    inputRefs.forEach((ref) => {
      if (ref.current) ref.current.value = "";
    });
    if (inputRefs[0]?.current) inputRefs[0].current.focus();
    setCode("");
  };

  useEffect(() => {
    if (code.length === 4) {
      if (callback) callback(code);
      resetCode();
    }
  }, [code, callback]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const input = e.target;
    const newCode = code.split("");
    newCode[index] = input.value;
    setCode(newCode.join(""));
    if (inputRefs[index + 1]?.current) {
      // @ts-ignore
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div className={styles.container}>
      {[0, 1, 2, 3].map((index) => (
        <input
          className={styles.input}
          key={index}
          type="text"
          maxLength={1}
          onChange={(e) => handleInput(e, index)}
          ref={inputRefs[index]}
        />
      ))}
    </div>
  );
}
