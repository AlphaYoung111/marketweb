import { debounce} from "@common/utils";
import BackTop from "@components/content/backtop/BackTop";

export const imgListenerMixin = {
  data() {
    return {
      imgListener: null,
    }
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 500)
    this.imgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoaded', this.imgListener)
    // console.log('m')
  }
}

export const backTopMixin = {
  data() {
    return {
      showToTop: false,
    }
  },
  methods: {
     backClick() {
       this.$refs.scroll.scroll.scrollTo(0, 0, 500);
       // console.log(this.$refs.scroll.scroll);
     },
  },
  components: {
    BackTop
  }

}
