"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import ButtonProps from "./button.interface";
import Image from "next/image";

function Button(props: ButtonProps) {
  const {
    content,
    color,
    disable,
    endIcon,
    size,
    startIcon,
    variant,
    onClick,
    className,
  } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.fontWeight = "600";
      buttonRef.current.style.fontSize = "1rem";
      buttonRef.current.style.lineHeight = "1.4375";
      buttonRef.current.style.boxShadow =
        "0 1px 2px 0px rgba(16, 24, 40, 0.05)";
      if (variant === "outline") {
        buttonRef.current.style.backgroundColor = "transparent";
        if (color === "primary") {
          buttonRef.current.style.border = "1px solid #6C59FF";
          buttonRef.current.style.color = "#344054";
        } else if (color === "secondary") {
          buttonRef.current.style.border = "1px solid #D0D5DD";
        }
        if (size === "small") {
          buttonRef.current.style.padding = "7px 13px";
        } else {
          buttonRef.current.style.padding = "9px 17px";
        }
      } else if (variant === "contained") {
        if (size === "small") {
          buttonRef.current.style.padding = "8px 14px";
        } else {
          buttonRef.current.style.padding = "10px 18px";
        }
        if (color === "primary") {
          buttonRef.current.style.backgroundColor = "#6C59FF";
          buttonRef.current.style.color = "#FFFFFF";
        } else {
          buttonRef.current.style.backgroundColor = "rgba(108, 89, 255, 0.1)";
          buttonRef.current.style.color = "#6C59FF";
        }
      } else {
        if (size === "small") {
          buttonRef.current.style.padding = "8px 14px";
        } else {
          buttonRef.current.style.padding = "10px 18px";
        }
        if (color === "primary") {
          buttonRef.current.style.color = "#475467";
        }
      }
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`${className} rounded-lg`}
      onClick={onClick}
      disabled={disable}
    >
      <span className='flex flex-row items-center gap-2 text-inherit'>
        {startIcon && (
          <Image src={startIcon} alt='icon' className='w-5 h-auto' />
        )}
        {content && <span className='text-inherit'>{content}</span>}
        {endIcon && <Image src={endIcon} alt='icon' className='w-5 h-auto' />}
      </span>
    </button>
  );
}

export default Button;
