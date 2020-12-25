<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pb-12">
      <div class="text-4xl font-bold w-full sm-full text-center">
        <!-- <div class="leading-tight">Untereiner.com</div> -->
        <div class="text-royalblue-500 leading-tight">the website of Laurent, Thomas &amp; Romain.</div>
      </div>
      <!-- <div class="mt-8 sm:mt-0">
        <g-image src="../../static/developer.svg" alt="hero" class="mx-auto sm:mx-0" />
      </div> -->
    </div> <!-- end hero -->

    <div class="container-inner mx-auto">
      <!-- <p class="text-lg sm:text-xl">This gridsome theme was forked from my <a href="https://andremadarang.com">personal website</a>. I added more features and decided to release it as an open source project. Check it out on <a href="https://github.com/drehimself/gridsome-portfolio-starter">GitHub</a> or check out the <a href="https://www.youtube.com/watch?v=uHo6o1TNQeE">screencast I did</a>. Feel free to use it for your own site or projects! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, repellat. Dolores iure, quas perspiciatis rerum quaerat atque eum repellat autem.</p> -->

      <div class="flex justify-between py-4">
        <div class="text-center w-full sm:w-1/3 px-8 py-8 sm:py-0">
          <g-image src="../../static/laurent.jpg" alt="Laurent" />
          <div class="font-bold text-xl pt-5 pb-3 text-royalblue-900 leading-tight">Laurent</div>
          <p class="mb-3"><u><a target="_blank" href="https://laurent.untereiner.com/">laurent.untereiner.com</a></u></p>
          <p class="text-lg">Utra-trailer</p>
          <p class="text-lg">UX Designer @<a target="_blank" href="http://www.reborn.lu/">REBORN</a></p>
        </div>
        <div class="text-center w-full sm:w-1/3 px-8 py-8 sm:py-0">
          <g-image src="../../static/thomas.jpg" alt="Thomas" />
          <div class="text-center font-bold text-xl pt-5 pb-3 text-royalblue-900 leading-tight">Thomas</div>
          <p class="mb-3"><u><a target="_blank" href="https://www.instagram.com/ntrnr/">thomas.untereiner.com</a></u></p>
          <p class="text-lg">Architect @<a target="_blank" href="http://www.steinmetzdemeyer.com/">STDM</a></p>
        </div>
        <div class="text-center w-full sm:w-1/3 px-8 py-8 sm:py-0">
          <g-image src="../../static/romain.jpg" alt="Romain" />
          <div class="font-bold text-xl pt-5 pb-3 text-royalblue-900 leading-tight">Romain</div>
          <p class="mb-3"><u><a target="_blank" href="https://romain.untereiner.com">romain.untereiner.com</a></u></p>
          <p class="text-lg">Founder @<a target="_blank" href="http://www.kamina.io/">Kamina.io</a></p>
          <!-- <p class="text-lg">Co-founder &amp; CTO @<a target="_blank" href="http://cantoo.co/">Cantoo.co</a></p> -->
        </div>
      </div>

      <div class="flex justify-between mb-5">
        <div class="text-center w-full sm:w-1/3 px-8 py-8 sm:py-0">
          <div class="text-center w-full py-8">
            <icon name="facebook-f" url="https://www.facebook.com/laurent.untereiner"></icon>
            <icon name="twitter" url="https://twitter.com/webcuriousanima"></icon>
            <icon name="linkedin-alt" url="https://www.linkedin.com/in/laurentuntereiner/"></icon>
            <icon name="instagram" url="https://www.instagram.com/laurent_untereiner/"></icon>
          </div>
        </div>
        <div class="text-center w-full sm:w-1/3 px-8 py-8 sm:py-0">
          <div class="text-center w-full py-8">
            <icon name="twitter" url="https://twitter.com/NTRNR"></icon>
            <icon name="linkedin-alt" url="https://www.linkedin.com/in/thomasuntereiner/"></icon>
            <icon name="instagram" url="https://www.instagram.com/ntrnr/"></icon>
          </div>
        </div>
        <div class="text-center w-full sm:w-1/3 px-8 py-8 sm:py-0">
          <div class="text-center w-full py-8">
            <icon name="twitter" url="https://twitter.com/romainframe"></icon>
            <icon name="linkedin-alt" url="https://www.linkedin.com/in/romainuntereiner/"></icon>
            <icon name="instagram" url="https://www.instagram.com/romainframe/"></icon>
            <icon name="github-alt" url="https://github.com/romainframe"></icon>
            <icon name="at" url="mailto:romain@untereiner.com"></icon>
            <icon name="key-skeleton" url="https://twitter.com/romainframe"></icon>
          </div>
        </div>

      </div>

    </div>

  </Layout>
</template>


<script>
import Icon from '../components/Icon'

export default {
  components: {
    Icon,
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

