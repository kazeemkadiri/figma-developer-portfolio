"use client";

import { useEffect, useState } from "react";
import "./styles/Contact.scss";

const FORM_FIELDS = {
    NAME: "name",
    EMAIL: "email",
    MESSAGE: "message"
};

const INPUT_TYPES = {
    TEXT: "text",
    TEXTAREA: "textarea"
}

const formFieldsInput = ["name", "email"];
const formFieldsTextAreas = ["message"];

const Contact = () => {
  const [errors, setErrors] = useState([]);

  const isNotEmpty = (contentValue) => (contentValue.length > 0);

  const isValidEmail = (inputString) => {
    return new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm").test(inputString);
  }

  const resetErrors = () => setErrors([]);

  // Responsible for making the input fields label visible or hidden
  useEffect(() => {
    //Reference all inputs and add keyup listeners to all
    formFieldsInput.forEach((formField) => {
        document.querySelector(`input[name="${ formField }"]`).addEventListener("keyup", e => {   
            
            validateUserInput(formField, INPUT_TYPES.TEXT);

            if(isNotEmpty(e.target.value)){
                // Hide their label if the input value length is greater than 0
                document.querySelector(`label#${ formField }`).style.visibility = "hidden";
            }else{
                // Show Label if input value length equals 0
                document.querySelector(`label#${ formField }`).style.visibility = "visible";
            }
        })
    })

    //Reference all textareas and add keyup listeners to all
    formFieldsTextAreas.forEach((formField) => {
        document.querySelector(`textarea[name="${ formField }"]`).addEventListener("keyup", e => {            

            validateUserInput(formField, INPUT_TYPES.TEXTAREA);

            if(isNotEmpty(e.target.value)){
                // Hide their label if the input value length is greater than 0
                document.querySelector(`label#${ formField }`).style.visibility = "hidden";
            }else{
                // Show Label if input value length equals 0
                document.querySelector(`label#${ formField }`).style.visibility = "visible";
            }
        })
    })
  },[]);

  const validateUserInput = (formField, inputType) => {
    resetErrors();
    const formFieldsInput = [];
    const formFieldsTextAreas = [];

    if(inputType === INPUT_TYPES.TEXT){
        formFieldsInput.push(formField);
    }else{
        formFieldsTextAreas.push(formField);
    }

    formFieldsInput.forEach(formField => {
        switch(formField){
            case FORM_FIELDS.NAME:
                const nameField = document.querySelector(`input[name="${ FORM_FIELDS.NAME }"]`);
                
                // Remove previous state if any
                nameField.classList.remove("valid");
                nameField.classList.remove("invalid");

                if(isNotEmpty(nameField.value)){
                    // Adds a green border to the bottom of the input field
                    nameField.classList.add("valid");
                }else{
                    // Adds a red border to the bottom of the input field
                    nameField.classList.add("invalid");
                    
                    // Adds the name field to the error list
                    setErrors((prev) => ([...prev, FORM_FIELDS.NAME]));
                }
            break;
            case FORM_FIELDS.EMAIL:
                const emailField = document.querySelector(`input[name="${ FORM_FIELDS.EMAIL }"]`);
                
                // Remove previous state if any
                emailField.classList.remove("valid");
                emailField.classList.remove("invalid");

                if(isValidEmail(emailField.value)){
                    // Adds a green border to the bottom of the input field
                    emailField.classList.add("valid");
                }else{
                    // Adds a red border to the bottom of the input field
                    emailField.classList.add("invalid");
                    
                    // Adds the email field to the error list
                    setErrors((prev) => ([...prev, FORM_FIELDS.EMAIL]));
                }
            break;
            default:
            break;
        }
    });

    formFieldsTextAreas.forEach(textArea => {
        switch(textArea){
            case FORM_FIELDS.MESSAGE:
                const messageField = document.querySelector(`textarea[name=${ FORM_FIELDS.MESSAGE }]`);

                // Remove previous state if any
                messageField.classList.remove("valid");
                messageField.classList.remove("invalid");

                if(isNotEmpty(messageField.value)){
                    // Adds a green border to the bottom of the textArea field
                    messageField.classList.add("valid");
                }else{
                    // Adds a red border to the bottom of the textArea field
                    messageField.classList.add("invalid");
                    
                    // Adds the message field to the error list
                    setErrors((prev) => ([...prev, FORM_FIELDS.MESSAGE]));
                }
            break;
            default:
            break;
        }
    })

    return errors;
  }

  // Handle form validation on submit
  const handleSubmit = () => {
    // Validate all fields
    validateUserInput();

    // Display errors if any
    if(errors.length) return;

    // If no errors, continue other processes from here
  }

  return (
    <main id="contact-me" className="w-full relative contact bg-[var(--site-dark-grey)] px-4 md:px-[10.125rem] flex justify-center flex-col lg:flex-row lg:justify-between lg:pt-[3.75rem] lg:px-[var(--container-padding-desktop)]">
        <section className=" mt-[3.75rem] md:w-full lg:w-[39%] lg:mt-[12.4%] lg:flex lg:flex-col lg:justify-start">
            <h3 className="text-white text-[2rem] text-center md:text-[4rem] md:font-bold lg:text-[5.5rem] lg:text-start lg:leading-1">Contact</h3>
            <p className="text-[var(--site-grey)] text-base text-center mt-[1.25rem] lg:text-start lg:text-[1.2rem]">
                I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.
            </p>
        </section>
        

        <form autoComplete="off" className="mt-[3.125rem] md:w-full lg:w-[39%] lg:mt-[16%]">
            {/* Name Field */}
            <div className="mb-[2rem] flex flex-col relative">
                <label htmlFor="name" id="name" className="text-[var(--site-grey)] text-base pl-[1rem] relative">NAME</label>
                <input type="text" name={ FORM_FIELDS.NAME } className="border-b-[1px] border-solid border-[var(--site-grey)] focus-visible:outline-0 text-[var(--site-grey)] !bg-transparent relative indent-[1rem]" />
            </div>

            {/* Email Field */}
            <div className="mb-[1.2rem] flex flex-col relative">
                <label htmlFor="email" id="email" className="text-[var(--site-grey)] pl-[1rem] relative">EMAIL</label>
                <input type="email" name={ FORM_FIELDS.EMAIL } className="border-b-[1px] border-solid border-[var(--site-grey)] focus-visible:outline-0 text-[var(--site-grey)] !bg-transparent relative indent-[1rem]" />

                {/* This is shown on failed email validation */}
                {
                    errors.includes(FORM_FIELDS.EMAIL) &&
                    <section className="w-full absolute bottom-[2.5rem] flex justify-end z-50">
                        <div className="w-[1.5rem] h-[1.5rem] rounded-full border-solid border-[1px] border-[var(--site-red)] flex justify-center items-center text-[var(--site-red)] font-semibold">!</div>
                    </section>
                }

                {
                    errors.includes(FORM_FIELDS.EMAIL) &&
                    <span className="w-full mt-[5px] text-[var(--site-red)] text-end text-[0.75rem]">Sorry, invalid format here</span>
                }
            </div>

            {/* Message Field */}
            <div className="mb-[2rem] flex flex-col relative">
                <label htmlFor="message" id="message" className="text-[var(--site-grey)] pl-[1rem] relative">MESSAGE</label>
                <textarea name={ FORM_FIELDS.MESSAGE } rows="4" className="border-b-[1px] border-solid border-[var(--site-grey)] focus-visible:outline-0 text-[var(--site-grey)] !bg-transparent relative indent-[1rem]"></textarea>
            </div>

            <div className="mb-[5.4375rem] flex justify-end ">
                <span className="border-[var(--site-green)] border-solid border-b-[2px] text-white w-auto hover:text-[var(--site-green)] hover:cursor-pointer" onClick={handleSubmit}>SEND MESSAGE</span>
            </div>
            
        </form>

          {/* Rings image */}
          <img src="/images/pattern-rings.svg" className="z-10 absolute h-[7.095rem] bottom-[5.6rem] translate-x-[-53%] md:left-[10rem] md:bottom-[0rem] md:top-initial md:translate-x-[-100%] md:h-[6.9rem] lg:min-h-[129px] lg:translate-x-[54%] lg:left-[-37.86%]" alt="Pattern Rings image" />
        
    </main>
  )
}

export default Contact