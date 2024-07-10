import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { EarthCanvas } from './canvas';
import { styles } from '../styles';
import { Wrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Rohit",
        from_email: form.email,
        to_email: "rohitsingh6264377590@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_API_KEY
    ).then(() => {
      setLoading(false),
        alert("Thankyou. I will get back to you as soon as possible");
      setForm({ name: '', email: '', message: '', });

    }, (error) => {
      setLoading(false)
      console.log(error)
      alert("Something went wrong.")
    });



  }

  return (
    <section className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.8] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label htmlFor="name" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6"
            />
          </label>
          <label htmlFor="email" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              required
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6"
            />
          </label>
          <label htmlFor="message" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              style={{ resize: 'none' }}
              rows={7}
              resize='none'
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6"
            />
          </label>

          <button
            type="submit"
            className="min-w-fit h-fit bg-tertiary py-3 px-8 font-bold shadow-md shadow-primary
            text-white outline-none rounded-lg"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>




      </motion.div>

      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />

      </motion.div>

    </section>
  )

};

export default Wrapper(Contact, 'contact');
