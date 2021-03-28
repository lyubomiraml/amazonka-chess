import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import CustomButton from "../../custom-button/custom-button";
import "react-toastify/dist/ReactToastify.min.css";
import TextareaAutosize from "react-autosize-textarea";
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
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.contact_form_section}>
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
                className={styles.form_input}
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
                className={styles.form_input}
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
                className={styles.form_input}
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
              <TextareaAutosize
                rows={3}
                name="message"
                ref={register({
                  required: true,
                })}
                className={styles.form_textarea}
                placeholder="Message"
              />
              {errors.message && (
                <span className="errorMessage">Please enter a message</span>
              )}
            </div>
          </div>
          <CustomButton href="" className="contact_form_btn" type="submit">
            Submit
          </CustomButton>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
