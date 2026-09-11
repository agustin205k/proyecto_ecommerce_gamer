/* Dependencies */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Toaster,toast } from "sonner";
import { useEffect, useState } from "react";

/* Local */
import styles from "./register.module.css";
import imgVisual from "../../assets/imgs/joystick.png";

interface User {
  name:string;
  mail:string;
  password:string;
}

function Register(){
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<User>();

  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
  }, []);

  const submit = (data:User) => {
    const newData = {...data,id:uuidv4()};
    console.log(newData);
    /* Aqui debe hacerse la verificacion de usuarios para que no hayan multiples usuarios */
    toast.success("Usuario registrado correctamente",{
      style: {
        backgroundColor: "var(--color-card)",
        border: "1px solid #2e7d32"
      },
      duration:800
    });
    resetField("name");
    resetField("mail");
    resetField("password");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

 return(
  <>
    <main className={styles.register}>
      <div className={styles.register__visual}>
        <picture className={styles.register__visual__imgContainer}>
          <img src={imgVisual} alt="" className={styles.register__visual__img} />
        </picture>
        <h2 className={styles.register__visual__title}>Unete a la Comunidad</h2>
        <p className={styles.register__visual__message}>
          Guarda tus juegos favoritos.<br />
          accede a reseñas y mucho más.
        </p>
      </div>
      <div className={styles.register__formContainer}>
        <h2 className={styles.register__title}>Crear una cuenta</h2>
        <form className={styles.register__form} onSubmit={handleSubmit(submit)}>
          <div className={styles.register__form__row}>
            <input 
            minLength={4} maxLength={20} 
            type="text"
            autoComplete={isMobile? "off": "username"} 
            placeholder="Nombre" 
            className={[styles.register__form__input,
              styles.register__form__nombre,
              errors.name && styles.register__form__error].join(" ")}
            {...register("name",{ 
              required:{
                value:true,
                message:"Debe colocar su nombre"
              },
              minLength: {
                value: 4,
                message: "Como minimo 4 caracteres"
              },
              maxLength: {
                value: 16,
                message: "No exceda los 16 caracteres"
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/,
                message: "Solo letras y números"
              }
            })}
            />
            {errors.name && <span className={[styles.register__form__error,styles.register__form__errorSpan].join(" ")}>{errors.name.message}</span>}
          </div>
          <div className={styles.register__form__row}>
            <input 
            maxLength={28}
            type="text"
            autoComplete={isMobile? "off": "email"} 
            placeholder="Correo" 
            className={[styles.register__form__input,
              styles.register__form__correo,
              errors.mail && styles.register__form__error].join(" ")}
            {...register("mail",{ 
              required:{
                value:true,
                message:"Debe colocar su correo"
              },
              maxLength: {
                value: 24,
                message: "No exceda los 24 caracteres"
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+$/,
                message: "Debe contener un @"
              }
            })}
            />
            {errors.mail && <span className={[styles.register__form__error,styles.register__form__errorSpan].join(" ")}>{errors.mail.message}</span>}
          </div>
          <div className={styles.register__form__row}>
            <input
            minLength={4} maxLength={20} 
            type="text"
            autoComplete={isMobile? "off": "new-password"} 
            placeholder="Contraseña" 
            className={[styles.register__form__input,
              styles.register__form__contraseña,
              errors.password && styles.register__form__error].join(" ")} 
            {...register("password",{ 
              required:{
                value:true,
                message:"Debe colocar su contraseña"
              },
              minLength: {
                value: 4,
                message: "Como minimo 4 caracteres"
              },
              maxLength: {
                value: 16,
                message: "No exceda los 16 caracteres"
              },
            })}
            />
            {errors.password && <span className={[styles.register__form__error,styles.register__form__errorSpan].join(" ")}>{errors.password.message}</span>}
          </div>
          <div className={[styles["register__form__row"],styles["register__form__row--button"]].join(" ")}>
            <button type="submit">Registrarse</button>
            <span>¿Ya tenés una cuenta?, <Link to={"/login"}>Inicia sesión</Link></span>
          </div>
        </form>
      </div>
      <Toaster position="bottom-right" richColors/>
    </main>
  </>
 );
}

export default Register;