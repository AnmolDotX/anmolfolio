"use client";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Roboto_Mono } from "next/font/google";
import { client, urlFor } from "@/sanity";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import Link from "next/link";
import { ContactData } from "@/interfaces/ContactsInterfaces";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const robotoMono = Roboto_Mono({
  subsets: ["latin", "greek", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Contact = () => {
  const [contactData, setContactData] = useState<ContactData>(); // Use a type based on your API response structure

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch('*[_type == "contact"]');
        if (data && data.length > 0) {
          setContactData(data[0]); // Assuming you fetch a single contact info object
        }
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };

    fetchData();
  }, []);

  const words = [
    {
      text: "connect me on my",
      className: `text-3xl font-medium tracking-wider ${robotoMono.className}`,
    },
    {
      text: " socials, email, or number ",
      className: `text-blue-500 font-bold text-4xl dark:text-blue-500 ${robotoMono.className}`,
    },
    {
      text: " anywhere",
      className: `text-3xl font-medium tracking-wider ${robotoMono.className}`,
    },
  ];

  const WelcomeText =
    "Let's have a chat on my phone number OR email for any professional or community works";

  return (
    <div className='h-full w-full flex flex-col items-center'>
      <div className='flex flex-col items-center relative'>
        <div className='absolute h-16 w-96 bg-blue-600/80 blur-2xl rounded-full -rotate-3' />
        <h1
          className={`text-orange-600/90 text-4xl tracking-wide font-extrabold rounded-b-lg z-10`}
        >
          Wanna chat ??
        </h1>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div
        id='contact-details'
        className='h-full w-full flex justify-center items-center'
      >
        {contactData && (
          <div className='flex h-full w-full items-center'>
            <div className='relative flex items-center justify-center flex-1 h-full overflow-hidden'>
              <div className='w-[400px] h-60 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 blur-3xl absolute rotate-45' />
              <img
                src='/profile_yellow.jpg'
                alt='Profile Photo'
                className='w-64 h-96 rounded-bl-2xl rounded-tr-2xl shadow-2xl mb-4 object-cover object-center z-10 bg-clip-border shadow-orange-400 border-orange-500 border-4 animate-ping'
                title='Its me BTW!'
              />
              <Meteors number={30} />
            </div>
            <div className='mt-4 text-center flex-1 flex flex-col items-center gap-5'>
              <div className='flex flex-col items-center gap-10'>
                <TextGenerateEffect words={WelcomeText} />
                <div className='flex flex-col items-center border-2 border-orange-500 rounded-lg bg-gradient-to-r from-blue-600/50 backdrop-filter backdrop-blur-lg to-transparent p-5 gap-5'>
                  <p className='text-sm font-bold tracking-widest'>
                    <span className='text-orange-500'>Phone no. : </span>{" "}
                    <span>{contactData.contactNumber}</span>
                  </p>
                  <div className='text-sm font-bold tracking-widest'>
                    <span className='text-orange-500'>Email : </span>{" "}
                    <Link
                      href='mailto:kumaranmol8611@gmail.com'
                      className='text-blue-300 hover:text-blue-500 transition-all duration-200'
                    >
                      {contactData.email}
                    </Link>
                  </div>
                </div>
              </div>
              <div className='flex mt-4'>
                {contactData.socials.map((social: any) => (
                  <Link
                    key={social._key}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/50 hover:bg-blue-800 hover:shadow-orange-600 transition-all hover:shadow-2xl backdrop-filter backdrop-blur-xl duration-300 mx-5 relative'
                  >
                    <div className='absolute w-12 h-12 rounded-full blur-2xl bg-red-500' />
                    <Image
                      width={1280}
                      height={720}
                      src={urlFor(social.logo).url()}
                      alt={social.platform}
                      title={`Connect on ${social.platform}`}
                      className='w-10 h-10 rounded-full object-cover object-center z-10'
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
