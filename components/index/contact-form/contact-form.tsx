import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { emailJSCredentials } from "../../../email-js-credentials";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styles from "./contact-form.module.scss";

const ContactForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send(
        emailJSCredentials.serviceID,
        emailJSCredentials.templateID,
        templateParams,
        emailJSCredentials.userID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="ContactForm">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col8}>
            <h2>Contact form title</h2>
          </div>
        </div>

        <div className="contactForm">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Row 1 of form */}
            <div className={styles.grid}>
              <div className={styles.col4}>
                <input
                  type="text"
                  name="name"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or less",
                    },
                  })}
                  className={styles.forminput}
                  placeholder="Name"
                ></input>
                {errors.name && (
                  <span className="errorMessage">{errors.name.message}</span>
                )}
              </div>
              <div className={styles.col4}>
                <input
                  type="email"
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className={styles.forminput}
                  placeholder="Email address"
                ></input>
                {errors.email && (
                  <span className="errorMessage">
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>
            {/* Row 2 of form */}
            <div className={styles.grid}>
              <div className={styles.col8}>
                <input
                  type="text"
                  name="subject"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please enter a subject",
                    },
                    maxLength: {
                      value: 75,
                      message: "Subject cannot exceed 75 characters",
                    },
                  })}
                  className={styles.forminput}
                  placeholder="Subject"
                ></input>
                {errors.subject && (
                  <span className="errorMessage">{errors.subject.message}</span>
                )}
              </div>
            </div>
            {/* Row 3 of form */}
            <div className={styles.grid}>
              <div className={styles.col8}>
                <textarea
                  rows={3}
                  name="message"
                  ref={register({
                    required: true,
                  })}
                  className="form-control formInput"
                  placeholder="Message"
                ></textarea>
                {errors.message && (
                  <span className="errorMessage">Please enter a message</span>
                )}
              </div>
            </div>
            <button className={styles.submitbtn} type="submit">
              Submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
