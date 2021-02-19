<template>
  <div>
    <div>
      <b-carousel
        :interval="4000"
        controls
        indicators
        class="banner">
        <b-carousel-slide v-for="(group, index) in bannerGroups" 
          :key="index">
          <template v-slot:img>
            <b-container>
              <b-row>
                <p class="description text-truncate">
                  {{group[currentBookIndex].description}}
                </p>
              </b-row>
              <b-row>
                <b-col class="book-container d-block" cols="12" sm="6" md="4" lg="3" @mouseover="onMouseOver(0)">
                  <img class="cover" :src="group[0].cover"/>
                  <p class="name text-truncate">{{group[0].name}}</p>
                </b-col>
                <b-col class="book-container d-none d-sm-block" cols="12" sm="6" md="4" lg="3" @mouseover="onMouseOver(1)">
                  <img class="cover" :src="group[1].cover"/>
                  <p class="name text-truncate">{{group[1].name}}</p>
                </b-col>
                <b-col class="book-container d-none d-md-block d-lg-block" cols="12" sm="6" md="4" lg="3" @mouseover="onMouseOver(2)">
                  <img class="cover" :src="group[2].cover"/>
                  <p class="name text-truncate">{{group[2].name}}</p>
                </b-col>
                <b-col class="book-container d-none d-lg-block d-xl-block" cols="12" sm="6" md="4" lg="3" @mouseover="onMouseOver(3)">
                  <img class="cover" :src="group[3].cover"/>
                  <p class="name text-truncate">{{group[3].name}}</p>
                </b-col>
              </b-row>
            </b-container>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    books: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentBookIndex: 0
    }
  },
  computed: {
    bannerGroups() {
      let groups = []
      for (let i = 0; i < this.books.length; i += 4) {
        groups.push([this.books[i], this.books[i + 1], this.books[i + 2], this.books[i + 3]]);
      }
      return groups
    }
  },
  methods: {
    onMouseOver(index) {
      this.currentBookIndex = index
    }
  }
}
</script>

<style scoped>

.banner {
  background: url(../../../../public/images/banner_background.gif);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.book-container {
  padding: 30px 30px 30px 30px;
}

.cover {
  width: 100%;
}

.description {
  color: #ffffff;
  margin: 30px 20px 0 20px;
  opacity: 0.6;
}

.name {
  color: #ffffff;
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
}
</style>