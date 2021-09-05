import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { FaUserAlt, FaRegistered } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { loggedIn } = useAuth();
  console.log(loggedIn);
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          Bewerly Store
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link style={{ marginTop: "-2px" }} to="/">
              Tüm ürünler
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {!loggedIn && (
          <>
            <Link to={"/login"}>
              <Button
                leftIcon={<FaUserAlt />}
                colorScheme="teal"
                variant="solid"
              >
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
          </>
        )}

        {loggedIn && (
          <>
            <Button leftIcon={<FaUserAlt />} colorScheme="teal" variant="solid">
              Profil
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
