# Introduction

Welcome! Vulkan Guide is an [open source](https://github.com/realandrew/vulkan_guide) website that attempts to teach the Vulkan graphics API (using the Rust language) and related real-time graphics topics.

Note that this is not the same as The Vulkan Guide from the Khronos Group. If that is what you are looking for you can find it [here](https://github.com/KhronosGroup/Vulkan-Guide?utm_source=vulkanguide.com).

## What is Vulkan Guide?

Vulkan Guide is a site I created to help others learn Vulkan (and graphics techniques in general). Our language of choice is Rust, for C++ I recommend the tutorials at [vulkan-tutorial.com](https://vulkan-tutorial.com/). I'm certainly not an expert in Vulkan, Rust, or even graphics in general. That's actually my main reason for creating this website. I want to both make it easier for myself to pick up where I left off when it comes to graphics, as well as to help others learn (plus it gives me an excuse to keep learning more). I'm a visual learner and find that reading many existing tutorials is boring and unproductive, I hope to teach in a manner that more people can enjoy and learn from. There are not many good graphics tutorials, even fewer for Vulkan, and even less so for Vulkan using Rust as the primary programming language (which is what we'll be using). 

That's not to say there aren't any good graphics tutorials though, I take inspiration from a few great sources:

* [LearnOpenGL by Joey de Vries](https://learnopengl.com/)
* [Vulkan-Tutorial by Alexander Overoorde](https://vulkan-tutorial.com/)
* [Ashen Aetna by hoj-senna](https://github.com/hoj-senna/ashen-aetna)
* And countless others that I can't recall but greatly appreciate

I want to make clear: this is a guide for real-time 2D and 3D graphics (that's the kind used in modern video games). If you are looking for baked/non-real time rendering, there are other great resources covering these other subfields. Some I recommend are:

* [Peter Shirley's Raytracing In One Weekend](https://raytracing.github.io/) covers path traced static renders (think high quality Blender renders). I do plan to show how to do real-time GPU accelerated ray tracing when I get around to writing advanced content, but for high quality path tracing these books are excellent (and free to read online).

Additionally, as I mentioned I am by no means a graphics expert. My goal is not to cover everything possible in graphics, the community has great sources for many things already and I want to point those out where possible. These include:

* [Physically Based Rendering: From Theory To Implementation](https://www.pbr-book.org/) is a great book (which can be read online for free btw) covering physically based rendering. I plan to cover PBR in my 3D rendering content, but book goes further in depth than I plan to. In fact, this will be one of my primary sources for writing my PBR content.

* [Learning Modern 3D Graphics Programming by Jason L. McKesson](https://paroj.github.io/gltut/) is another good book about 3D graphics (and is also free to read online).

Lastly, let me say if you're just wanting to make a game or render some graphics, you're probably better off using an existing game engine (see [Unreal Engine](https://www.unrealengine.com/) and [Unity](https://unity.com/)).

It also helps to look at existing Vulkan games to learn from them. 2 such examples which are open source are [vkQuake](https://github.com/Novum/vkQuake) and [vkDOOM3](https://github.com/DustinHLand/vkDOOM3).

## Why?

As mentioned, my main reasoning is a mix of documenting my Vulkan/graphics journey so I can learn/recall it in the future, as well as to help others learn. Many tutorials are outdated, dry, extremely boring, difficult to follow, or often a combination of these. Additionally, both Vulkan and Rust are relatively new, so there are not many resources for using them together if you're unfamilar either of them. [Rust](https://www.rust-lang.org/) is a language well-suited to this purpose, it's a lower level language with little overhead and strict type and memory enforcement. This is great for performance-heavy renders like the kind you're likely to create with Vulkan. I do a lot of indie game dev, and so part of my motivation is seeing if Rust is ready for prime time in this space yet. So far it seems to work well, if with some rough edges.

I will try to explain concepts clearly and in a non-dry but yet still detailed manner. Although using Rust, we are still mostly using the actual Vulkan methods from the SDK, so you could adapt the tutorial to other languages. I would recommend sticking with Rust though, it's memory safety and high performance make it very well suited for this type of task.

## About the Author

I'm not going to go into a ton of detail here (there's really not much to say anyway). I'm [Andrew Mitchell](https://andrewjmitchell.com/), I just graduated University with a computer science degree as of writing this in the summer of 2022. I'm a fullstack programmer (both in that I can do frontend and backend web development and in addition to that I can work in many other types of programming environments and languages; from mobile apps to web dev to machine learning to game dev). My main aspiration in life is to run a small software studio creating games and software that I enjoy making and using. Games and game development have been a lifelong passion, ever since I started playing games I wanted to make my own. I have a lot of experience using game engines, but very little actually making them or touching their inner workings. I want to change this though, engines are just as cool as the games themselves. I'm starting with what is arguely the most important aspect: rendering (putting the *video* in video games). I've learned a bit of OpenGL, but am putting my main focus on Vulkan as it's more modern, efficient, and flexible. This guide focuses on Vulkan, but perhaps in the future I will make guides for other parts of a video games as well.

## Feedback and Community

I don't want to write this content in an echo chamber. I am by no means a graphics/Vulkan expert, in fact quite the opposite. I plan to integrate [giscus](https://github.com/giscus/giscus) as a comments system once I have time to customize my VitePress theme to support it. This works by embedding the [discussions](https://github.com/realandrew/vulkan_guide/discussions) from our [GitHub repo](https://github.com/realandrew/vulkan_guide). Until then, you can directly open discussions on the repo. Additionally, feel free to reach out to me [directly](https://andrewjmitchell.com/contactme.html).

## Plans for the Future

I might  start a Discord community if that is something that you as readers want. After I get the basic content done, I might open up the site to user contributions. Alongside the Vulkan stuff, I want to have some general graphics stuff as well. Things like lighting techniques that are fairly independent of the graphics API. Once I have a grasp of what content I'm planning and have a rough schedule, I may publish a roadmap of what's to come. The pages on this site feature a last edited date (grabbed from commit timestamps in the git repo) so feel free to check pages again every so often for updates, although for the actual content pages it's unlikely I'll make major changes after publishing, but if and when I do I'll leave a note somewhere on the page explaining what changes I made and why. Feel free to watch the [GitHub repo](https://github.com/realandrew/vulkan_guide) to be notified when content changes/goes live.

## Legal Disclaimer

This site is not affiliated with or endorsed by the Khronos Group. Vulkan® and the Vulkan logo are trademarks of the Khronos Group Inc.
