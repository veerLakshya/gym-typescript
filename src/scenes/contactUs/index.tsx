import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyles = `w-full rounded-lg bg-primary-300 mb-5 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const OnSubmit = async(e:any)=> {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
            console.log("Form is unvalid")
        }
    }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
            {/* Header */}
            <motion.div
            className="md:w-3/5"
            initial="hidden" whileInView="visible"
            viewport={{ amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}>
                <HText>
                    <span className="text-primary-500">JOIN NOW</span> TO GET THE BODY YOU DESIRE
                </HText>
                <p className="my-5">
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.
                </p>
            </motion.div>
            {/* Form and image */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0"
                initial="hidden" whileInView="visible"
                viewport={{ amount: 0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, y:50},
                    visible:{opacity:1, y:0}
                }}
                >
                    <form 
                    target="_blank"
                    onSubmit={OnSubmit}
                    action="https://formsubmit.co/9b84e299e792358f87cb5713a500ec98"
                    method="POST">
                        {/* Name Input */}
                        <input
                        className={inputStyles}
                        type="text"
                        placeholder="NAME"
                        {...register("name",{
                            required: true,
                            maxLength: 100,
                        })}/>
                        {errors.name &&
                        <p className="mt-1 text-primary-500">
                            {errors.name.type === 'required' && "This field is required."}
                            {errors.name.type === 'maxLength' && "Max Length 100 characters."}
                            </p>}
                        {/* Email Input */}
                        <input
                        className={inputStyles}
                        type="text"
                        placeholder="EMAIL"
                        {...register("email",{
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                        })}/>
                        {errors.email &&
                        <p className="mt-1 text-primary-500">
                            {errors.email.type === 'required' && "This field is required."}
                            {errors.email.type === 'pattern' && "Invalid email address."}
                            </p>}
                        {/* Message */}
                        <textarea
                        className={inputStyles}
                        rows={4}
                        cols={50}
                        placeholder="MESSAGE"
                        {...register("message",{
                            required: true,
                            maxLength: 2000,
                        })}/>
                        {errors.message &&
                        <p className="mt-1 text-primary-500">
                            {errors.message.type === 'required' && "This field is required."}
                            {errors.message.type === 'maxLength' && "Max Length 2000 characters."}
                            </p>}

                        {/* Submit Button */}
                        <button
                        type="submit"
                        className="mb-10 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                        >SUBMIT </button>
                    </form>
                </motion.div>
                <motion.div className="relative mt-15 basis-2/5 md:mt-0"
                initial="hidden" whileInView="visible"
                viewport={{ amount: 0.5}}
                transition={{delay: 0.2,duration:0.5}}
                variants={{
                    hidden:{opacity:0, y:50},
                    visible:{opacity:1, y:0}
                }}
                >
                    <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img className="w-full" alt="contact-us-page-graphic" 
                        src={ContactUsPageGraphic}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs