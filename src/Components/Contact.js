import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lcyyzo9', 'template_40h5cxw', form.current, 'REFEoPlPTmbAmpd1O')
			.then((result) => {
				if (result.status === 200) {
					toast.success("I got your message. I'll contact you soon. 💌")
					e.target.reset()
				}
				
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contact'>
      <section className="py-6  bg-gradient-to-tr from-lime-200 to-lime-400 text-gray-900">
      <h1 className="text-4xl font-bold mt-5 mb-12 text-center">Get in touch</h1>
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Chandpur, Bangladesh</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+08801748979987</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>salma.akter979987@gmail.com</span>
				</p>
			</div>
		</div>
		<form  ref={form} onSubmit={sendEmail}  className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" name='user_name' placeholder="Your Name" className="block w-full rounded-md py-3 px-5 focus:outline-none" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" name='user_email' placeholder="example@gmail.com" className="block w-full rounded-md py-3 px-5 focus:outline-none" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" name='message' placeholder='Leave a message' className="block w-full rounded-md px-5 py-3 focus:outline-none bg-gray-100"></textarea>
			</label>
			<input type="submit" value="Submit" className="self-center text-lg rounded-lg px-12 btn"/>
		</form>
	</div>
</section>
    </div>
  );
};

export default Contact;
