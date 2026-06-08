import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./ContactForm.module.css";

const services = [
  "Civil Engineering Construction",
  "Structural Design",
  "Construction",
  "Project Consultancy",
  "Quantity Surveying",
  "Project Supervision",
  "Other Service"
];

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [errors, setErrors] = useState({});

  // Honeypot spam protection field state
  const [honeypot, setHoneypot] = useState("");

  const validateForm = () => {
    const tempErrors = {};
    const formData = new FormData(form.current);

    const userName = formData.get("user_name").trim();
    const userEmail = formData.get("user_email").trim();
    const userPhone = formData.get("user_phone").trim();
    const serviceNeeded = formData.get("service_needed");
    const message = formData.get("message").trim();

    if (!userName) tempErrors.userName = "Name is required";
    if (!userEmail) {
      tempErrors.userEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      tempErrors.userEmail = "Please enter a valid email";
    }
    if (!userPhone) {
      tempErrors.userPhone = "Phone number is required";
    } else if (!/^[+]?[0-9\s-]{7,15}$/.test(userPhone)) {
      tempErrors.userPhone = "Please enter a valid phone number";
    }
    if (!serviceNeeded) tempErrors.serviceNeeded = "Please select a service";
    if (!message) {
      tempErrors.message = "Message is required";
    } else if (message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
console.log({
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});
    // Spam Honeypot validation
    if (honeypot) {
      console.warn("Spam detected");
      setStatus("success"); // Mimic success state to confuse spam bots
      return;
    }

    if (!validateForm()) return;

    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_default",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_default",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_ID || "public_default"
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("EmailJS Error: ", error.text);
        }
      );
  };

  return (
    <div className={classes.formContainer}>
      {status === "success" && (
        <div className={`${classes.alert} ${classes.alertSuccess}`} role="alert">
          <svg className={classes.alertIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <div>
            <h4 className={classes.alertTitle}>Consultation Requested!</h4>
            <p className={classes.alertText}>Thank you. We will get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className={`${classes.alert} ${classes.alertError}`} role="alert">
          <svg className={classes.alertIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <div>
            <h4 className={classes.alertTitle}>Submission Failed</h4>
            <p className={classes.alertText}>Please check your connection and try again.</p>
          </div>
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className={classes.form} noValidate>
        {/* Honeypot field (hidden from users) */}
        <div className={classes.hiddenField} aria-hidden="true">
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex="-1"
            placeholder="Do not fill this out if you are human"
          />
        </div>

        <div className={classes.inputGroup}>
          <label htmlFor="user_name" className={classes.label}>Full Name</label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            placeholder="E.g., John Doe"
            required
            disabled={loading}
            className={`${classes.input} ${errors.userName ? classes.inputInvalid : ""}`}
          />
          {errors.userName && <span className={classes.errorText} role="alert">{errors.userName}</span>}
        </div>

        <div className={classes.inputGroup}>
          <label htmlFor="user_email" className={classes.label}>Email Address</label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            placeholder="E.g., john@example.com"
            required
            disabled={loading}
            className={`${classes.input} ${errors.userEmail ? classes.inputInvalid : ""}`}
          />
          {errors.userEmail && <span className={classes.errorText} role="alert">{errors.userEmail}</span>}
        </div>

        <div className={classes.inputGroup}>
          <label htmlFor="user_phone" className={classes.label}>Phone Number</label>
          <input
            id="user_phone"
            name="user_phone"
            type="tel"
            placeholder="E.g., +234 803 123 4567"
            required
            disabled={loading}
            className={`${classes.input} ${errors.userPhone ? classes.inputInvalid : ""}`}
          />
          {errors.userPhone && <span className={classes.errorText} role="alert">{errors.userPhone}</span>}
        </div>

        <div className={classes.inputGroup}>
          <label htmlFor="service_needed" className={classes.label}>Service Needed</label>
          <select
            id="service_needed"
            name="service_needed"
            required
            disabled={loading}
            defaultValue=""
            className={`${classes.select} ${errors.serviceNeeded ? classes.selectInvalid : ""}`}
          >
            <option value="" disabled>Select a service...</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          {errors.serviceNeeded && <span className={classes.errorText} role="alert">{errors.serviceNeeded}</span>}
        </div>

        <div className={classes.inputGroup}>
          <label htmlFor="message" className={classes.label}>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project requirements..."
            required
            disabled={loading}
            className={`${classes.textarea} ${errors.message ? classes.textareaInvalid : ""}`}
          />
          {errors.message && <span className={classes.errorText} role="alert">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className={`${classes.submitBtn} ${loading ? classes.submitBtnLoading : ""}`}
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className={classes.spinner} viewBox="0 0 24 24" fill="none">
                <circle className={classes.spinnerTrack} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className={classes.spinnerArc} fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            "Request Consultation"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
