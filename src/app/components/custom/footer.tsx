import { PROJECT_NAME } from "@/config";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {PROJECT_NAME}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
