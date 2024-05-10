import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const Contacts = () => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Show loading toast
      toast("Sending Email...", {
        duration: 2000,
        position: "top-center",
        icon: "⏳",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
        theme: {
          loading: {
            primary: "green",
            secondary: "yellow",
          },
        },
      });

      emailjs
        .sendForm(
          "service_u93l038",
          "template_4grnx28",
          form.current,
          "qOflpMzk_ImuzmC8e"
        )
        .then(
          () => {
            // Show success toast
            toast("Email Sent Successfully!", {
              duration: 4000,
              position: "top-center",
              icon: "👏",
              ariaProps: {
                role: "status",
                "aria-live": "polite",
              },
              theme: {
                success: {
                  primary: "white",
                  secondary: "blue",
                },
              },
            });

            e.target.reset();
          },
      );
    } catch (error) {
      // Show error toast
      toast(`Failed to Send Email. Please try again. ${error}`, {
        duration: 4000,
        position: "top-center",
        icon: "❌",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
        theme: {
          error: {
            primary: "red",
            secondary: "white",
          },
        },
      });
    }
   
  };
 
  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>abebetizazu157@gmail.com</h5>
            <a href="mailto:abebetizazu157@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="user__name"
            placeholder="Your Full Name"
            required
          />{" "}
          {/* client side validation */}
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts