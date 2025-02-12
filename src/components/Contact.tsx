import { GrHomeRounded, GrPhone, GrMail } from "react-icons/gr"
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from "axios"
import { useEffect } from "react"

const POINTS = [
  {
    title: "Our Location",
    icon: <GrHomeRounded />,
    p: "99 S.t Jombio Park Pekanbaru 28292 Indonesia"
  }, {
    title: "Phone Number",
    icon: <GrPhone />,
    p: "(+62)81 414 257 9980"
  }, {
    title: "Email",
    icon: <GrMail />,
    p: "info@testing.com"
  }
]

type IFormInputs = {
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful
    }
  } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    console.log(data)
    await axios.post('https://formbold.com/s/oYkAb', data)
    reset()
  }

  useEffect(() => {
    console.log("isSubmitting changed:", isSubmitting);
  }, [isSubmitting]);
  
  return (
    <div className='pt-25 flex justify-center'>
      <div className="container flex px-10">
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <span className="text-lime-500 font-black">Contact Us</span>
            <h2 className="text-4xl font-bold text-gray pt-1">Get In Touch With Us</h2>
          </div>

          <div>
            <p className="text-gray text-[18px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolorem velit delectus ex temporibus, neque in tempore facilis ad fugiat, optio quasi dicta explicabo suscipit. Libero optio modi error reiciendis nisi excepturi voluptatibus alias ullam.</p>
          </div>

          <div className="flex flex-col gap-5">
            
            {
            POINTS.map(point => (
              <div className="flex">
                <div className="h-15 w-15 bg-[#388016] flex justify-center items-center rounded-xl">
                  <span className="text-white text-3xl"> {point.icon} </span>
                </div>
                <div className="ml-5">
                  <h4 className="text-2xl font-bold text-gray mb-1">
                    {point.title}
                  </h4>
                  <p className="text-sm">
                    {point.p}
                  </p>
                </div>
              </div>
            ))
            }

          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="bg-[#388016] rounded-xl px-10 py-7 shadow-xl">
            <form className="flex flex-col gap-3 min-w-[280px]" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="bg-white rounded font-poppins font-medium px-4 py-1 text-[14px]/6 focus:outline-none" 
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: 'Enter a correct email'
                    }
                  })}
                />
                {
                  errors.email && 
                  <span className="text-red-900 font-bold text-[10px] pt-1 pl-3">* {errors.email?.message}</span>
                }
              </div>

              <div className="flex flex-col">
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="bg-white rounded font-poppins font-medium px-4 py-1 text-[14px]/6 focus:outline-none" 
                  {...register('subject', {
                    required: 'Subject is required'
                  })}
                />
                {
                  errors.subject && 
                  <span className="text-red-900 font-bold text-[10px] pt-1 pl-3">* {errors.subject?.message}</span>
                }
              </div>

              <div className="flex flex-col">
                <textarea 
                  placeholder="Message text"
                  className="bg-white rounded font-poppins font-medium px-4 py-1 text-[14px]/6 focus:outline-none" 
                  {...register('message', {
                    required: 'Message text is required',
                    maxLength: {
                      value: 20,
                      message: 'The max length is 20 characters'
                    }
                  })}
                />
                
                {
                  errors.message && 
                  <span className="text-red-900 font-bold text-[10px] pt-1 pl-3">* {errors.message?.message}</span>
                }
              </div>

              <div className="flex flex-col">
                <button type="submit" disabled={isSubmitting} className="disabled:bg-gray-200 disabled:cursor-not-allowed disabled:active:scale-100 bg-white rounded-md text-[#388016] font-poppins font-bold py-1 cursor-pointer transition duration-150 active:scale-97">
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT' }
                </button>

                {
                  isSubmitSuccessful &&
                  <span className="text-white font-bold text-[10px] pt-1 pl-3">form sent successfully</span>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact