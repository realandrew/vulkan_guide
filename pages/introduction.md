# Introduction

Welcome! You're probably wondering what this is and why it exists.

First...

## What is this?

Vulkan Guide is a site I created to help others learn Vulkan (and graphics techniques in general). I'm nowhere close to an expert (in fact although I do a lot of work in game engines, I rarely touch actual graphics code). That's actually my main reason for creating this website. I want to both make it easier for myself to pick up where I left off when it comes to graphics, as well as to help others learn. There are not many good graphics tutorials, even fewer for Vulkan, and even less so for Vulkan using Rust as the primary programming language (which is what we'll be using). That's not to say there aren't any though, I take inspiration from a few great sources:

* [LearnOpenGL by Joey de Vries](https://learnopengl.com/)
* [Vulkan-Tutorial by Alexander Overoorde](https://vulkan-tutorial.com/)
* [Ashen Aetna by hoj-senna](https://github.com/hoj-senna/ashen-aetna)
* And countless others that I can't recall but greatly appreciate

## Why?

As mentioned, my main reasoning is a mix of documenting my Vulkan/graphics journey so I can learn/recall it in the future, as well as to help others learn. Many tutorials are outdated, dry, extremely boring, or often a combination of the 3. Additionally, both Vulkan and Rust are relatively new, so there are not many resources for using them together if you're unfamilar either of them. Rust is a language well-suited to this purpose, it's a lower level language with little overhead and strict type and memory enforcement. This is great for performance-heavy renders like the kind you're likely to create if using Vulkan. I do a lot of indie game dev, and so part of my motivation is seeing if Rust is ready for prime time in this space yet. So far it seems to work well, if with some rough edges.

I will try to explain concepts clearly and in a non-dry but yet still detailed manner. Technically, you can adapt this content to other languages besides Rust, but if you're looking for a C/C++ tutorial I recommend the previously mentioned [vulkan-tutorial.com](https://vulkan-tutorial.com/).

## About the Author

I'm not going to go into a ton of detail here (there's really not much to say anyway). I'm [Andrew Mitchell](https://andrewjmitchell.com/), I just graduated University with a computer science degree as of writing this in the summer of 2022. I'm a fullstack programmer (both in that I can do frontend and backend web development and in addition to that I can work in many other types of programming environments and languages; from mobile apps to web dev to machine learning to game dev). My main aspiration in life is to run a small software studio creating games and software that I enjoy making and using. Games and game development have been a lifelong passion, ever since I started playing games I wanted to make my own. I have a lot of experience using game engines, but very little actually making them or touching their inner workings. I want to change this though, engines are just as cool as the games themselves. I'm starting with what is arguely the most important aspect: rendering (putting the *video* in video games). I've learned a bit of OpenGL, but am putting my main focus on Vulkan as it's more modern, efficient, and flexible.

## Feedback and Community

I don't want to write this content in an echo chamber. I am by no means a graphics/Vulkan expert, in fact quite the opposite. I plan to integrate [giscus](https://github.com/giscus/giscus) as a comments system once I have time to customize my VitePress theme to support it. This works by embedding the [discussions](https://github.com/realandrew/vulkan_guide/discussions) from our [GitHub repo](https://github.com/realandrew/vulkan_guide). Until then, you can directly open discussions on the repo. Additionally, feel free to reach out to me [directly](https://andrewjmitchell.com/contactme.html).

## Plans for the Future

I might  start a Discord community if that is something I hear ya'll want. After I get the basic content done (which will probably take years), I might open up the site to user contributions. Alongside the Vulkan stuff, I want to have some general graphics stuff as well. Things like lightning techniques that are fairly independent of the graphics API. Being that my main motivation is game development, I will mostly focus on realtime graphics techniques. If you are interested in renders that take awhile to bake but come out looking hyper-realistic, I can highly recommend Peter Shirley's free [*RayTracing in One Weekend* book series](https://raytracing.github.io/). In the far future when I get to advanced content, I may have some content on ray-tracing, but it will be the realtime GPU-accelerated variant. The books I mentioned are about path tracing where you are rendering a scene in non-real time (think about a final Blender render).

## Legal Disclaimer

This site is not affiliated with or endorsed by the Khronos Group. Vulkan® and the Vulkan logo are trademarks of the Khronos Group Inc.
