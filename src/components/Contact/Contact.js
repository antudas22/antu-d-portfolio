import React from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
        console.log(result)
          if(result.status === 200){
            toast.success('Message Sent')
          }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <div name='contact'>
            <h2 className='text-3xl my-10 ml-4'>Contact Me</h2>
            <div className='flex justify-center p-5'>
            <form onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#1D4786]">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="user_name" type="text" placeholder="Full Name" className="input input-bordered max-w-lg" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="user_email" type="email" placeholder="Email" className="input input-bordered max-w-lg" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="message" className="textarea textarea-bordered max-w-lg" placeholder="Message..." required></textarea>
        </div>
        <div className="form-control mt-6">
            <input className="btn max-w-lg text-white" type="submit" value="Submit" />
        </div>
      </div>
    </form>
            </div>
        </div>
    );
};

export default Contact;