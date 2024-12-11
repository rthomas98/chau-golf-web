import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Blog = (props) => {
  const { tagline, heading, description, button, blogPosts } = {
    ...BlogDefaults,
    ...props,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-lowmerino px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 md:mb-18 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full max-w-lg">
            <motion.p 
              className="mb-3 font-semibold text-tahitigold md:mb-4"
              variants={itemVariants}
            >
              {tagline}
            </motion.p>
            <motion.h2 
              className="mb-5 text-5xl font-bold text-darkerviridiangreen md:mb-6 md:text-7xl lg:text-8xl"
              variants={itemVariants}
            >
              {heading}
            </motion.h2>
            <motion.p 
              className="text-darkviridiangreen md:text-lg"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="group flex size-full flex-col items-center justify-start overflow-hidden rounded-lg border border-midviridiangreen bg-white shadow-md transition-shadow hover:shadow-xl"
              variants={itemVariants}
            >
              <a href={post.url} className="relative w-full overflow-hidden">
                <motion.img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="aspect-[3/2] size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <div className="flex-1 px-5 py-6 md:p-6">
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 rounded-full bg-lowtahitigold px-3 py-1 text-sm font-semibold text-tahitigold">
                    {post.category}
                  </p>
                  <p className="inline text-sm font-semibold text-darkviridiangreen">
                    {post.readTime}
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <a 
                    className="mb-2 transition-colors hover:text-tahitigold" 
                    href={post.url}
                  >
                    <h2 className="text-xl font-bold text-darkerviridiangreen md:text-2xl">
                      {post.title}
                    </h2>
                  </a>
                  <p className="text-darkviridiangreen">
                    {post.description}
                  </p>
                  <button
                    className="mt-6 flex items-center gap-2 text-tahitigold transition-colors hover:text-midtahitigold"
                    onClick={post.button.onClick}
                  >
                    {post.button.title}
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center justify-end">
          <button
            className="mt-10 rounded-lg bg-tahitigold px-6 py-3 font-semibold text-white transition-colors hover:bg-midtahitigold md:mt-14 lg:mt-16"
            onClick={button.onClick}
          >
            {button.title}
          </button>
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  tagline: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }),
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
      }),
      category: PropTypes.string.isRequired,
      readTime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      button: PropTypes.shape({
        title: PropTypes.string.isRequired,
        onClick: PropTypes.func
      })
    })
  )
};

export const BlogDefaults = {
  tagline: "Latest News & Articles",
  heading: "Stay Updated with Golf Insights",
  description: "Discover the latest trends, tips, and stories from the world of golf. Our expert contributors share valuable insights to help you improve your game.",
  button: { 
    title: "View All Articles"
  },
  blogPosts: [
    {
      url: "#",
      image: {
        src: "/images/blog-1.jpg",
        alt: "Golf tournament preparation tips",
      },
      category: "Tournament Tips",
      readTime: "5 min read",
      title: "Essential Tournament Preparation Guide",
      description: "Learn the key strategies and mental preparation techniques to help you perform your best in competitive golf tournaments.",
      button: {
        title: "Read More"
      }
    },
    {
      url: "#",
      image: {
        src: "/images/blog-2.jpg",
        alt: "Golf community events",
      },
      category: "Community",
      readTime: "4 min read",
      title: "Building Connections Through Golf",
      description: "Discover how participating in golf events can help you build lasting relationships and expand your professional network.",
      button: {
        title: "Read More"
      }
    },
    {
      url: "#",
      image: {
        src: "/images/blog-3.jpg",
        alt: "Golf skill improvement",
      },
      category: "Skill Development",
      readTime: "6 min read",
      title: "Advanced Techniques for Better Scores",
      description: "Expert tips and practice drills to help you improve your accuracy, consistency, and overall performance on the course.",
      button: {
        title: "Read More"
      }
    }
  ]
};
