import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { FaUserAlt, FaRegistered } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link to="/">eCommerce</Link>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Tüm ürünler</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to={"/login"}>
          <Button leftIcon={<FaUserAlt />} colorScheme="teal" variant="solid">
            Giriş yap
          </Button>
        </Link>
        <Link to={"/register"}>
          <Button
            leftIcon={<FaRegistered />}
            colorScheme="teal"
            variant="solid"
          >
            Kayıt ol
          </Button>
        </Link>
      </div>
    </nav>
  );
}
