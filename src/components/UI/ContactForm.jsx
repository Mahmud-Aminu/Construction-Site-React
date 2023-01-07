import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./ContactForm.module.css";
import Modal from "../UI/Modal";
import { Close, Done } from "@mui/icons-material";

const Message = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.contact_Modal}>{props.message}</div>
    </Modal>
  );
};

const ContactForm = (props) => {
  const [showModal, closeModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  // EmailJSResponseStatus
  const handleCloseModal = () => closeModal(false);
  const errorModalHandle = () => setErrorModal(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_ID
      )
      .then(
        (result) => {
          closeModal(true);
          console.log(result.text);
        },
        (error) => {
          setErrorModal(!errorModal);
          console.log(error.text);
        }
      );
  };
  const successText = (
    <h5>
      Successfully submitted
      <button onClick={props.onClose} className={classes.btn}>
        <Done fontSize="small" />
      </button>
    </h5>
  );
  const errorText = (
    <h5 style={{ color: "red" }}>
      Error, Please try again leter <Close fontSize="small" />
    </h5>
  );
  return (
    <>
      {showModal && (
        <Message message={successText} onClose={handleCloseModal} />
      )}
      {errorModal && <Message message={errorText} onClose={errorModalHandle} />}
      <form ref={form} onSubmit={sendEmail} className={classes.form}>
        <input
          type="text"
          placeholder="Enter your name here"
          name="user_name"
          required
        />
        <input
          type="email"
          placeholder="Enter your valid email address"
          name="user_email"
          required
        />
        <textarea
          placeholder="Tell us about your project"
          name="message"
          required
        ></textarea>
        <button className={classes.button} type="submit" value="Send">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
