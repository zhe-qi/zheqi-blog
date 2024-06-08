<template>
  <article
    class="flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-12 w-full max-w-6xl"
  >
    <section class="w-full !text-base !font-mono rounded-xl">
      <slot></slot>
    </section>
    <header class="flex flex-col gap-3 w-full">
      <h3
        class="text-5xl mb-4 leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-sky-300"
      >
        为什么查看ZheQi-Blog?
      </h3>
      <p class="text-xl leading-normal text-gray-400 w-full max-w-lg mb-4">
        丰富的编程内容: 无论你是初学者还是有经验的开发者，这里都有适合你的内容。
      </p>
      <p class="text-xl leading-normal text-gray-400 w-full max-w-lg mb-4">
        实用的代码示例:
        每篇博文都会提供实际的代码示例，帮助你更好地理解和应用所学知识。
      </p>
      <p class="text-xl leading-normal text-gray-400 w-full max-w-lg mb-4">
        互动社区: 加入我们的讨论，分享你的见解，向其他开发者学习。
      </p>
    </header>
  </article>
</template>
