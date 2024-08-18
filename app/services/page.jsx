"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Specializing in creating responsive, high-performance websites and web applications using modern technologies. From dynamic user interfaces to robust back-end solutions, I deliver tailored web solutions that drive engagement and efficiency.",
        href: "",
    },
    {
        num: "02",
        title: "App Development",
        description: "Expert in developing high-quality, user-centric mobile applications. I deliver scalable and intuitive apps that provide seamless user experiences and meet your specific needs.",
        href: "",
    },
    {
        num: "03",
        title: "UI/UX",
        description: "Creating engaging and user-friendly interfaces with a focus on intuitive design and seamless user experience. I craft visually appealing and functional UI/UX solutions that enhance user satisfaction and drive interaction.",
        href: "",
    },
    {
        num: "04",
        title: "Design",
        description: "Providing innovative and visually striking design solutions that capture your brand’s essence. From logos to marketing materials, I deliver creative designs that stand out and communicate effectively.",
        href: "",
    },
    {
        num: "05",
        title: "Machine Learning",
        description: "Developing advanced machine learning models to extract insights and drive data-driven decisions. I create tailored ML solutions that optimize processes and enhance predictive accuracy.",
        href: "",
    },
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{opacity: 0}} 
                    animate={{
                        opacity: 1, 
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div 
                                key={index} 
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;