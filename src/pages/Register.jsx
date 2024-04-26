import contextProvider from "../components/contextProvider";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { emailPasswordRegister, setReload, setUser } = contextProvider();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  
  const onSubmitRegister = (data) => {
    const { email, password, photoURL, name } = data;
    reset();
    emailPasswordRegister(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            toast.success("Register successful.");
            setUser(res.user);
            setReload(true);
            navigate("/");
          })
          .catch(() => {
            toast.error("Error occured.");
          });
      })
      .catch((err) => {
        if (err?.customData?._tokenResponse?.error?.message == "EMAIL_EXISTS") {
          toast.error("Email already exists.");
        } else {
          toast.error("Register unsuccessful.");
        }
      });
  };

  return (
    <div className="mx-2">
      <Helmet>
        <title>Register | Nova Estate</title>
      </Helmet>
      <ScrollRestoration />
      <div
        data-aos="zoom-in"
        className="w-full mb-9 border border-gray-100/25 max-w-md mx-auto mt-12 p-8 space-y-3 rounded-xl bg-main text-gray-800"
      >
        <h1 className="text-2xl font-bold text-center text-black">Register Now!</h1>
        <form onSubmit={handleSubmit(onSubmitRegister)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-800">
              Name
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
              })}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-main text-gray-800 focus:border-violet-400 bg-transparent appearance-none"
            />
            {errors?.name?.message && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-800">
              Photo URL
            </label>
            <input
              {...register("photoURL", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
                pattern: {
                  value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i,
                  message: "URL must be valid and must include http or https",
                },
              })}
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-main text-gray-800 focus:border-violet-400 bg-transparent appearance-none"
            />
            {errors?.photoURL?.message && (
              <span className="text-red-500">{errors.photoURL.message}</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-800">
              Email
            </label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
              })}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-main text-gray-800 focus:border-violet-400"
            />
            {errors?.email?.message && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-800">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                  validate: {
                    oneLower: (value) => {
                      if (/^(?=.*[a-z])/.test(value)) {
                        return true;
                      }
                      return "Password must include a lowercase character.";
                    },
                    oneUpper: (value) => {
                      if (/^(?=.*[A-Z])/.test(value)) {
                        return true;
                      }
                      return "Password must include a uppercase character.";
                    },
                  },
                })}
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-main text-gray-800 focus:border-violet-400"
              />
              <span
                className="absolute top-4 right-3 cursor-pointer p-1"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors?.password?.message && (
              <span className="text-red-500">{errors.password.message}</span>
            )} 
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white font-bold  bg-violet-500">
            Register
          </button>
        </form>
        <p className="text-sm text-center sm:px-6 text-gray-800">
          Have an account?
          <Link to="/login" className="underline font-bold text-gray-800 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;