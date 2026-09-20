/* Dependencies */
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { message } from "antd";
/* Local */
import styles from "./detail.module.css";
import cart from "../../assets/icons/cart4.svg";
import lightning_charge from "../../assets/icons/lightning-charge-fill.svg";
import star_fill from "../../assets/icons/star-fill.svg";
import nexoraIcon from "../../assets/ChatGPT Image 16 sept 2026, 09_15_10.png";
import suit_heart from "../../assets/icons/suit-heart-fill.svg";
import { useGame } from "../../hooks/useGame";
import { type Game,type Comments } from "../../context/gameContext/gameContext";
import { useUser } from "../../hooks/useUser";

export interface GameReview{
  comment:string;
}

function Detail(){
  const [favActive, setFavActive] = useState<boolean>(false);
  const [reviewCounter,setReviewCounter] = useState<number>(0);
  const {id} = useParams<{ id: string }>();
  const {games,getGame,agregarCarrito,updateGame} = useGame();
  const [gameInfo,setGameInfo] = useState<Game>();
  const {usuarioActual,usuarios} = useUser();

  useEffect(()=>{
    (function(){
      if(id){
        const game = getGame(id);
        setGameInfo(game);
      }
    })()
  },[id,games]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Comments>({
      defaultValues: {
      user_id:"",
      comment_date:new Date().toISOString().slice(0,16),
      comment:""
    }});
    
  
  const getUser = (id:string)=>{
    const userName = usuarios.find((u) => u.id === id);
    return userName;
  }

  const submit = (data:GameReview,lastReview:number)=>{
    if (!gameInfo) return;


    const newComment: Comments = {
      user_id: usuarioActual?.id ?? "",
      comment_date: new Date().toISOString().slice(0,16),
      comment: data.comment, // si tu tipo Comments lo incluye
      review: lastReview,
    };

    const updatedGame: Game = {
      ...gameInfo,
      comments: [...gameInfo.comments, newComment],
    };

    // actualizo el estado local
    setGameInfo(updatedGame);

    // actualizo el contexto/global con updateGame
    updateGame(updatedGame);

    setReviewCounter(0);
    console.log(updatedGame);

    message.success("¡Se ha publicado su reseña!");
  }

  const handleAddToCart = () => {
  if (!usuarioActual) {
    return message.info("Debe iniciar sesion para comprar");
  }

  if (!gameInfo) {
    return;
  }

  const agregado = agregarCarrito(gameInfo);

  if (agregado === false) {
    return message.info(
        "Este juego ya está en tu carrito"
    );
  }

  message.success(
      `${gameInfo.title} se agregó al carrito`
    );
};

  const handleFav = () => {
    console.log(favActive);
    setFavActive(!favActive);
  };

  return(
  <>
    <div className={styles["detail-container"]}>
      <div className={styles["wrapper"]}>    
        <main className={styles["product-container"]}>
          <div className={styles["product-image-container"]}>
            <img className={styles["product-image-container__img"]} src={gameInfo?.img_portrait} alt={gameInfo?.title}/>
          </div>
          <div className={styles["product-details"]}>
            <h2 className={styles["product-title"]}>{gameInfo?.title}</h2>
            <div className={styles["product-tags"]}>
              <span>
                <img src={nexoraIcon} alt="Nexora" className={styles["nexora-icon"]}/>
              </span>
              <span>PC</span>
              <span>Descarga digital</span>
            </div>
            <div className={styles["product-rating"]}>
              <span className={styles["stars"]}>
                {(() => {
                  if (!gameInfo?.comments || gameInfo.comments.length === 0) {
                    return "Sin reseñas todavía";
                  }
                  const total = gameInfo.comments.reduce((acc, c) => acc + (c.review ?? 0), 0);
                  const avg = total / gameInfo.comments.length;
                  const rounded = Math.round(avg);
                  const avgFormatted = avg.toFixed(1);
                  return `${avgFormatted} ${"★".repeat(rounded)}`;
                })()}
              </span>
              <a href="#">
                {gameInfo?.comments?.length ?? 0} reseñas
              </a>
              <Link to={"/404"}>Ver requisitos ?</Link>
            </div>
            <div className={styles["product-price"]}>
              <span className={styles["currency"]}>$</span>
              <span className={styles["amount"]}>{gameInfo?.price}</span>
              <span className={styles["iso"]}>ARS</span>
            </div>
            <p className={styles["points-text"]}>
              <img src={star_fill} alt="Puntos" className={styles["active-review"]}/>
              Sumas {gameInfo?.price} puntos
            </p>
            <div className={styles["product-actions"]}>
              <button
               id={styles["add-to-cart-btn"]} 
               className={styles["btn-add-cart"]}
               onClick={handleAddToCart}
              >
                <img src={cart} alt="Carrito" className={styles["icon-file icon-white"]} />
                <span className={styles["fuenteTitulo"]}>Añadir al carrito</span>
              </button>
              <button 
               id={styles["fav-btn"]}
               style={{
                display:usuarioActual?"":"none"
               }} 
               className={styles["btn-fav"]} 
               aria-label="Añadir a favoritos"
               onClick={handleFav}
               >
                <img 
                 src={suit_heart} 
                 alt="Favorito" 
                 className={favActive?styles["active-fav"]: styles["icon-file icon-heart"]} 
                />
              </button>
            </div>
            <div className={styles["info-box"]}>
              <div className={styles["info-item"]}>
                <img src={lightning_charge} alt="Entrega Inmediata" className={styles["icon-lightning"]}/>
                <div>
                  <strong className={styles["fuenteTitulo"]}>Entrega Inmediata</strong>
                  <p>Te llega por email en minutos</p>
                </div>
              </div>
              <div className={styles["payment-methods"]}>
                Pagás con: <span>Transferencia Bancaria</span> <span>Modo/QR</span>
              </div>
            </div>
          </div>
        </main>
        <section className={styles["reviews-section"]} id={styles["reseñas"]}>
          <h2 className={styles["fuenteTitulo"]}>Reseñas de los compradores</h2>
          <form 
           className={styles["review-form"]}
           style={{
            display: usuarioActual? "":"none"
           }} 
           onSubmit={handleSubmit((data)=> submit(data,reviewCounter))}
          >
            <h3 className={styles["fuenteTitulo"]}>Escribir una reseña</h3>
            <div className={styles["rating-picker"]}>
              <span className={styles["fuenteTitulo"]}>Tu puntuación:</span>
              <div className={styles["stars-input"]}>
                <img 
                 src={star_fill} 
                 alt="Estrella" 
                 onClick={()=> {
                  if(reviewCounter == 0){
                    setReviewCounter(1);
                  } else{
                    setReviewCounter(0);
                  }
                 }}
                 className={reviewCounter > 0?styles["active-review"]: styles["icon-file icon-star"] }
                />
                <img 
                 src={star_fill} 
                 alt="Estrella"
                 onClick={()=> setReviewCounter(2)} 
                 className={reviewCounter > 1?styles["active-review"]: styles["icon-file icon-star"] }
                />  
                <img 
                 src={star_fill} 
                 alt="Estrella"
                 onClick={()=> setReviewCounter(3)} 
                 className={reviewCounter > 2?styles["active-review"]: styles["icon-file icon-star"] }
                />
                <img 
                 src={star_fill} 
                 alt="Estrella"
                 onClick={()=> setReviewCounter(4)} 
                 className={reviewCounter > 3?styles["active-review"]: styles["icon-file icon-star"] }
                />
                <img 
                 src={star_fill} 
                 alt="Estrella"
                 onClick={()=> setReviewCounter(5)} 
                 className={reviewCounter > 4?styles["active-review"]: styles["icon-file icon-star"] }
                />
              </div>
            </div>
            
            <h2 className={styles["fuenteTitulo"]}>{usuarioActual?.nombre}</h2>

            <textarea 
             maxLength={102}
             placeholder="¿Qué te pareció el juego o el servicio?" 
             className={styles["review-textarea"]} rows={3}
             {...register("comment",{
              maxLength:{
                value:100,
                message:"Has excedido el maximo de 100 caracteres"
              }
             })}
            >
            </textarea>
            {errors.comment && <span className={styles["error"]}>{errors.comment.message}</span>}
            <button 
             type="submit" 
             id={styles["btn-submit-review"]} 
             className={styles["btn-submit-review"]}
             >Publicar reseña</button>
          </form>
          <div className={styles["reviews-list"]} id="reseña">
            {gameInfo?.comments && gameInfo.comments.length > 0 ? (
              gameInfo.comments
                .slice(-5) // toma los últimos 5
                .map((m, index) => (
                  <div key={index} className={styles["review-card"]}>
                    <div className={styles["review-header"]}>
                      <strong className={styles["fuenteTitulo"]}>
                        {getUser(m.user_id)?.nombre ?? "Usuario desconocido"}
                      </strong>
                      <span className={styles["review-stars"]}>{"★".repeat(m.review ?? 0)}</span>
                    </div>
                    <span className={styles["review-date"]}>
                      {"publicado el " + m.comment_date}
                    </span>
                    <p className={styles["review-comment"]}>{m.comment}</p>
                  </div>
                ))
            ) : (
              <span className={styles["fuenteTitulo"]}>
                No hay comentarios todavía, sé el primero
              </span>
            )}
            
            {/* <div className={styles["review-card"]}>
              <div className={styles["review-header"]}>
                <strong className={styles["fuenteTitulo"]}>Lucía R.</strong>
                <span className={styles["review-stars"]}>★★★★★</span>
              </div>
              <span className={styles["review-date"]}>Hace 1 semana</span>
              <p className={styles["review-comment"]}>Todo perfecto, pagué con transferencia y la activación en Nexora fue instantánea.</p>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  </>
 );
}

export default Detail;