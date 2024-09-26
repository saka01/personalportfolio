import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const EmailPrompt = () => {
  const router = useRouter();

  return (
    <>
      <Link href="/resume.pdf" className="icon-container">
        {" "}
        View My Resume
      </Link>
    </>
  );
};

export default EmailPrompt;
