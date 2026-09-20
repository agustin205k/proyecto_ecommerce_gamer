/* Dependencies */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
/* import { Toaster, toast } from "sonner"; */

/* Local */
import styles from "./register.module.css";
import imgVisual from "../../assets/imgs/joystick.png";
import { UserContext } from "../../context/userContext/userContext";
import openEye from "../../assets/icons/open_eye.png";
import closedEye from "../../assets/icons/closed_eye.png";

interface User {
  name: string;
  mail: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const {usuarios, registrarUsuario } = useContext(UserContext);
  const [showPassword,setShowPassword] = useState<boolean>(true);
  const [showConfirmPassword,setShowConfirmPassword] = useState<boolean>(true);
  const [generalError,setGeneralError] = useState<string>("");

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<User>();

  const navigate = useNavigate();

  const submit = (data: User) => {

    const existeUsuario = usuarios.some(u => u.nombre === data.name || u.email === data.mail);
    if(existeUsuario){
      setGeneralError("Ese usuario o email ya existe");
      return;
    }

    const newData = {
      id: uuidv4(),
      nombre: data.name,
      email: data.mail,
      password: data.password,
      rol: "visitante" as const,
    };

    registrarUsuario(newData);


    console.log(newData);
    resetField("name");
    resetField("mail");
    resetField("password");
    resetField("confirmPassword");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <main className={styles.register}>
        <div className={styles.register__visual}>
          <picture className={styles.register__visual__imgContainer}>
            <img
              src={imgVisual}
              alt=""
              className={styles.register__visual__img}
            />
          </picture>
          <h2
            className={[styles.register__visual__title, styles.titulos].join(
              " ",
            )}
          >
            Unete a la Comunidad
          </h2>
          <p
            className={[styles.register__visual__message, styles.texto].join(
              " ",
            )}
          >
            Guarda tus juegos favoritos.
            <br />
            accede a reseñas y mucho más.
          </p>
        </div>
        <div className={styles.register__formContainer}>
          <h2 className={[styles.register__title, styles.titulos].join(" ")}>
            Crear una cuenta
          </h2>
          <form
            className={styles.register__form}
            onSubmit={handleSubmit(submit)}
          >
            <div className={styles.register__form__row}>
              <input
                minLength={4}
                maxLength={20}
                type="text"
                autoComplete="off"
                placeholder="Nombre"
                className={[
                  styles.texto,
                  styles.register__form__input,
                  styles.register__form__nombre,
                  errors.name && styles.register__form__error,
                ].join(" ")}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Debe colocar su nombre",
                  },
                  minLength: {
                    value: 4,
                    message: "Como minimo 4 caracteres",
                  },
                  maxLength: {
                    value: 16,
                    message: "No exceda los 16 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Solo letras y números",
                  },
                })}
              />
              {errors.name && (
                <span
                  className={[
                    styles.register__form__error,
                    styles.register__form__errorSpan,
                  ].join(" ")}
                >
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className={styles.register__form__row}>
              <input
                maxLength={28}
                type="text"
                autoComplete="off"
                placeholder="Correo"
                className={[
                  styles.texto,
                  styles.register__form__input,
                  styles.register__form__correo,
                  errors.mail && styles.register__form__error,
                ].join(" ")}
                {...register("mail", {
                  required: {
                    value: true,
                    message: "Debe colocar su correo",
                  },
                  maxLength: {
                    value: 24,
                    message: "No exceda los 24 caracteres",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+$/,
                    message: "Debe contener un @",
                  },
                })}
              />
              {errors.mail && (
                <span
                  className={[
                    styles.register__form__error,
                    styles.register__form__errorSpan,
                  ].join(" ")}
                >
                  {errors.mail.message}
                </span>
              )}
            </div>
            <div className={styles.register__form__row}>
              <input
                minLength={4}
                maxLength={20}
                type={showPassword?"password":"text"}
                autoComplete="off"
                placeholder="Contraseña"
                className={[
                  styles.texto,
                  styles.register__form__input,
                  styles.register__form__contraseña,
                  errors.password && styles.register__form__error,
                ].join(" ")}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Debe colocar su contraseña",
                  },
                  minLength: {
                    value: 4,
                    message: "Como minimo 4 caracteres",
                  },
                  maxLength: {
                    value: 16,
                    message: "No exceda los 16 caracteres",
                  },
                })}
              />
              <img 
                className={styles.iconEye} 
                src={showPassword? openEye : closedEye} 
                alt={showPassword? "mostrar constraseña" : "ocultar contraseña"}
                title={showPassword? "mostrar constraseña" : "ocultar contraseña"}
                onClick={() => showPassword? setShowPassword(false):setShowPassword(true)}
              />
              {errors.password && (
                <span
                  className={[
                    styles.register__form__error,
                    styles.register__form__errorSpan,
                  ].join(" ")}
                >
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className={styles.register__form__row}>
              <input
                minLength={4}
                maxLength={20}
                type={showConfirmPassword?"password":"text"}
                autoComplete="off"
                placeholder="Confirmar contraseña"
                className={[
                  styles.texto,
                  styles.register__form__input,
                  styles.register__form__contraseña,
                  errors.confirmPassword && styles.register__form__error,
                ].join(" ")}
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Debe confirmar su contraseña",
                  },
                  minLength: {
                    value: 4,
                    message: "Como mínimo 4 caracteres",
                  },
                  maxLength: {
                    value: 16,
                    message: "No exceda los 16 caracteres",
                  },
                  validate: (value) =>
                    value === getValues("password") || "Las contraseñas no coinciden",
                })}
              />
              <img 
                className={styles.iconEye} 
                src={showConfirmPassword? openEye : closedEye} 
                alt={showConfirmPassword? "mostrar constraseña" : "ocultar contraseña"}
                title={showConfirmPassword? "mostrar constraseña" : "ocultar contraseña"}
                onClick={() => showConfirmPassword? setShowConfirmPassword(false):setShowConfirmPassword(true)}
              />
              {errors.confirmPassword && (
                <span
                  className={[
                    styles.register__form__error,
                    styles.register__form__errorSpan,
                  ].join(" ")}
                >
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div
              className={[
                styles["register__form__row"],
                styles["register__form__row--button"],
                styles["titulos"],
              ].join(" ")}
            >
              {generalError && <span className={styles.generalError} >{generalError}</span>}
              <button className={styles.register__form__button} type="submit" onClick={() => setGeneralError("")}>
                Registrarse
              </button>
              <span className={styles.texto}>
                ¿Ya tenés una cuenta?, <Link to={"/login"}>Inicia sesión</Link>
              </span>
            </div>
          </form>
        </div>
        {/* <Toaster position="bottom-right" richColors /> */}
      </main>
    </>
  );
}

export default Register;
