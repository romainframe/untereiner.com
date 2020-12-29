<template>
  <Layout>

    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pb-12">
      <div class="text-4xl font-bold w-full sm-full text-center">
        <div class="text-royalblue-500 leading-tight">the website of Laurent, Thomas &amp; Romain.</div>
      </div>
    </div>

    <div class="container-inner md:flex justify-between py-4 mx-auto">
      <!-- Laurent -->
      <div class="relative w-full md:w-1/3 px-8 py-8">
        <div class="text-center mb-6">
          <g-image src="../../static/laurent.jpg" alt="Laurent" />
          <div class="font-bold text-xl pt-5 pb-3 text-royalblue-900 leading-tight">Laurent</div>
          <p class="mb-3"><u><a target="_blank" href="https://www.instagram.com/laurent_untereiner/">laurent.untereiner.com</a></u></p>
          <p class="text-lg">Ultra-trailer</p>
          <p class="text-lg">UX Designer @<a target="_blank" href="http://www.reborn.lu/">REBORN</a></p>
        </div>
        <div class="text-center absolute inset-x-0 bottom-0">
          <icon name="facebook-f" url="https://www.facebook.com/laurent.untereiner"></icon>
          <icon name="twitter" url="https://twitter.com/webcuriousanima"></icon>
          <icon name="linkedin-alt" url="https://www.linkedin.com/in/laurentuntereiner/"></icon>
          <icon name="instagram" url="https://www.instagram.com/laurent_untereiner/"></icon>
        </div>
      </div>
      
      <!-- Thomas -->
      <div class="relative w-full md:w-1/3 px-8 py-8">
        <div class="text-center mb-6">
          <g-image src="../../static/thomas.jpg" alt="Thomas" />
          <div class="font-bold text-xl pt-5 pb-3 text-royalblue-900 leading-tight">Thomas</div>
          <p class="mb-3"><u><a target="_blank" href="https://www.instagram.com/ntrnr/">thomas.untereiner.com</a></u></p>
          <p class="text-lg">Architect @<a target="_blank" href="http://www.steinmetzdemeyer.com/">STDM</a></p>
        </div>
        <div class="text-center absolute inset-x-0 bottom-0">
          <icon name="twitter" url="https://twitter.com/NTRNR"></icon>
          <icon name="linkedin-alt" url="https://www.linkedin.com/in/thomasuntereiner/"></icon>
          <icon name="instagram" url="https://www.instagram.com/ntrnr/"></icon>
        </div>
      </div>
      
      <!-- Romain -->
      <div class="relative w-full md:w-1/3 px-8 py-8">
        <div class="text-center mb-6">
          <g-image src="../../static/romain.jpg" alt="Romain" />
          <div class="font-bold text-xl pt-5 pb-3 text-royalblue-900 leading-tight">Romain</div>
          <p class="mb-3"><u><a target="_blank" href="https://romain.untereiner.com">romain.untereiner.com</a></u></p>
          <p class="text-lg">Founder @<a target="_blank" href="https://www.kamina.io/">Kamina.io</a></p>
          <!-- <p class="text-lg">Co-founder &amp; CTO @<a target="_blank" href="https://cantoo.co/">Cantoo.co</a></p> -->
        </div>
        <div class="text-center absolute inset-x-0 bottom-0">
          <icon name="twitter" url="https://twitter.com/romainframe"></icon>
          <icon name="linkedin-alt" url="https://www.linkedin.com/in/romainuntereiner/"></icon>
          <icon name="instagram" url="https://www.instagram.com/romainframe/"></icon>
          <icon name="github-alt" url="https://github.com/romainframe"></icon>
          <icon name="at" url="mailto:romain@untereiner.com"></icon>
          <icon name="key-skeleton" url="https://twitter.com/romainframe"></icon>
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

