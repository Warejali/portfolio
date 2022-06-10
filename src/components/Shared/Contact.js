import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_47zk8mk', 'template_709ymig', form.current, 'oUnOxuG4twlmjlWEi')
            .then((result) => {
                console.log(result.text);
                toast.success("Message has been sent")
            }, (error) => {
                console.log(error.text);

            });

    };

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100 max-w-md">
                    <div class="card-body">
                        <form ref={form} onSubmit={sendEmail}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" name='user_name' placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" name='user_email' placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea name='message' class="textarea textarea-bordered" placeholder="Type Your Message"></textarea>
                            </div>
                            <div class="form-control mt-6">
                                <input class="btn btn-primary" type="submit" value="send" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;