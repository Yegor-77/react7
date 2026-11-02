
// import { useState } from "react";

// function RegisterModal({ onClose, onRegister }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   function submit(event) {
//     event.preventDefault();

//     if (!name.trim() || !email.trim()) return;

//     onRegister(name.trim());
//   }

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <form
//         className="modal"
//         onSubmit={submit}
//         onClick={(event) => event.stopPropagation()}
//       >
//         <button
//           type="button"
//           className="modal-close"
//           onClick={onClose}
//           aria-label="Закрити"
//         >
//           ×
//         </button>

//         <span className="modal-icon">☀</span>
//         <h2>Ласкаво просимо!</h2>
//         <p>Створи свій профіль SkyCast</p>

//         <label htmlFor="user-name">Твоє ім'я</label>
//         <input
//           id="user-name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           placeholder="Наприклад, Yehor"
//           required
//         />

//         <label htmlFor="user-email">Електронна пошта</label>
//         <input
//           id="user-email"
//           type="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           placeholder="you@example.com"
//           required
//         />

//         <button className="primary-button" type="submit">
//           Зареєструватися
//         </button>

//         <small>
//           Це демонстраційна реєстрація, без створення акаунта на сервері.
//         </small>
//       </form>
//     </div>
//   );
// }

// export default RegisterModal;
