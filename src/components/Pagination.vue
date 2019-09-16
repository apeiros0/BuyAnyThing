<template>
  <nav>
    <ul class="pagination mb-0">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="getPage(pagination.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>

      <li
        class="page-item"
        v-for="page in pagination.total_pages"
        :key="page"
        :class="{ active: page === pagination.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="getPage(page)">{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="getPage(pagination.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // 透過 props 接受外部 data
  props: ['pagination'],
  methods: {
    getPage(page) {
      // 點擊的頁數與目前頁數相同時，不要觸發點擊事件
      if (page === this.pagination.current_page) return;
      // 觸發元件所綁定的自定義事件，並傳遞參數
      this.$emit('getPage', page);
    },
  },
};
</script>

<style></style>
